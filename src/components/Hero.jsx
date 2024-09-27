import React from 'react';

import hero from "../assets/assets/hero.jpg";

import {PROFILE} from "../assets/constants/index";

export default function() {
  return (
    <div className='h-screen relative flex justify-center items-end' id='hero'>
        <img src={hero} alt={"Hero"} className='h-full absolute inset-0 z-10'  />
        
        {/* LINEAR GRADIENT FOR IMAGE */}
        <div class="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60%  to-black lg:from-30%"></div>
         <div className='z-20 mx-4 max-w-3xl pb-20'>
         <h1 className='text-5xl text-white tracking-wider uppercase font-semibold md:text-7xl'>{PROFILE.name}</h1>
         <p className='pt-2 font-semibold'>{PROFILE.info}</p>
         </div>
    </div>
  )
}
