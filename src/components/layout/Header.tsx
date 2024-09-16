'use client'
import Image from 'next/image'
import React from 'react'
// import logo_dark from '@/assets/images/logo_dark.svg'
import logo_light from '@/assets/images/logo_light.svg'
import { Button } from '../ui/button'
import Container from './Container'
export default function Header() {
  return (
    <Container>
      <div className='flex flex-row items-center justify-between'>
      <Image height={logo_light.height} width={logo_light.width} className=' w-40 md:w-60 h-full' src={logo_light.src}   alt='logo-light'/>
      <Button variant={"destructive"}>
        Sign In
      </Button>
    </div>
    </Container>
  )
}
