import { BellDot, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center border-b border-[#D6DDEB] justify-between pr-6 py-4'>
            <div>
                <h2 className='text-2xl font-bold text-gray-800'>Dashboard</h2>
            </div>
            <div className='flex items-center gap-5'>
                <BellDot />
                <Link href={"/company/post"}>
                    <button className='border border-[#CCCCF5] cursor-pointer w-[163px] h-[50px] flex items-center bg-[#4640DE] text-white justify-center text-[20px] font-semibold'>
                        <Plus size={18} className='mr-2' />
                        Post a Job
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header