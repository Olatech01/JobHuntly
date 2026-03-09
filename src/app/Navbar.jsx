"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='w-full py-4 flex items-center justify-between'>
            <div className='flex items-center gap-16 justify-center'>
                <Image src="/logo.svg" alt="Jobhuntly Logo" width={150} height={50} />
                <div className='flex items-center gap-8'>
                    <Link href={""}>
                        Find jobs
                    </Link>
                    <Link href={""}>
                        Browse Companies
                    </Link>
                </div>
            </div>
            <div>
                <button onClick={() => router.push("/auth/login")} className='bg-transparent cursor-pointer w-[108px] h-[50px] rounded-[8px] border border-[#4640DE] hover:bg-[#4640DE] hover:text-white text-[#4640DE] font-medium mr-4'>
                    Login
                </button>
                <button onClick={() => router.push("/auth/signup")} className='bg-[#4640DE] cursor-pointer w-[108px] h-[50px] rounded-[8px] hover:bg-transparent hover:border-[#4640DE] hover:text-[#4640DE] transition-all hover:border text-white font-medium'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Navbar