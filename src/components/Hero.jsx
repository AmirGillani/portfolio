
import { ReactTyped } from "react-typed";
import hero from "../assets/assets/hero.png";
import { PROFILE } from "../assets/constants/index";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="md:h-screen  relative flex justify-center items-end aspect-square md:aspect-auto"
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
          strings={["MERN STACK DEV","   ", "WEB DEVELOPER","   ","AMIR HUSSAIN SHAH"," "]}
          typeSpeed={40}
          backSpeed={50}
          loop
          showCursor={true}
          cursorChar="|"
        >
          <span
            className="text-3xl md:text-5xl font-semibold uppercase tracking-wider text-white text-center inline"
            style={{
              textShadow:
                "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff",
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
