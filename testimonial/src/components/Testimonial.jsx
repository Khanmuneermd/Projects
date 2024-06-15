import React from 'react'
import Card from './Card'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'



export default function Testimonial({reviews}) 
{
    const [index, setIndex] = React.useState(0)
    
    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function rightShiftHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex)
    }


  return (

    <div 
        className='w-[85vw] md:w-[700px] bg-white flex flex-col md:relative justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-lg'>
            
            <Card review={reviews[index]}/>
            
            <div className='flex text-2xl mt-5 gap-3 text-violet-400 mx-auto'>
                    <button 
                    onClick={leftShiftHandler}
                    >
                        <FaChevronLeft className='cursor-pointer hover:text-violet-500'/>
                    </button>
                    <button
                    onClick={rightShiftHandler}
                   
                    >
                        <FaChevronRight className='cursor-pointer hover:text-violet-500 '/>
                    </button>
                    </div>
    
                    <div>
                    <button 
                    onClick={surpriseHandler}
                    className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 
                    mt-3 cursor-pointer px-10 py-2 rounded-md text-white font-semibold text-lg'>Surprise Me</button>
                    </div> 
            
           
    </div> 
  )
}
