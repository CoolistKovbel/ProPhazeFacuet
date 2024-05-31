"use server"

import { getIronSession } from "iron-session";

import { cookies } from "next/headers";
import { SessionData, defaultSession, sessionOptions } from "./dictionary";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const fetchTimerState = async () => {
  const session = await getSession();

  if (!session.timer) {
    session.timer = {
      timeLeft: 14400, // 4 hours in seconds
      laps: 0,
      reward: 1,
      lastUpdated: Date.now(),
    };
    await session.save();
  }

  const elapsed = Math.floor((Date.now() - session.timer.lastUpdated) / 1000);
  const remainingTime = session.timer.timeLeft - elapsed;

  if (remainingTime > 0) {
    return session.timer;
  } else {
    const elapsedLaps = Math.floor(Math.abs(remainingTime) / 14400);
    session.timer.laps = Math.min(session.timer.laps + elapsedLaps + 1, 9);
    session.timer.reward = Math.pow(2, session.timer.laps);
    session.timer.timeLeft = 14400 - Math.abs(remainingTime) % 14400;
    session.timer.lastUpdated = Date.now();

    await session.save();
    return session.timer;
  }
};

export const saveTimerState = async (timeLeft: number, laps: number, reward: number) => {
  const session = await getSession();

  session.timer = {
    timeLeft,
    laps,
    reward,
    lastUpdated: Date.now(),
  };

  await session.save();
};
