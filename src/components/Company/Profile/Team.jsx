"use client"
import { UserContext } from '@/components/Context/UserContext';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

const Team = () => {
    const [teams, setTeams] = useState([])
    const { token } = useContext(UserContext);


    useEffect(() => {
        const fetchJobs = async () => {
            if (!token) return;

            // setIsLoadingData(true);

            try {
                const response = await fetch("/api/team/allteam", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Server responded with ${response.status}`);
                }

                const data = await response.json();
                console.log(data)

                if (data.teams) {
                    setTeams(data.teams);
                } else if (Array.isArray(data)) {
                    setTeams(data);
                } else if (data.data) {
                    setTeams(data.data);
                } else {
                    console.warn("Unexpected API format:", data);
                    setJobs([]);
                }

            } catch (err) {
                console.error("Fetch jobs failed:", err);
                toast.error(err.message || "Failed to load jobs");
                setTeams([]);
            }
        };

        if (token) {
            fetchJobs();
        }
    }, [token]);

    return (
        <div>
            <div></div>
            <div className='grid grid-cols-3 gap-6'>
                {teams.map((item, index) => (
                    <div key={index} className='border flex flex-col gap-1.5 items-center justify-center border-[#D6DDEB] h-[240px]'>
                        <Image height={80} width={80} src={item.teamImage} alt='images' className='rounded-full' />
                        <h2 className='text-[#25324B] text-[18px] font-semibold'>
                            {item.name}
                        </h2>
                        <span className='text-[#7C8493] text-[16px] font-normal'>
                            {item.role}
                        </span>
                        <div className='flex gap-2.5'>
                            {item.instagramUrl && (
                                <Link
                                    href={item.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram className='text-[#515B6F] h-[16px] w-[16px]'/>
                                </Link>
                            )}
                            {item.twitterUrl && (
                                <Link
                                    href={item.twitterUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter className='text-[#515B6F] h-[16px] w-[16px]'/>
                                </Link>
                            )}
                            {item.linkedInUrl && (
                                <Link
                                    href={item.linkedInUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className='text-[#515B6F] h-[16px] w-[16px]'/>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team