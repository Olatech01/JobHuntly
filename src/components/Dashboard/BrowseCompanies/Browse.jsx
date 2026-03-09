import { MapPin, Search } from 'lucide-react'
import React from 'react'
import CompanyList from './CompanyList'

const Browse = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex items-center justify-between px-8 gap-6 border border-[#D6DDEB] h-[104px]'>
                <div className='flex items-center gap-2 w-full'>
                    <Search color='#7C8493' />
                    <input type="text" placeholder='Search for jobs' className='outline-none w-full text-[16px] border-b border-[#D6DDEB] font-medium text-[#7C8493]' />
                </div>
                <div className='flex items-center gap-2 w-full'>
                    <MapPin color='#7C8493' />
                    <input type="text" placeholder='Location' className='outline-none w-full text-[16px] border-b border-[#D6DDEB] font-medium text-[#7C8493]' />
                </div>
                <button className='bg-[#4640DE] text-white w-[113px] text-[16px] font-medium px-6 py-3 rounded-lg'>
                    Search
                </button>
            </div>
            <CompanyList />
        </div>
    )
}

export default Browse