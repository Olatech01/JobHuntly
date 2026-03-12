"use client";

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import React from 'react'
import { UserContext } from '@/components/Context/UserContext';
import Image from 'next/image';
import { Share } from 'lucide-react';

// Loader Component
const JobDetailsLoader = () => {
    return (
        <div className="flex flex-col gap-8 animate-pulse">
            {/* Header Loader */}
            <div className='bg-[#D6DDEB] flex items-center px-8 justify-between w-full h-[200px]'>
                <div className='flex items-center gap-4'>
                    <div className='w-[80px] h-[80px] bg-gray-300 rounded-md'></div>
                    <div>
                        <div className='h-8 w-64 bg-gray-300 rounded mb-2'></div>
                        <div className='h-4 w-48 bg-gray-300 rounded'></div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 bg-gray-300 rounded'></div>
                    <div className='bg-gray-300 w-[125px] h-[50px] rounded'></div>
                </div>
            </div>

            {/* Content Loader */}
            <div className='flex justify-between gap-[20px] px-8'>
                <div className='flex flex-col gap-8 w-2/3'>
                    {/* Description Loader */}
                    <div className="space-y-2">
                        <div className='h-8 w-32 bg-gray-300 rounded'></div>
                        <div className='space-y-2'>
                            <div className='h-4 w-full bg-gray-200 rounded'></div>
                            <div className='h-4 w-5/6 bg-gray-200 rounded'></div>
                            <div className='h-4 w-4/6 bg-gray-200 rounded'></div>
                        </div>
                    </div>

                    {/* Responsibilities Loader */}
                    <div className="space-y-2">
                        <div className='h-8 w-40 bg-gray-300 rounded'></div>
                        <div className='space-y-2'>
                            <div className='h-4 w-full bg-gray-200 rounded'></div>
                            <div className='h-4 w-5/6 bg-gray-200 rounded'></div>
                            <div className='h-4 w-4/6 bg-gray-200 rounded'></div>
                        </div>
                    </div>

                    {/* Who You Are Loader */}
                    <div className="space-y-2">
                        <div className='h-8 w-36 bg-gray-300 rounded'></div>
                        <div className='space-y-2'>
                            <div className='h-4 w-full bg-gray-200 rounded'></div>
                            <div className='h-4 w-5/6 bg-gray-200 rounded'></div>
                            <div className='h-4 w-4/6 bg-gray-200 rounded'></div>
                        </div>
                    </div>

                    {/* Nice-To-Haves Loader */}
                    <div className="space-y-2">
                        <div className='h-8 w-44 bg-gray-300 rounded'></div>
                        <div className='space-y-2'>
                            <div className='h-4 w-full bg-gray-200 rounded'></div>
                            <div className='h-4 w-5/6 bg-gray-200 rounded'></div>
                        </div>
                    </div>

                    {/* Perks & Benefits Loader */}
                    <div className="space-y-3">
                        <div>
                            <div className='h-8 w-48 bg-gray-300 rounded mb-2'></div>
                            <div className='h-4 w-64 bg-gray-200 rounded'></div>
                        </div>
                        <div className='space-y-2'>
                            <div className='h-4 w-48 bg-gray-200 rounded'></div>
                            <div className='h-4 w-52 bg-gray-200 rounded'></div>
                            <div className='h-4 w-44 bg-gray-200 rounded'></div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Loader */}
                <div className='w-[350px] flex flex-col gap-8'>
                    <div className="space-y-3">
                        <div className='h-8 w-40 bg-gray-300 rounded'></div>
                        <div className='bg-[#F8F8FD] h-[80px] flex flex-col justify-center px-4'>
                            <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                            <div className='h-3 w-32 bg-gray-200 rounded mt-2'></div>
                        </div>
                        <div className='space-y-3'>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className='flex items-center justify-between'>
                                    <div className='h-4 w-20 bg-gray-200 rounded'></div>
                                    <div className='h-4 w-24 bg-gray-200 rounded'></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className='h-8 w-32 bg-gray-300 rounded'></div>
                        <div className='h-8 w-24 bg-gray-200 rounded-full'></div>
                    </div>

                    <div className="space-y-3">
                        <div className='h-8 w-36 bg-gray-300 rounded'></div>
                        <div className='grid grid-cols-3 gap-2'>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className='h-8 bg-gray-200 rounded'></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JobDetails = () => {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    const { token } = useContext(UserContext)

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`/api/details/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await response.json();
                console.log('Fetched job details:', data);

                if (!response.ok) {
                    throw new Error(data.message || 'Failed to fetch job details');
                }

                setJob(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id && token) {
            fetchJobDetails();
        }
    }, [id, token]);

    // Show loader while loading
    if (loading) {
        return <JobDetailsLoader />;
    }

    // Show error message if there's an error
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    // Show message if no job found
    if (!job || !job.job) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-gray-500">Job not found</p>
            </div>
        );
    }

    const progress = (job?.job?.applicationsCount / job?.job?.capacity) * 100;


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };


    return (
        <div className='flex flex-col gap-8'>
            <div className='bg-[#D6DDEB] flex items-center px-8 justify-between w-full h-[200px]'>
                <div className='flex items-center gap-4'>
                    <Image
                        src={job?.job?.company?.companyLogo}
                        alt="Company Logo" width={80} height={80} className="object-contain rounded-md"
                        onError={(e) => { e.target.src = '/Avatar.svg' }}
                    />
                    <div>
                        <h2 className='text-[24px] font-bold text-[#25324B]'>
                            {job?.job?.jobTitle}
                        </h2>
                        <p className='text-sm text-gray-500'>
                            {job?.job?.company?.companyName} • {job?.job?.company?.location}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Share />
                    <button className='bg-[#4640DE] text-white font-semibold cursor-pointer w-[125px] h-[50px]'>
                        Apply
                    </button>
                </div>
            </div>
            <div className='flex justify-between gap-[20px]'>
                <div className='flex flex-col gap-8'>
                    <div className="space-y-2">
                        <h2 className='text-[#25324B] text-[24px] font-semibold'>
                            Description
                        </h2>
                        <p className="text-[#515B6F] text-[16px]">
                            {job?.job?.jobDescriptions}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className='text-[#25324B] text-[24px] font-semibold'>
                            Responsibilities
                        </h2>
                        <p className="text-[#515B6F] text-[16px]">
                            {job?.job?.responsibilities}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className='text-[#25324B] text-[24px] font-semibold'>
                            Who You Are
                        </h2>
                        <p className="text-[#515B6F] text-[16px]">
                            {job?.job?.whoYouAre}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className='text-[#25324B] text-[24px] font-semibold'>
                            Nice-To-Haves
                        </h2>
                        <p className="text-[#515B6F] text-[16px]">
                            {job?.job?.niceToHaves}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h2 className='text-[#25324B] text-[24px] font-semibold'>
                                Perks & Benefits
                            </h2>
                            <p className='text-[#515B6F] text-[12px]'>
                                This job comes with several perks and benefits
                            </p>
                        </div>
                        <ul className="text-[#515B6F] pl-3 list-decimal flex flex-col gap-2 text-[16px]">
                            {job?.job?.perksAndBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-[350px] flex flex-col gap-8'>
                    <div className="space-y-3">
                        <h2 className='text-[#25324B] text-[24px] font-semibold'>
                            About this role
                        </h2>
                        <div className='bg-[#F8F8FD] h-[80px] flex flex-col justify-center px-4'>
                            <div className="h-2 bg-gray-200 rounded-full">
                                <div
                                    style={{ width: `${progress}%` }}
                                    className="h-2 bg-[#56CDAD] rounded-full"
                                />
                            </div>

                            <p className="text-xs text-gray-500 mt-2">
                                {job?.job?.applicationsCount} applied of {job?.job?.capacity} capacity
                            </p>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-[14px] text-gray-500">
                                    Apply Before
                                </h2>
                                <p className='text-[16px] font-medium'>
                                    {formatDate(job.job?.deadline)}
                                </p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-[14px] text-gray-500">
                                    Job Posted on
                                </h2>
                                <p className='text-[16px] font-medium'>
                                    {formatDate(job.job?.createdAt)}
                                </p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-[14px] text-gray-500">
                                    Job Type
                                </h2>
                                <p className='text-[16px] font-medium'>
                                    {job?.job?.employmentType}
                                </p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-[14px] text-gray-500">
                                    Salary
                                </h2>
                                <p className='text-[16px] font-medium'>
                                    ${job?.job?.salary}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h2 className='text-[#25324B] text-[24px] font-semibold'>
                            Categories
                        </h2>
                        <p className="flex flex-wrap gap-2">
                            {job?.job?.company?.industry?.map((item, index) => {
                                const colors = [
                                    { border: '#FFB836', text: '#FFB836' },
                                    { border: '#3B82F6', text: '#3B82F6' },
                                    { border: '#10B981', text: '#10B981' },
                                    { border: '#EF4444', text: '#EF4444' },
                                    { border: '#8B5CF6', text: '#8B5CF6' },
                                    { border: '#EC4899', text: '#EC4899' }
                                ];
                                const color = colors[index % colors.length];

                                return (
                                    <span
                                        key={index}
                                        className="border w-fit text-xs px-3 py-1 rounded-full"
                                        style={{
                                            borderColor: color.border,
                                            color: color.text
                                        }}
                                    >
                                        {item}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h2 className='text-[#25324B] text-[24px] font-semibold'>
                            Required skills
                        </h2>
                        <div className="text-[#515B6F] grid grid-cols-3 gap-2 text-[16px]">
                            {job?.job?.skills.map((skill, index) => (
                                <p key={index} className='bg-[#F8F8FD] px-2 w-fit py-1.5'>
                                    <span className='text-[#4640DE] text-[16px]'>
                                        {skill}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails;