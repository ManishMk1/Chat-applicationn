import React from 'react'
import Avatar from '../../assets/avatar-svgrepo-com.svg'
function LeftSide() {
    const contacts=[
        {
        name:'John',
        status:'Available',
        img:Avatar
      },
      {
        name:'Mary',
        status:'Available',
        img:Avatar
      },
      {
        name:'Alexander',
        status:'Available',
        img:Avatar
      },
      {
        name:'Alex',
        status:'Available',
        img:Avatar
      },
      {
        name:'Adam',
        status:'Available',
        img:Avatar
      },
      {
        name:'Larry',
        status:'Available',
        img:Avatar
      },
    ]
  return (
    <div>
        <div className='flex justify-center items-center lg:justify-start lg:m-4 my-4 mx-2'>
            <div className='border border-primary rounded-full p-1'>
            <img src={Avatar} width={50} height={50} className='rounded-xl'/>
            </div>
          
            <div className='ml-4'>
              <h3  className='text-sm lg:text-2xl'>
                Chat Connect
              </h3>
              <p className=' text-sm lg:text-x font-light'>My Account</p>
              
            </div>
           
          </div>
          <hr />
          <div className=''>
          <div className='mx-4 text-primary lg:text-xl'>
            Messages
          </div>
          <div className='max-h-[60vh] w-full mb-4 overflow-y-scroll no-scrollbar'>{
            contacts.map(({name,status,img},i)=>{
              return(
                <div key={i} className='' >
                  <div className='flex  items-center justify-start mx-4 lg:m-4 my-4 border-b pb-2'>
                    <div className='flex items-center'>
                    <div className='border rounded-full p-1'>
            <img src={img} width={50} height={40} className='sm:rounded-xl hidden sm:block'/>
            </div>
          
            <div className='ml-4'>
              <h3  className=' text-[10px] lg:text-lg font-semibold'>
                {name}
              </h3>
              <p className=' text-[10px] lg:text-sm font-light'>{status}</p>
              
            </div>
           
                    </div>
           
          </div>
                </div>
              )
            })
            }
            </div>
          </div>
    </div>
  )
}

export default LeftSide