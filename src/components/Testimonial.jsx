import React from 'react'
import {testimonials} from "../constants/index"
const Testimonial = () => {
  return (
    <div className='mt-20 tracking-wide '>
<h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What people are saying</h2>
<div className="flex flex-wrap justify-center">
{testimonials.map((test,index)=>(
<div className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2' key={index}>
<div className='bg-neutral rounded-md  p-6 text-md border border-neutral-800 font-thin'>
<p className='text-neutral-500'>{test.text} </p>
<div className="flex mt-8 item-start">
    <img className='w-12 h-12 rounded-full mr-6 border border-neutral-300' src={test.image} alt={test.user} />
    <div className="div text-neutral-500">
        <h6> {test.user}</h6>
        <span className='text-sm font-normal text-neutral-600'>{test.company} </span>
    </div>
</div>
</div>
</div>
))}
</div>

    </div>  
  )
}

export default Testimonial