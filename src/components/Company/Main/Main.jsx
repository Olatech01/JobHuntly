import { Calendar1 } from 'lucide-react'
import React from 'react'
import Stats from './Stats'

const Main = () => {
    return (
        <div className='flex  flex-col gap-8'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-[#25324B] text-[24px] font-semibold'>Good Morning, Stripe</h1>
                    <p className='text-[16px] font-medium text-[#7C8493]'>
                        Here is your job listings statistic report from July 19 - July 25.
                    </p>
                </div>
                <div className='flex items-center text-[16px] font-medium text-[#7C8493] gap-1.5 border border-[#D6DDEB] justify-between px-3.5 w-[180px] h-[50px]'>
                    Jul 19 - Jul 25
                    <Calendar1 color='#4640DE' />
                </div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 w-full gap-6'>
                <div className='h-[106px] flex items-center px-4 text-white gap-3 bg-[#4640DE]'>
                    <h2 className='text-[48px] font-semibold'>
                        76
                    </h2>
                    <p className='text-[18px] font-normal'>
                        New candidates to review
                    </p>
                </div>
                <div className='h-[106px] bg-[#56CDAD] flex items-center px-4 text-white gap-3'>
                    <h2 className='text-[48px] font-semibold'>
                        3
                    </h2>
                    <p className='text-[18px] font-normal'>
                        Schedule for today
                    </p>
                </div>
                <div className='h-[106px] bg-[#26A4FF] flex items-center px-4 text-white gap-3'>
                    <h2 className='text-[48px] font-semibold'>
                        24
                    </h2>
                    <p className='text-[18px] font-normal'>
                        Messages received
                    </p>
                </div>
            </div>

            <Stats />
        </div>
    )
}

export default Main