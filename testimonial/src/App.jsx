import React from 'react'
import Testimonial from './components/Testimonial'
import reviews from './data'
export default function App() {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-slate-200'>
      <div className='text-center'>
        <h1 className='text-4xl mt-4 font-semibold text-center'>Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] w-1/4 mt-2 mx-auto'></div>
        <Testimonial reviews={reviews}/>

      </div>
    </div>
  )
}
