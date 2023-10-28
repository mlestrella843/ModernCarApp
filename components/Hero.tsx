"use client";
import React from 'react';
import Image from 'next/image';
import { CustomButton } from './';

const Hero = ( ) => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title text-[#D8539E] leading-tight'>
            Rent The Car of Your Dreams With Just One Click!
        </h1>
        
        <p className='hero__subtitle pt-3 pb-2'>
            Streamline your car rental experience with our effortless 
            booking process.
        </p>
    
        <CustomButton 
          title = "Explore Cars"
          containerStyles = "bg-[#D8539E] text-white rounded-full mt-10"
          handleClick= { handleScroll }
        />
      </div>

      <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div> 
       
          <div className="hero__image-overlay"/>   
      </div>
    </div>
  )
}

export default Hero
