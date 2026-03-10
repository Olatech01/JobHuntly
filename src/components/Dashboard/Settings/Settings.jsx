"use client"
import { Images } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Login from './Login'
import Notification from './Notification'

const Settings = () => {
    const [activeTab, setActiveTab] = useState("profile")
    return (
        <div className='flex flex-col gap-10'>
            <div className='space-x-10'>
                <span onClick={() => setActiveTab("profile")} className={`text-[16px] cursor-pointer py-2 ${activeTab === "profile" ? "text-[#25324B] border-b-3 border-[#4640DE] font-semibold" : "text-[#7C8493] font-medium"}`}>
                    My Profile
                </span>
                <span onClick={() => setActiveTab("login")} className={`text-[16px] py-2 cursor-pointer ${activeTab === "login" ? "text-[#25324B] border-b-3 border-[#4640DE] font-semibold" : "text-[#7C8493] font-medium"}`}>
                    Login Details
                </span>
                <span onClick={() => setActiveTab("notification")} className={`text-[16px] py-2 cursor-pointer ${activeTab === "notification" ? "text-[#25324B] border-b-3 border-[#4640DE] font-semibold" : "text-[#7C8493] font-medium"}`}>
                    Notifications
                </span>
            </div>

            {activeTab === "profile" && (
                <div className='flex flex-col gap-8'>
                    <div className='border-b border-[#D6DDEB] pb-2'>
                        <h2 className='text-[#202430] text-[18px] font-semibold'>
                            Basic Information
                        </h2>
                        <p className='text-[#515B6F] text-[14px] font-normal'>
                            This is your personal information that you can update anytime.
                        </p>
                    </div>
                    <div className='flex flex-row border-b border-[#D6DDEB] pb-4 justify-between'>
                        <div>
                            <h2 className='text-[#202430] text-[16px] font-semibold'>
                                Profile Photo
                            </h2>
                            <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                                This image will be shown publicly as your profile picture, it will help recruiters recognize you!
                            </p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <Image height={124} width={124} src={"/Avatar.svg"} alt='image' />
                            <div className='w-[383px] flex border-dotted border-4 border-[#4640DE] h-[144px] items-center justify-center flex-col'>
                                <Images color='#4640DE' />
                                <p className='text-[16px] font-medium'>
                                    <span className='text-[#4640DE]'>Click to replace</span> or drag and drop
                                </p>
                                <span className='text-[#7C8493] text-[16px] font-normal'>
                                    SVG, PNG, JPG or GIF (max. 400 x 400px)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row border-b border-[#D6DDEB] pb-4 justify-between'>
                        <h2 className='text-[#202430] text-[16px] font-semibold'>
                            Personal Details
                        </h2>
                        <div className='w-[540px] flex flex-col gap-4'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-[16px] font-semibold'>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                    placeholder='Jake Gyll'
                                />
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[16px] font-semibold'>
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                        placeholder='Jake Gyll'
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[16px] font-semibold'>
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                        placeholder='Jake Gyll'
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[16px] font-semibold'>
                                        Date Of Birth
                                    </label>
                                    <input
                                        type="date"
                                        className='border text-[#7C8493] border-[#D6DDEB] uppercase px-3 outline-0 bg-transparent h-[40px]'
                                        placeholder='Jake Gyll'
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-[16px] font-semibold'>
                                        Email
                                    </label>
                                    <select className='border text-[#7C8493] border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'>
                                        <option value="">Select</option>
                                        <option value="">Male</option>
                                        <option value="">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row border-b border-[#D6DDEB] pb-4 justify-between'>
                        <div>
                            <h2 className='text-[#202430] text-[16px] font-semibold'>
                                Account Type
                            </h2>
                            <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                                You can update your account type
                            </p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-3'>
                                <input type="checkbox" />
                                <div>
                                    <h2 className='text-[#202430] text-[16px] font-semibold'>Job Seeker</h2>
                                    <p className='text-[#515B6F] text-[16px] font-normal'>Looking for a job</p>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <input type="checkbox" />
                                <div>
                                    <h2 className='text-[#202430] text-[16px] font-semibold'>Employer</h2>
                                    <p className='text-[#515B6F] text-[16px] font-normal'>Hiring, sourcing candidates, or posting a jobs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-end w-full'>
                        <button className='bg-[#4640DE] text-white font-semibold cursor-pointer w-[145px] h-[50px]'>
                            Save Profile
                        </button>
                    </div>
                </div>
            )}
            {activeTab === "login" && (
                <Login />
            )}
            {activeTab === "notification" && (
                <Notification />
            )}
        </div>
    )
}

export default Settings