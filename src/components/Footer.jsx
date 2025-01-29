import React from "react";

import logo from "../assets/assets/logo.png";

import {SOCIAL_MEDIA_LINKS} from "../assets/constants/index";

export default function Footer() {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <figure>
          <img src={logo} alt="logo" width={200} className="mb-2" />
          <div className="mb-10 h-3 w-12 bg-yellow-400"></div>
        </figure>
      </div>
      <div className="flex justify-center items-center gap-8">
        {
            SOCIAL_MEDIA_LINKS.map((link,index)=>{
                return <a key={index}
                href={link.href} target="_blank" rel="noopener noreferrer">{link.icon}</a>
            })
        }
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; All Rights Reserved
      </p>
    </div>
  );
}
