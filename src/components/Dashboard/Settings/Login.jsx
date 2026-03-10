import { CircleAlert } from 'lucide-react'
import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='border-b border-[#D6DDEB] pb-2'>
                <h2 className='text-[#202430] text-[18px] font-semibold'>
                    Basic Information
                </h2>
                <p className='text-[#515B6F] text-[14px] font-normal'>
                    This is login information that you can update anytime.
                </p>
            </div>
            <div className='flex flex-row border-b border-[#D6DDEB] pb-4 justify-between'>
                <div>
                    <h2 className='text-[#202430] text-[16px] font-semibold'>
                        Update Email
                    </h2>
                    <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                        Update your email address to make sure it is safe
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='text-[#202430] text-[16px] font-semibold'>
                            jakegyll@email.com
                        </h2>
                        <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                            Your email address is verified.
                        </p>
                    </div>
                    <form action="" className='w-[540px] flex flex-col gap-4'>
                        <div className='flex flex-col gap-1 gap-2'>
                            <label className='text-[16px] font-semibold'>
                                Update Email
                            </label>
                            <input
                                type="text"
                                className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                placeholder='Enter your new email'
                            />
                            <button className='bg-[#4640DE] text-white font-semibold cursor-pointer w-[145px] h-[50px]'>
                                Update Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex flex-row border-b border-[#D6DDEB] pb-4 justify-between'>
                <div>
                    <h2 className='text-[#202430] text-[16px] font-semibold'>
                        New Password
                    </h2>
                    <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                        Manage your password to make sure it is safe
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <form action="" className='w-[540px] flex flex-col gap-4'>
                        <div className='flex flex-col gap-1 gap-2'>
                            <label className='text-[16px] font-semibold'>
                                Old Password
                            </label>
                            <input
                                type="text"
                                className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                placeholder='Enter your new email'
                            />
                        </div>
                        <div className='flex flex-col gap-1 gap-2'>
                            <label className='text-[16px] font-semibold'>
                                New Password
                            </label>
                            <input
                                type="text"
                                className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                placeholder='Enter your new email'
                            />
                        </div>
                        <span className='text-[#7C8493] text-[14px]'>
                            Minimum 8 characters
                        </span>
                        <button className='bg-[#4640DE] text-white font-semibold cursor-pointer w-[165px] h-[50px]'>
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
            <div className='flex justify-end w-full'>
                <button className='text-[#FF6550] flex items-center gap-2 text-[16px] font-semibold'>
                    Close Account <CircleAlert />
                </button>
            </div>
        </div>
    )
}

export default Login