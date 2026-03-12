"use client"
import { UserContext } from '@/components/Context/UserContext'
import { Grid2x2, List } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const CompanyList = () => {
    const [change, setChange] = useState("grid")
    const [page, setPage] = useState(1);
    const [companys, setCompanys] = useState([])
    const { token } = useContext(UserContext);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const perPage = 6;

    useEffect(() => {
        const fetchCompanys = async () => {
            if (!token) return;

            setIsLoadingData(true);

            try {
                const response = await fetch("/api/allCompanies", {
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
                console.log("Companies: ", data);

                // Check if data has company array (from your response structure)
                if (data.company && Array.isArray(data.company)) {
                    setCompanys(data.company);
                } else if (data.companys) {
                    setCompanys(data.companys);
                } else if (Array.isArray(data)) {
                    setCompanys(data);
                } else if (data.data) {
                    setCompanys(data.data);
                } else {
                    console.warn("Unexpected API format:", data);
                    setCompanys([]);
                }

            } catch (err) {
                console.error("Fetch companies failed:", err);
                toast.error(err.message || "Failed to load companies");
                setCompanys([]);
            } finally {
                setIsLoadingData(false);
            }
        };

        if (token) {
            fetchCompanys();
        }
    }, [token]);

    const start = (page - 1) * perPage;
    const paginatedCompanies = companys.slice(start, start + perPage);

    const totalPages = Math.ceil(companys.length / perPage);

    // Since industry might be a string or array, handle both cases
    const getIndustryStyles = (industry) => {
        // Define colors for different industries
        const industryColorMap = {
            'Technology': 'border-blue-500 text-blue-500 bg-blue-50',
            'Healthcare': 'border-green-500 text-green-500 bg-green-50',
            'Finance': 'border-purple-500 text-purple-500 bg-purple-50',
            'Education': 'border-yellow-500 text-yellow-500 bg-yellow-50',
            'Retail': 'border-pink-500 text-pink-500 bg-pink-50',
            'Manufacturing': 'border-gray-500 text-gray-500 bg-gray-50',
        };

        // If industry is a string, return its color or default
        if (typeof industry === 'string') {
            return industryColorMap[industry] || "border-gray-300 text-gray-500 bg-gray-50";
        }

        // If it's an array, we'll handle mapping in the render
        return "border-gray-300 text-gray-500 bg-gray-50";
    };

    // If loading, show loading state
    if (isLoadingData) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4640DE]"></div>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-[#25324B]">
                        All Companies
                    </h2>
                    <p className="text-sm text-gray-500">
                        Showing {companys.length} results
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                        Sort by: <span className="font-medium text-[#25324B]">Most relevant</span>
                    </div>
                </div>
            </div>

            {paginatedCompanies.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                    No companies found
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {paginatedCompanies.map((company, index) => (
                        <div key={company._id || index} className='flex flex-row justify-between border border-[#D6DDEB] py-6 px-4 gap-2.5 hover:shadow-lg transition-shadow'>
                            <div className='flex flex-col gap-2.5'>
                                <div className="w-20 h-20 relative">
                                    <Image
                                        height={80}
                                        width={80}
                                        src={company.companyLogo || '/Avatar.svg'}
                                        alt={company.companyName}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <h2 className='text-[#25324B] text-[24px] font-semibold'>
                                    {company.companyName}
                                </h2>
                                <p className='text-[#515B6F] text-[16px] font-normal line-clamp-2'>
                                    {company.description || "No description available"}
                                </p>
                                <p className="flex flex-wrap gap-2">
                                    {company?.industry?.map((item, index) => {
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
                            <span className='bg-[#F8F8FD] text-[#4640DE] w-fit px-4 h-fit py-1.5 text-[14px] font-normal rounded-[5px] whitespace-nowrap'>
                                {company.jobsCount || 0} jobs
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <div className="flex justify-center mt-10 gap-2">
                    <button
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="w-8 h-8 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ‹
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`w-8 h-8 rounded ${page === i + 1
                                ? "bg-[#4640DE] text-white"
                                : "border hover:bg-gray-100"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className="w-8 h-8 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    )
}

export default CompanyList