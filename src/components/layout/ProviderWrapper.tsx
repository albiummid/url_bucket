'use client'
import { firebaseApp } from '@/lib/firebase-config'
import { useAuthState } from '@/lib/zustand'
import { MantineProvider } from '@mantine/core'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { PropsWithChildren, useEffect } from 'react'

export default function ProviderWrapper({children}:PropsWithChildren) {
    const {setUser,setIsAuthenticated,setIsLoading} = useAuthState()
    useEffect(()=>{
        const auth = getAuth(firebaseApp);
     const  unsubscribe = ()=>  onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
                setIsAuthenticated(true)
            }else{
                setUser(null)
                setIsAuthenticated(false)
            }
            setIsLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

  return (
    <>
    <MantineProvider>
    <>
     {children}
     </>
    </MantineProvider>
    </>
  )
}
