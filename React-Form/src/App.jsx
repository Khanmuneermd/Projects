import React, { useState } from 'react'

export default function App() {

  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    comments:''

  })
  console.log(formData)
  function changeHandler(ev){
    setFormData(prevformData=>{
      return {...prevformData,
        [ev.target.name]:ev.target.value}
    })
  }
  return (

    <div className='bg-slate-400 w-screen h-screen flex  flex-col justify-center items-center'>

      <form action="" className='flex flex-col space-y-5'>
        <input type='text' placeholder='First Name' className='px-8 rounded-lg' onChange={changeHandler}
        name='firstname'
        value={formData.firstname}
        />

        <input type='text' placeholder='Last Name' className='px-5 rounded-lg' onChange={changeHandler} name='lastname'
        value={formData.lastname}
        />

        <input type='email' placeholder='email here' className='px-5 rounded-lg' onChange={changeHandler} name='email'
        value={formData.email}
        />

        <textarea placeholder='Comments' 
          value={formData.comments}
        className='px-5 rounded-lg' onChange={changeHandler}/>

      </form>

    
    </div>
  )
}
