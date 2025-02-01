import React from "react";

import { SKILLS } from "../assets/constants/index";

import { motion } from "framer-motion";

export default function Skills() {

  const containerVarient = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVarient = {
    hidden: { opacity: 1, x: -100,  },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">SKILLS</h2>
      <motion.div className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
      initial="hidden"
      whileInView="visible"
      variants={containerVarient}
      viewport={{ once: true }}
      >
        {SKILLS.map((skills, index) => {
          return (
            <motion.div key={index} className="mb-8 flex items-center justify-between" initial="hidden"
            whileInView="visible" variants={itemVarient} viewport={{ once: true }}>
              <div className="flex items-center">
                <img src={skills.icon} alt="icon" className="w-20 h-20"/>
                <h3 className="px-6 text-xl lg:text-3xl">{skills.name}</h3>
              </div>
              <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
                {skills.experience}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
