import React from "react";

import logo from "../assets/assets/logo.png";

import {SOCIAL_MEDIA_LINKS} from "../assets/constants/index";

import { motion } from "framer-motion";

export default function Footer() {

  const containerVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVarient = {
    hidden: { opacity: 0,  },
    visible: {
      opacity: 1,
      
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <figure>
          <img src={logo} alt="logo"  className="mb-2 md:w-72 w-40" />
          <div className="mb-10 h-3 w-12 bg-yellow-400"></div>
        </figure>
      </div>
      <motion.div className="flex justify-center items-center gap-8"  initial="hidden"
              whileInView="visible"
              variants={containerVarient}
              viewport={{ once: true }}>
        {
            SOCIAL_MEDIA_LINKS.map((link,index)=>{
                return <motion.a key={index}
                variants={itemVarient}
                href={link.href} target="_blank" rel="noopener noreferrer">{link.icon}</motion.a>
            })
        }
      </motion.div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; All Rights Reserved
      </p>
    </div>
  );
}
