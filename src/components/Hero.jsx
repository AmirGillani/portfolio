import React from "react";
import { ReactTyped } from "react-typed";
import hero from "../assets/assets/hero2.jpg";
import { PROFILE } from "../assets/constants/index";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="md:h-screen h-[60vh] relative flex justify-center items-end"
      id="hero"
    >
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
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="z-20 md:mx-4 mx-5 md:max-w-3xl max-w-2xl pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
      >
        <ReactTyped
          strings={[
            "AMIR SHAH",
            "MERN STACK DEV",
            "WEB DEVELOPER",
            "AMIR GILLANI",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
          style={{
            textShadow:
              "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff, 0 0 90px #ff00ff, 0 0 100px #ff00ff",
          }}
        >
          <input
            type="text"
            readOnly
            className="bg-transparent text-4xl text-center text-white tracking-wider uppercase font-semibold md:text-7xl placeholder:text-white"
            style={{
              textShadow:
                "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff, 0 0 90px #ff00ff, 0 0 100px #ff00ff",
            }}
          />
        </ReactTyped>

        <p className="pt-2 font-semibold text-center md:text-sm text-xs">
          {PROFILE.info}
        </p>
      </motion.div>
    </div>
  );
}
