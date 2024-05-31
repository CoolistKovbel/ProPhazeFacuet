import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: string;
    username?: string;
    isPro?: boolean;
    isLoggedIn?: boolean;
    role?: string;
    timeLeft?: number;
    laps?: number;
    reward?: number;
    lastUpdated?: number;
    timer?: any;
}

export const defaultSession:SessionData =  {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    password: process.env.AUTH_SECRET!,
    cookieName: "hateMyLife",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV  === "production"
    }
} 