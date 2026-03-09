import { Globe, Instagram, Languages, Mail, Plus, Smartphone, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaRegEdit } from "react-icons/fa";


const Profile = () => {
    const experiences = [
        {
            position: "Product Designer",
            companyName: "Twitter",
            logo: "/twitter.svg",
            location: "Manchester, UK",
            duration: "Jun 2019 - Present (1y 1m)",
            jobType: "Full-Time",
            description: "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads."
        },
        {
            position: "Growth Marketing Designer",
            companyName: "Growth",
            logo: "/growth.svg",
            location: "Manchester, UK",
            duration: "Jun 2011 - May 2019 (8y)",
            jobType: "Full-Time",
            description: "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives"
        },
    ]
    return (
        <div className='flex flex-row gap-10'>
            <div className='w-full flex flex-col gap-10'>
                <div className='border border-[#D6DDEB] py-6 px-4 flex flex-col gap-6'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[20px] font-semibold text-[#25324B]'>
                            About Me
                        </h2>
                        <span className='border border-[#D6DDEB] p-3'>
                            <FaRegEdit color='#4640DE' />
                        </span>
                    </div>
                    <p className='text-[#25324B] text-[16px] font-normal'>
                        I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.
                    </p>
                    <p className='text-[#25324B] text-[16px] font-normal'>
                        For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
                    </p>
                </div>
                <div className='border border-[#D6DDEB] py-6 px-4 flex flex-col gap-6'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[20px] font-semibold text-[#25324B]'>
                            Experiences
                        </h2>
                        <span className='border border-[#D6DDEB] p-3'>
                            <Plus color='#4640DE' />
                        </span>
                    </div>

                    <div className='flex flex-col gap-8'>
                        {experiences.map((item, index) => (
                            <div key={index} className='flex gap-5 items-start'>
                                <Image height={80} width={80} src={item.logo} alt={item.companyName}/>
                                <div className='space-y-2'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-[18px] font-semibold text-[#25324B]'>
                                            {item.position}
                                        </h2>
                                        <span className='border border-[#D6DDEB] p-3'>
                                            <FaRegEdit color='#4640DE' />
                                        </span>
                                    </div>
                                    <div className='text-[14px] font-normal text-[#7C8493]'>
                                        <span className='text-[14px] font-semibold text-[#25324B]'>{item.companyName}</span> . {item.jobType} . {item.duration}
                                    </div>
                                    <p className='text-[14px] font-normal text-[#7C8493]'>
                                        {item.location}
                                    </p>
                                    <span className='text-[#515B6F] text-[16px] font-normal'>
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-[352px] flex flex-col gap-10'>
                <div className='border border-[#D6DDEB] py-6 px-4 flex flex-col gap-6'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[20px] font-semibold text-[#25324B]'>
                            Additional Details
                        </h2>
                        <span className='border border-[#D6DDEB] p-3'>
                            <FaRegEdit color='#4640DE' />
                        </span>
                    </div>
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <Mail />
                            <span className='text-[#7C8493] text-[16px] font-normal'>Email</span>
                        </div>
                        <p className='text-[#25324B] text-[16px] font-normal'>
                            jakegyll@email.com
                        </p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <Smartphone />
                            <span className='text-[#7C8493] text-[16px] font-normal'>Phone</span>
                        </div>
                        <p className='text-[#25324B] text-[16px] font-normal'>
                            +44 1245 572 135
                        </p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <Languages />
                            <span className='text-[#7C8493] text-[16px] font-normal'>Languages</span>
                        </div>
                        <p className='text-[#25324B] text-[16px] font-normal'>
                            English, French
                        </p>
                    </div>
                </div>
                <div className='border border-[#D6DDEB] py-6 px-4 flex flex-col gap-6'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[20px] font-semibold text-[#25324B]'>
                            Social Links
                        </h2>
                        <span className='border border-[#D6DDEB] p-3'>
                            <FaRegEdit color='#4640DE' />
                        </span>
                    </div>
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <Instagram />
                            <span className='text-[#7C8493] text-[16px] font-normal'>Instagram</span>
                        </div>
                        <p className='text-[#4640DE] text-[16px] font-normal'>
                            instagram.com/jakegyll
                        </p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <Twitter />
                            <span className='text-[#7C8493] text-[16px] font-normal'>Twitter</span>
                        </div>
                        <p className='text-[#4640DE] text-[16px] font-normal'>
                            twitter.com/jakegyll
                        </p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <Globe />
                            <span className='text-[#7C8493] text-[16px] font-normal'>Website</span>
                        </div>
                        <p className='text-[#4640DE] text-[16px] font-normal'>
                            www.jakegyll.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile