import React from 'react'

export default function Card({img,title,subtitles}) {
  return (
    <a href="" className='m-4 block max-w-sm overflow-hidden rounded-lg bg-slate-400' >
        <div className='relative'>
            <img src={img} alt="" className='w-full' />
            <div className='flex flex-col justify-between p-4 text-white'>
                <h2 className='mb-2 text-2xl font-bold'>{title}</h2>
                <p className='mb-4 text-sm font-medium'>{subtitles}</p>
            </div>
        </div>
    </a>
  )
}
