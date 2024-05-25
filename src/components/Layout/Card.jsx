import React from 'react';

function Card({
    title,
    desc,
    live,
    github,
    image
}) {
  return (
    <div className='border rounded bg-blue-500 border-transparent'>
        <h2 className='font-bold text-xl text-center bg-slate-800 text-white py-2'>{title}</h2>
        <img src={image} />
        <p className='py-3 px-2'>{desc}</p>
        <h3 className='px-2'>Live at : <a href={live} target='_blank' className='font-bold text-yellow-500 hover:text-yellow-700'>{live}</a></h3>
        <h3 className='px-2 pb-2'>Github : <a href={github} target='_blank' className='font-bold text-yellow-500 hover:text-yellow-700'>{github}</a></h3>
    </div>
  )
}

export default Card