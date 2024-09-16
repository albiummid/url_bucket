'use client'
import {create} from 'zustand'
import {  persist } from 'zustand/middleware'

interface IAuthState {
    isLoading:boolean;
    isAuthenticated:boolean;
    user:null|any;
    setUser:(payload:any|null)=>void;
    setIsAuthenticated:(payload:boolean)=>void;
    setIsLoading:(payload:boolean)=>void;

}
export const useAuthState = create(persist<IAuthState>((set)=>({
    isLoading:true,
    isAuthenticated:false,
    user:null,
    setUser(payload) {
        set({user:payload})
    },
    setIsAuthenticated(payload) {
        set({isAuthenticated:payload})
    },
    setIsLoading(payload) {
        set({isLoading:payload})
    },
}),{
    name:'authStore'
}))