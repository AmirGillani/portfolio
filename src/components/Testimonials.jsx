import React from "react";

import { TESTIMONIALS } from "../assets/constants/index";

export default function Testimonials() {
  return (
    <div className="container mx-auto py-16 mt-20 tracking-tighter" id="testimonials">
      <h2 className="font-semibold text-4xl text-center mb-12">
        What People Say
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          {TESTIMONIALS.map((review, index) => (
            <div
              className="mx-4 mb-8  rounded-lg border border-dotted border-gray-600 p-6 grid grid-cols-[1fr_6fr] gap-3 md:gap-0 "
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
