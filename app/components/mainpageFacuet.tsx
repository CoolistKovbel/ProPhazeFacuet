'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchTimerState, saveTimerState } from '../lib/action';
import MainHeader from './main-header';


interface TimerState {
  timeLeft: number;
  laps: number;
  reward: number;
  lastUpdated: number;
}

export default function Home() {

  const [timeLeft, setTimeLeft] = useState(14400); // 4 hours in seconds
  const [laps, setLaps] = useState(0);
  const [reward, setReward] = useState(1); // initial reward
  const maxLaps = 9;

  useEffect(() => {
    const fetchTimer = async () => {
      const data: TimerState = await fetchTimerState();
      const elapsed = Math.floor((Date.now() - data.lastUpdated) / 1000);
      const remainingTime = data.timeLeft - elapsed;

      if (remainingTime > 0) {
        setTimeLeft(remainingTime);
      } else {
        const elapsedLaps = Math.floor(Math.abs(remainingTime) / 14400);
        const newLaps = Math.min(data.laps + elapsedLaps + 1, maxLaps);
        const newReward = Math.pow(2, newLaps) * data.reward;

        setTimeLeft(14400 - Math.abs(remainingTime) % 14400);
        setLaps(newLaps);
        setReward(newReward);
      }
    };
    fetchTimer();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev > 0 ? prev - 1 : 0;
        saveTimerState(newTime, laps, reward);
        return newTime;
      });
    }, 1000);

    if (timeLeft === 0 && laps < maxLaps) {
      setLaps(prev => {
        const newLaps = prev + 1;
        saveTimerState(14400, newLaps, reward * 2);
        return newLaps;
      });
      setTimeLeft(14400); // Reset timer to 4 hours
      setReward(prev => prev * 2);
    } else if (laps >= maxLaps) {
      clearInterval(interval); // Stop timer after 9 laps
    }

    return () => clearInterval(interval);
  }, [timeLeft, laps]);

  const handleWithdraw = async () => {
    // Implement your withdrawal logic here
    alert(`Withdrawn ${reward} tokens!`);
    setLaps(0);
    setReward(1);
    setTimeLeft(14400);
    await saveTimerState(14400, 0, 1);
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };              

  return (
    <main className="flex min-h-screen flex-col items-center p-4">

      <article className="p-4">

        <header className="flex items-start gap-2 flex-col bg-[#444] p-4 rounded-lg">
          <h2 className="text-2xl font-bold uppercase">Need some extra tokens</h2>
          <p className="text-sm">
            There are plenty of them around here, popular and common, get them
            before they run out and join the community to refuel.
          </p>
          <Link href="/list" className="bg-[#222] p-4 rounded-lg font-bold w-full text-center">View more</Link>
        </header>


        <div className='bg-[#222] mt-4 rounded-lg drop-shadow-lg '>

          {/* Fucet timer */}

          <div className='p-10 text-center flex items-center flex-col gap-4'>

            <h2 className='text-2xl font-bold'>ProPhaze Token Faucet</h2>
            <p className='text-2xl'>Time left: {formatTime(timeLeft)}</p>

            <p  >Current Reward: {reward} tokens</p>
            <p>Laps: {laps} / {maxLaps}</p>

            <button onClick={handleWithdraw} className="bg-[#111] p-2 rounded-lg font-bold">Withdraw Tokens</button>
          </div>
        


        </div>



      </article>

    </main>
  );
}
