import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 z-[100] absolute w-full'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white  px-4 py-2 rounded'>SIGN IN</button>
            <button className='text-white bg-red-600 px-4 py-2 rounded'>SIGN UP</button>
        </div>
    </div>
  )
}

export default Navbar