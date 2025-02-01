import React from "react";

import { PROJECTS } from "../assets/constants/index";

import Card from "./Card";

import { motion } from "framer-motion";

export default function Projects() {
  const containerVarient = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.4,
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
    <div id="projects">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVarient}
        viewport={{ once: true }}
      >
        PROJECTS
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center py-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVarient}
        viewport={{ once: true }}
      >
        {PROJECTS.map((item, index) => {
          return (
            <motion.div key={index} initial="hidden"
            whileInView="visible" variants={itemVarient} viewport={{ once: true }}>
              <Card
                title={item.title}
                subtitles={item.subtitle}
                img={item.image}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
