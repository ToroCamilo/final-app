import React from 'react'

const Sidebar = () => {
  return (
    <div className=' bg-gray-200 justify-between flex flex-col py-5 px-20'>
        <div className='flex flex-col items-center'>
            <span className='w-20 h-20 bg-red-500 rounded-lg'></span>
            <span>Johan Camilo Toro</span>
        </div>
        <div>
            <button className='bg-orange-500 py-3 px-5 w-full rounded-lg'>Logout</button>
        </div>
        
    </div>
  )
}

export default Sidebar