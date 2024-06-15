/* eslint-disable react/prop-types */
import React from 'react'
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';


export default function Card({course,likedCourses,setLikedCourses}) {
    function handleLikedCourse(){
         if (likedCourses.includes(course.id)){
            setLikedCourses(prev => 
                prev.filter(id => id !== course.id));
            toast.warning('Like removed')

         }
         else{
            if (likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses(prev => [...prev,course.id]);
            }
            toast.success('Liked Successfully');
         }
    }
  return (
    <div
    className='w-[300px] bg-blue-950 rounded-md overflow-hidden text-white'
    >
        <div
        className='relative'>
            <img src={course.image.url} alt={course.image.alt}
            />
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-0 grid place-items-center'>
                <button onClick={handleLikedCourse}>
                   {likedCourses.includes(course.id)? <FcLike size={25}/>  : <FcLikePlaceholder size={25}/>}
                </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2'>
                {
                    course.description.length >100? 
                    course.description.substring(0,100) + '...' : course.description
                }</p>
        </div>
    </div>
  )
}
