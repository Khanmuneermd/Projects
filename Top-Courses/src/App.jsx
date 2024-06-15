import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter'
import {apiUrl , filterData} from './data'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'

export default function App() {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoading(true)
    try {
      let response =  await fetch(apiUrl);
      let output = await response.json();
      // output stores the value of json response
      setCourses(output.data)
    } catch (error) {
      toast.error('network problem occured!!')
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='flex flex-col min-h-screen bg-blue-900 opacity-85'>
      <Navbar/>
      <div className='bg-blue-900 opacity-85'>
        <Filter filterData={filterData}
        category={category}
        setCategory={setCategory}/>  
        <div
          className='w-11/12 max-w-[1200px] flex mx-auto flex-wrap justify-center items-center min-h-[50vh]'
          >
          {
          loading ?
          ( <Spinner/> )
          : (<Cards courses={courses} category={category}/>)
          }

        </div>

      </div>

    </div>
  )
}
