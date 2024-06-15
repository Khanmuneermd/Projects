import React from 'react'

export default function Filter({filterData,category,setCategory}) {
    const handleFilter = (title) => {
        setCategory(title);

    }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {filterData.map((data)=>{
          return ( <button key={data.id}
          className={`text-center text-white
            rounded-lg text-lg px-3 py-2 bg-black
          hover:bg-opacity-50 border-none outline-none transition-all duration-300
          ${category === data.title ? 'bg-purple-500' : 'bg-black'}
          `}
          onClick={()=>handleFilter(data.title)}>
                {data.title}
            </button>)
        })}
    </div>
  )
}
