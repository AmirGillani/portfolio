import React from "react";

import { ABOUT } from "../assets/constants";

export default function About() {
  return (
    <div className="container m-auto" id="about">
      <h2 className="font-semibold text-4xl mt-4 text-center">About</h2>
      <h3 className="text-6xl p-4 uppercase lg:text-[5rem]">{ABOUT.text1}</h3>
      <p className="mr-4 pl-4 text-lg leading-loose">{ABOUT.text2}</p>
    </div>
  );
}
