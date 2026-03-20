"use client"
import { ArrowBigLeft, ArrowLeft, ChevronDown, Globe, Instagram, Mail, Phone, Smartphone, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ApplicantsDetails = () => {
    const [activeTab, setActiveTab] = useState("profile")

    const contact = [
        { name: "Email", icon: <Mail className='h-[14px] w-[18px] text-[#7C8493]' />, text: "jeromeBell45@email.com" },
        { name: "Phone", icon: <Smartphone className='h-[14px] w-[18px] text-[#7C8493]' />, text: "+44 1245 572 135" },
        { name: "Instagram", icon: <Instagram className='h-[14px] w-[18px] text-[#7C8493]' />, url: "instagram.com/jeromebell" },
        { name: "Twitter", icon: <Twitter className='h-[14px] w-[18px] text-[#7C8493]' />, url: "twitter.com/jeromebell" },
        { name: "Website", icon: <Globe className='h-[14px] w-[18px] text-[#7C8493]' />, url: "www.jeromebell.com" },
    ]
    return (
        <section className='space-y-6'>
            <div className='flex items-center justify-between'>
                <span className='flex items-center gap-2 text-[24px] font-semibold text-[#25324B]'>
                    <ArrowLeft />
                    Applicants Details
                </span>
                <button className='h-[50px] w-[163px] flex items-center gap-2 justify-center border border-[#CCCCF5] text-[#4640DE] text-[16px] font-bold'>
                    <ChevronDown />
                    More Action
                </button>
            </div>
            <div className='flex gap-6'>
                <div className='border border-[#D6DDEB] space-y-5 px-4 py-6 flex flex-col gap-6 w-[352px]'>
                    <div className='flex items-center gap-3'>
                        <Image height={96} width={96} src={"/belf.svg"} alt='image' />
                        <div>
                            <h2 className='text-[24px] text-[#25324B] font-semibold'>
                                Jereme Belf
                            </h2>
                            <p className='text-[#7C8493] font-normal text-[16px]'>
                                Product Designer
                            </p>
                        </div>
                    </div>
                    <section className='flex flex-col gap-4 bg-[#F8F8FD] justify-center px-3 py-2'>
                        <div className='flex items-center justify-between'>
                            <p>
                                Applied Jobs
                            </p>
                            <span>
                                2 days ago
                            </span>
                        </div>
                        <div>
                            <h2 className='text-[16px] font-semibold text-[#25324B]'>
                                Product Development
                            </h2>

                            <span className='mt-2'>
                                Marketing . Full-Time
                            </span>
                        </div>
                    </section>

                    <button className='h-[50px] w-full flex items-center gap-2 justify-center border border-[#CCCCF5] text-[#4640DE] text-[16px] font-bold'>
                        Schedule Interview
                    </button>

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-[20px] font-semibold text-[#25324B]'>Contact</h2>
                        <div className='flex flex-col gap-3'>
                            {contact.map((item, index) => (
                                <div key={index} className='flex gap-2'>
                                    <span>
                                        {item.icon}
                                    </span>
                                    <div>
                                        <h2 className='text-[16px] font-normal text-[#7C8493]'>
                                            {item.name}
                                        </h2>
                                        {item.text && (
                                            <p className='text-[16px] font-normal text-[#25324B]'>
                                                {item.text}
                                            </p>
                                        )}
                                        {item.url && (
                                            <Link href={item.url} className='text-[16px] font-normal text-[#4640DE]'>
                                                {item.url}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='border border-[#D6DDEB] w-full space-y-5 px-4 py-6 flex flex-col gap-6'>
                    <div className='flex gap-6 border-b pb-2 border-[#D6DDEB]'>
                        <h2 onClick={() => setActiveTab("profile")} className={`text-[16px] cursor-pointer font-semibold text-[#7C8493] ${activeTab === "profile" ? "text-[#25324B]" : ""}`}>
                            Applicant Profile
                        </h2>
                        <h2 onClick={() => setActiveTab("resume")} className={`text-[16px] cursor-pointer font-semibold text-[#7C8493] ${activeTab === "resume" ? "text-[#25324B]" : ""}`}>
                            Resume
                        </h2>
                        {/* <h2 onClick={() => setActiveTab("hiring")} className={`text-[16px] cursor-pointer font-semibold text-[#7C8493] ${activeTab === "hiring" ? "text-[#25324B]" : ""}`}>
                            Hiring Progress
                        </h2> */}
                        {/* <h2 onClick={() => setActiveTab("interview")} className={`text-[16px] cursor-pointer font-semibold text-[#7C8493] ${activeTab === "interview" ? "text-[#25324B]" : ""}`}>
                            Interview Schedule
                        </h2> */}
                    </div>

                    {activeTab === "profile" && (
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-[18px] font-semibold text-[#25324B]'>
                                Personal Info
                            </h2>
                            <div className='grid grid-cols-2 gap-4 border-b pb-2 border-[#D6DDEB]'>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Full Name
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#25324B]'>
                                        Jerome Bell
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Gender
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#25324B]'>
                                        Male
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Date of Birth
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#25324B]'>
                                        March 23, 1995 (26 y.o)
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Language
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#25324B]'>
                                        English, French, Bahasa
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Address
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#25324B]'>
                                        4517 Washington Ave. Manchester, Kentucky 39495
                                    </span>
                                </div>
                            </div>
                            <h2 className='text-[18px] font-semibold text-[#25324B]'>
                                Personal Info
                            </h2>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[16px] font-medium text-[#7C8493]'>
                                    About Me
                                </span>
                                <h2 className='text-[16px] font-semibold text-[#25324B]'>
                                    I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.
                                </h2>
                                <h2 className='text-[16px] font-semibold text-[#25324B]'>
                                    For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
                                </h2>
                            </div>
                            <div className='grid grid-cols-2 gap-4 pb-2'>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Current Job
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#25324B]'>
                                        Product Designer
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Experience in Years
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#25324B]'>
                                        4 Years
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Highest Qualification Held
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#25324B]'>
                                        Bachelors in Engineering
                                    </span>
                                </div>
                                <div>
                                    <h2 className='text-[16px] font-medium text-[#7C8493]'>
                                        Skill set
                                    </h2>
                                    <span className='text-[20px] font-medium text-[#4640DE]'>
                                        Project Management, Copywriting, English
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "resume" && (
                        <div className='flex items-center justify-center'>
                            <Image height={100} width={595} src={"/cv.svg"} alt='cv' />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ApplicantsDetails