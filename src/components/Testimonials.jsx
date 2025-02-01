import React from "react";

import { TESTIMONIALS } from "../assets/constants/index";

import { motion } from "framer-motion";

export default function Testimonials() {

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
    <div className="container mx-auto py-16 mt-20 tracking-tighter" id="testimonials">
      <h2 className="font-semibold text-4xl text-center mb-12">
        What People Say
      </h2>
      <div className="max-w-3xl mx-auto">
        <motion.div className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              variants={containerVarient}
              viewport={{ once: true }}
        >
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              className="mx-4 mb-8  rounded-lg border border-dotted border-gray-600 p-6 grid grid-cols-[1fr_6fr] gap-3 md:gap-0 "
              key={index}
              variants={itemVarient}
            >
              <img
                src={review.image}
                alt=""
                className="mb-4 mr-6 h-16 w-16 rounded-full md:mb-0"
              />
              <div>
                <p className="mb-4 italic">{review.quote}</p>
                <p className="font-bold">{review.name}</p>
                <p className="text-gray-400">{review.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
