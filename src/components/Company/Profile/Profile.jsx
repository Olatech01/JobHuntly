"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Settings } from 'lucide-react';
import { PiUsersFourLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { PiBuildings } from "react-icons/pi";
import { VscFlame } from "react-icons/vsc";


const Profile = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const token = getCookie('token');

            if (!token) {
                toast.error('Please login first');
                router.push('/login');
                return;
            }

            const response = await fetch('/api/company', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();
            console.log("companyData: ", data)

            if (response.ok && data.success) {
                setProfileData(data.data);
            } else {
                toast.error(data.error || 'Failed to fetch profile');
                if (response.status === 401) {
                    router.push('/login');
                }
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            toast.error('An error occurred while fetching profile');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4640DE]"></div>
            </div>
        );
    }

    if (!profileData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500">No profile data found</p>
            </div>
        );
    }

    const { user, company } = profileData;

    return (
        <div className="min-h-screen py-8">
            <div className="flex flex-col md:flex-row border-b border-[#D6DDEB] pb-6 items-start md:items-center gap-4">
                <div className="relative">
                    <div className="w-32 h-32 rounded-2xl p-2">
                        {company.companyLogo ? (
                            <Image
                                height={128}
                                width={128}
                                src={company.companyLogo}
                                alt={company.companyName}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#4640DE] rounded-xl flex items-center justify-center">
                                <span className="text-3xl text-white font-bold">
                                    {company.companyName.charAt(0)}
                                </span>
                            </div>
                        )}
                    </div>
                </div>



                <div className='w-full flex flex-col gap-6'>
                    <div className="flex justify-between w-full">
                        <div className="">
                            <h1 className="text-3xl font-bold text-gray-900">{company.companyName}</h1>
                            <Link
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4640DE] text-[16px] font-semibold"
                            >
                                {company.website}
                            </Link>
                        </div>
                        <button className='text-[#4640DE] border border-[#4640DE] h-[45px] flex items-center justify-center gap-1.5 w-[200px]'>
                            <Settings />
                            <span className='text-[16px] font-medium'>
                                Profile Settings
                            </span>
                        </button>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className='border flex items-center justify-center border-[#D6DDEB] h-[44px] w-[44px] rounded-full'>
                                <VscFlame size={24} />
                            </div>
                            <div>
                                <h2 className='text-[#515B6F] text-[16px] font-normal'>
                                    Founded
                                </h2>
                                <span className='text-[#25324B] text-[16px] font-semibold'>
                                    July 31, 2011
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border flex items-center justify-center border-[#D6DDEB] h-[44px] w-[44px] rounded-full'>
                                <PiUsersFourLight size={24} />
                            </div>
                            <div>
                                <h2 className='text-[#515B6F] text-[16px] font-normal'>
                                    Employees
                                </h2>
                                <span className='text-[#25324B] text-[16px] font-semibold'>
                                    {company.companySize}
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border flex items-center justify-center border-[#D6DDEB] h-[44px] w-[44px] rounded-full'>
                                <IoLocationOutline size={24} />
                            </div>
                            <div>
                                <h2 className='text-[#515B6F] text-[16px] font-normal'>
                                    Location
                                </h2>
                                <span className='text-[#25324B] text-[16px] font-semibold'>
                                    {company.location}
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border flex items-center justify-center border-[#D6DDEB] h-[44px] w-[44px] rounded-full'>
                                <PiBuildings size={24} />
                            </div>
                            <div>
                                <h2 className='text-[#515B6F] text-[16px] font-normal'>
                                    Industry
                                </h2>
                                {/* <span className='text-[#25324B] text-[16px] font-semibold'>
                                    July 31, 2011
                                </span> */}
                                <div className="flex flex-wrap gap-2">
                                    {company.industry.map((ind, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-[#4640DE]/10 text-[#25324B] rounded-full text-sm"
                                        >
                                            {ind}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Company Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className=" rounded-xl">
                        <h2 className="text-[16px] font-semibold mb-4">About {company.companyName}</h2>
                        <p className="text-[#25324B] leading-relaxed">{company.description}</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className="text-[16px] font-semibold mb-4">
                            Contact
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {company.contact.map((ind, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-[#4640DE]/10 text-[#4640DE] font-medium rounded-full text-[16px]"
                                >
                                    {ind}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Company Info */}
                <div className="space-y-6">
                    {/* Company Details Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Company Details</h2>

                        <div className="space-y-4">
                            {/* Location */}
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-[#4640DE]/10 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-gray-900 font-medium">{company.location}</p>
                                </div>
                            </div>

                            {/* Company Size */}
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-[#4640DE]/10 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Company Size</p>
                                    <p className="text-gray-900 font-medium">{company.companySize}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-[#4640DE]/10 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="text-gray-900 font-medium">{user.email}</p>
                                </div>
                            </div>

                            {/* Last Login */}
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-[#4640DE]/10 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Last Login</p>
                                    <p className="text-gray-900 font-medium">
                                        {new Date(user.lastLogin).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit Profile Button */}
                    <button
                        onClick={() => router.push('/company/profile/edit')}
                        className="w-full px-4 py-3 bg-[#4640DE] text-white rounded-xl hover:bg-[#3630B0] transition-colors font-medium"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile