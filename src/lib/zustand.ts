"use client";
import { User } from "firebase/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthState {
    isLoading: boolean;
    isAuthenticated: boolean;
    user: null | any;
    browserInfo: null | any;
    setUser: (payload: User | any) => void;
    setBrowserInfo: (payload: User | any) => void;
    setIsAuthenticated: (payload: boolean) => void;
    setIsLoading: (payload: boolean) => void;
    resetState: () => void;
}

const initialAuthState = {
    isLoading: true,
    isAuthenticated: false,
    user: null,
    browserInfo: null,
};
export const useAuthState = create(
    persist<IAuthState>(
        (set) => ({
            ...initialAuthState,
            setUser(payload) {
                set({ user: payload });
            },
            setBrowserInfo(payload) {
                set({ browserInfo: payload });
            },
            setIsAuthenticated(payload) {
                set({ isAuthenticated: payload });
            },
            setIsLoading(payload) {
                set({ isLoading: payload });
            },
            resetState() {
                set(initialAuthState);
            },
        }),
        {
            name: "authStore",
        }
    )
);
