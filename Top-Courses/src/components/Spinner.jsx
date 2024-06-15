import React from 'react'
import './Spinner.css'
export default function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className="spinner">
        </div>
         <span className='text-black text-lg font-semibold'>Loading...</span>
    </div>
  )
}
