import React from 'react'
import LeftSide from './LeftSide'
import Mid from './Mid'
function DashBoard() {
  
  return (
    <div className='w-screen flex'>
        <div className='w-1/4 h-screen bg-secondary'>
          <LeftSide />
        </div>
        <div className='w-2/4 h-screen bg-white flex flex-col items-center'>
        <Mid></Mid>
        </div>
        <div className='w-1/4 h-screen'>

        </div>
    </div>
  )
}

export default DashBoard