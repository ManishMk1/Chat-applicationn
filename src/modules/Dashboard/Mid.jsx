import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import Avatar from '../../assets/avatar-svgrepo-com.svg'
import Innput from '../../components/Innput'
import { IoIosSend } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
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
      <IoCallOutline className='text-xl sm:text-3xl text-gray-500 mr-4 cursor-pointer' />
      </div>
      
    </div>
    <div className='h-[85%] w-full overflow-y-scroll no-scrollbar border-b'>
      <div className='sm:px-14 px-4 sm:py-14 py-7'>
    <div className='max-w-[80%] sm:max-w-[40%] rounded-b-xl rounded-tr-xl bg-secondary mb-6 p-4'>
      Lorem ipsum dolor sit amet consectetur dfsdfasfasd cdcvxcvx fSDSDf fsfd   dfsdf  sdfsd 
    </div>
    <div className='max-w-[80%] sm:max-w-[40%] rounded-b-xl rounded-tl-xl ml-auto bg-primary  mb-6 text-white p-4'>
      dsfadfhsf gs dgsfdfg sg sgsd
    </div>
    <div className='max-w-[80%] sm:max-w-[40%] rounded-b-xl rounded-tr-xl bg-secondary mb-6 p-4'>
      Lorem ipsum dolor sit amet consectetur dfsdfasfasd cdcvxcvx fSDSDf fsfd   dfsdf  sdfsd 
    </div>
    <div className='max-w-[80%] sm:max-w-[40%] rounded-b-xl rounded-tl-xl ml-auto bg-primary  mb-6 text-white p-4'>
      dsfadfhsf gs dgsfdfg sg sgsd
    </div>
      </div>
    </div>
    <div className='w-full flex items-center justify-center py-7 lg:p-14 mx-1'>
      <Innput type="text" placeholder='Enter a message' isClassName='w-[75%]' className='w-full p-2 px-4 border-0 shadow-lg bg-light focus:border-0 focus:outline-none '/>
      <IoIosSend className='text-3xl sm:text-4xl ml-2 sm:ml-4 mt-2 cursor-pointer bg-secondary rounded-full p-1 '/>
      <CiSquarePlus className='text-4xl sm:text-5xl ml-2 sm:ml-4 mt-2 cursor-pointer bg-secondary rounded-full 
      p-1'/>
    </div>
    </>
  )
}

export default Mid