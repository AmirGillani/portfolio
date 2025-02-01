import React from "react";

import awardsVideo from "../assets/assets/video.mp4";

import { ACHIEVEMENT } from "../assets/constants/index";

import {motion} from "framer-motion";

export default function Awards() {
  return (
    <div id="award">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Awards</h2>
      <div className="mx-auto flex flex-row flex-wrap max-w-6xl">
        <motion.div className="w-full p-2 sm:w-1/2"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 3}}
        viewport={{once:true}}
        >
          <video autoPlay muted playsInline controls preload="none" onContextMenu={(e) => e.preventDefault()}>
            <source src={awardsVideo} type="video/mp4" />
          </video>
        </motion.div>
        <motion.div className="w-full p-4 text-center sm:w-1/2"    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 3, delay: 1 }}
        viewport={{once:true}}>
          <h2 className="mb-4 text-3xl">{ACHIEVEMENT.title}</h2>
          <span className="mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400">
            {ACHIEVEMENT.award}
          </span>
          <p className="m-4 p-2 italic">{ACHIEVEMENT.description}</p>
        </motion.div>
      </div>
    </div>
  );
}
