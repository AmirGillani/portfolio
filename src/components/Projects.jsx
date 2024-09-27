import React from 'react';

import {PROJECTS} from "../assets/constants/index";

import Card from "./Card";

export default function Projects() {
  return (
    <div id='projects'>
        <h2 className='mt-20 text-center text-4xl font-semibold'></h2>
        <div className='flex flex-wrap justify-center py-8'>
        {
           PROJECTS.map((item,index)=>{return <Card title={item.title} subtitles={item.subtitle} img={item.image} key={index} />})
        }
        </div>
    </div>
  )
}
