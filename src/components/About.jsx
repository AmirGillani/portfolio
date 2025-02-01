import React from "react";

import { ABOUT } from "../assets/constants";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container m-auto" id="about">
      <motion.h2 className="font-semibold text-4xl mt-4 text-center"
      initial={{opacity:0,y:-100}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5}}
      viewport={{once:true}}
      >About</motion.h2>
      <motion.h3 className="text-4xl md:text-6xl p-4 uppercase lg:text-[5rem]"
       initial={{opacity:0,x:-100}}
       whileInView={{opacity:1,x:0}}
       transition={{duration:1}}
       viewport={{once:true}}
      >{ABOUT.text1}</motion.h3>
      <motion.p className="mr-4 pl-4 text-lg leading-loose"
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        viewport={{once:true}}
      >{ABOUT.text2}</motion.p>
    </div>
  );
}
