import React from "react";

import hero from "../assets/assets/hero2.jpg";

import { PROFILE } from "../assets/constants/index";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="md:h-screen h-[50vh] relative flex justify-center items-end" id="hero">
      <motion.img
        src={hero}
        alt={"Hero"}
        className="h-full absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* LINEAR GRADIENT FOR IMAGE */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60%  to-black lg:from-30%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="z-20 mx-4 max-w-3xl pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3,delay: 1 }}
      >
        <h1 className="text-5xl text-white tracking-wider uppercase font-semibold md:text-7xl" style={{
    textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff, 0 0 90px #ff00ff, 0 0 100px #ff00ff"
  }}>
          {PROFILE.name}
        </h1>
        <p className="pt-2 font-semibold">{PROFILE.info}</p>
      </motion.div>
    </div>
  );
}
