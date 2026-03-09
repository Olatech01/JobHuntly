import { BellDot } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center border-b border-[#D6DDEB] justify-between pr-6 py-4'>
        <div> 
            <h2 className='text-2xl font-bold text-gray-800'>Dashboard</h2>
        </div>
        <div className='flex items-center gap-5'> 
            <button className='border border-[#CCCCF5] cursor-pointer w-[213px] h-[50px] text-[#4640DE] text-[20px] font-semibold'>
                Back To Homepage
            </button>
            <BellDot />
        </div>
    </div>
  )
}

export default Header