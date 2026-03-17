"use client"
import { UserContext } from '@/components/Context/UserContext'
import { Calendar1, X } from 'lucide-react'
import Image from 'next/image'
import React, { useContext } from 'react'

const Application = () => {
    const {user} = useContext(UserContext)
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-[#25324B] text-[24px] font-semibold'>Keep it up, {user?.fullName}</h1>
                    <p className='text-[16px] font-medium text-[#7C8493]'>
                        Here is what’s happening with your job search applications from July 19 - July 25.
                    </p>
                </div>
                <div className='flex items-center text-[16px] font-medium text-[#7C8493] gap-1.5 border border-[#D6DDEB] justify-between px-3.5 w-[180px] h-[50px]'>
                    Jul 19 - Jul 25
                    <Calendar1 color='#4640DE' />
                </div>
            </div>

            <div className="flex justify-between bg-[#F6F6FD] min-h-[125px] px-10 items-center">
                <div className='flex items-center gap-4'>
                    <Image src={"/feature.svg"} height={56} width={56} alt='image' className='' />
                    <div>
                        <h1 className='text-[18pz] font-medium text-[#4640DE]'>
                            New Feature
                        </h1>
                        <p className='text-[16px] font-medium text-[#7C8493]'> 
                            You can request a follow-up 7 days after applying for a job if the application status is in review. <br /> Only one follow-up is allowed per job.
                        </p>
                    </div>
                </div>
                <X />
            </div>
        </div>
    )
}

export default Application