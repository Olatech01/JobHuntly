import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex bg-[#F8F8FD]'>
      <div className='w-full h-screen'>
        <Image src="/auth.svg" alt="Login Image" width={500} height={500} className='w-full h-screen' />
      </div>
      <div className='w-full bg-white h-screen'>
        
      </div>
    </div>
  )
}

export default page