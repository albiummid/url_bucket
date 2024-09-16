'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import LottieAnimation from '@/assets/animation/lottie/organize.json'

import { useLottie } from "lottie-react";
import Container from '@/components/layout/Container'
import { Typewriter } from 'react-simple-typewriter'
export default function HomePage() {
  const {View,} = useLottie({
    animationData:LottieAnimation,
    loop:true,
  })
  return (
  <div className=' '>
      <Container>
      <div className=' mx-auto'>
      <div className=' flex sm:flex-row  items-center'>
      <div className=" space-y-2 w-full ">
     <div className='md:mb-10 '>
     <span className='text-lg  md:text-3xl  font-semibold  sm:text-left'>
        Simple and fast  <br /> <span className=' text-red-500 text-2xl md:text-5xl '>
        <Typewriter
        cursor
        cursorStyle={'_'}
        words={['URL Manager','URL shortener',"URL analytics"]} loop/>
        </span>
      </span>
     </div>
      <p className='text-xs sm:text-base '>
      ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received.
      </p>
    
      {/* <div className="mt-5 md:pt-10 gap-1 space-y-2  bg-rose-400/10 p-5 rounded-lg ">
      <Label className=' md:text-lg font-semibold' >
        Make your first shortened url
      </Label>
      <div className='flex flex-row justify-between items-center gap-2 w-full  '>
      <Input placeholder='Type or Paste your link here...' style={{outline:'none'}} className='border border-black'  />
      
      </div>
    
    </div> */}

    <Button variant={"destructive"} className='md:text-base text-xs'  >
        Get Started for Free
      </Button>
     
      </div>
       <div className='w-full hidden md:flex '>
       {/* <Image className='sm:w-full lg:w-[400px]' height={MultiTasking.height} width={MultiTasking.width} src={MultiTasking.src} alt='multitasking'/> */}
        {View}
      </div>
      </div>
    </div>
    <div className="grid grid-cols-2 md:gap-5 gap-2 md:mt-10 mt-5  md:grid-cols-3 lg:grid-cols-3 justify-center">
    <FeatureCard icon={require('@/assets/icons/car.png')} label='Blazing fast' description='url-bucket is easy and fast, enter the long link to get your shortened link'/>
    <FeatureCard icon={require('@/assets/icons/link-building.png')} label='Shortened' description='Use any link, no matter what size, ShortURL always shortens'/>

        <FeatureCard icon={require('@/assets/icons/secure.png')} label='Safe and Secure' description={'It is fast and secure, our service has HTTPS protocol and data encryption'}/>
    <FeatureCard icon={require('@/assets/icons/monitor.png')} label='Analytics' description='It is fast and secure, our service has HTTPS protocol and data encryption'/>
    <FeatureCard icon={require('@/assets/icons/responsive.png')} label='Analytics' description='Compatible with smartphones, tablets and desktop'/>
    <FeatureCard icon={require('@/assets/icons/guarantee.png')} label='Analytics' description='All links that try to disseminate spam, viruses and malware are deleted'/>
     
    </div>
   </Container>
   {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="10" d="M0,224L120,202.7C240,181,480,139,720,138.7C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
  </div>
  )
}

const FeatureCard = ({icon,label,description}:{icon:string,label:string,description:string})=>{
  return      <div

 
  className='cursor-cell flex flex-col items-center  border-2 p-2 rounded-lg border-slate-300 duration-300 hover:bg-rose-200 hover:border-rose-400'>
  <Image className=' h-10 w-10 md:h-14 md:w-14' src={icon} alt='hello'/>
  <p className='text-center font-semibold text-xs md:text-base  mb-2'>{label}</p>
  <p className='text-center text-xs md:w-2/3'>{description}</p>
  </div>
}
