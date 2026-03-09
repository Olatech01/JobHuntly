import { Calendar1 } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-[#25324B] text-[24px] font-semibold'>Good Morning, Jake</h1>
          <p className='text-[16px] font-medium text-[#7C8493]'>
            Here is what’s happening with your job search applications from July 19 - July 25.
          </p>
        </div>
        <div className='flex items-center text-[16px] font-medium text-[#7C8493] gap-1.5 border border-[#D6DDEB] justify-between px-3.5 w-[180px] h-[50px]'>
          Jul 19 - Jul 25
          <Calendar1 color='#4640DE'/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard