import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import Avatar from '../../assets/avatar-svgrepo-com.svg'
function Mid() {
  return (
    <>
    <div className='  w-[90%] sm:w-[75%] bg-secondary h-[60px] sm:h-[80px] mt-7 rounded-full flex items-center'>
      <div className='flex items-center justify-start border p-1 rounded-full ml-2 sm:ml-6 mr-2 sm:mr-4 cursor-pointer'><img src={Avatar} width={40} height={40} /></div>
      <div className='mr-auto'>
      <h3 className='text-sm sm:text-lg'>Alexander</h3>
      <p className='text-sm'>Online</p>
      </div>
      <div>
      <IoCallOutline className='text-3xl text-gray-500 mr-4 cursor-pointer' />
      </div>
      
    </div>
    <div className='h-[75%] w-full border'>

    </div>
    </>
  )
}

export default Mid