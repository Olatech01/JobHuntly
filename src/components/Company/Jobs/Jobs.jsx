"use client"
import { UserContext } from '@/components/Context/UserContext';
import { Calendar1 } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Jobs = () => {

    const [page, setPage] = useState(1);
    const [jobs, setJobs] = useState([])
    const { token } = useContext(UserContext);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const perPage = 6;

    useEffect(() => {
        const fetchJobs = async () => {
            if (!token) return;

            setIsLoadingData(true);

            try {
                const response = await fetch("/api/companiesJobs", {
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
                if (data.job && Array.isArray(data.job)) {
                    setJobs(data.job);
                } else if (data.jobs) {
                    setJobs(data.jobs);
                } else if (Array.isArray(data)) {
                    setJobs(data);
                } else if (data.data) {
                    setJobs(data.data);
                } else {
                    console.warn("Unexpected API format:", data);
                    setJobs([]);
                }

            } catch (err) {
                console.error("Fetch companies failed:", err);
                toast.error(err.message || "Failed to load companies");
                setJobs([]);
            } finally {
                setIsLoadingData(false);
            }
        };

        if (token) {
            fetchJobs();
        }
    }, [token]);

    const start = (page - 1) * perPage;
    const paginatedJobs = jobs.slice(start, start + perPage);

    const totalPages = Math.ceil(jobs.length / perPage);

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Fixed STATUS_STYLES with proper case matching
    const STATUS_STYLES = {
        "Open": "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium",
        "Closed": "bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-medium",
        "Draft": "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium",
        "Published": "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium",
    };

    // Fixed JOB_TYPE_STYLES with proper classes
    const JOB_TYPE_STYLES = {
        "Full-time": "border border-indigo-500 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium bg-white",
        "Part-time": "border border-yellow-500 text-yellow-600 px-3 py-1 rounded-full text-xs font-medium bg-white",
        "Remote": "border border-green-500 text-green-600 px-3 py-1 rounded-full text-xs font-medium bg-white",
        "Contract": "border border-purple-500 text-purple-600 px-3 py-1 rounded-full text-xs font-medium bg-white",
        "Internship": "border border-orange-500 text-orange-600 px-3 py-1 rounded-full text-xs font-medium bg-white",
    };

    // Helper function to get status style
    const getStatusStyle = (status) => {
        if (!status) return "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium";
        const statusKey = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
        return STATUS_STYLES[statusKey] || "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium";
    };

    // Helper function to get job type style
    const getJobTypeStyle = (type) => {
        if (!type) return "border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs font-medium bg-white";
        return JOB_TYPE_STYLES[type] || "border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs font-medium bg-white";
    };

    if (isLoadingData) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4640DE]"></div>
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-[#25324B] text-[24px] font-semibold'>Job Listing</h1>
                    <p className='text-[16px] font-medium text-[#7C8493]'>
                        Here is your jobs listing status from July 19 - July 25.
                    </p>
                </div>
                <div className='flex items-center text-[16px] font-medium text-[#7C8493] gap-1.5 border border-[#D6DDEB] justify-between px-3.5 w-[180px] h-[50px]'>
                    Jul 19 - Jul 25
                    <Calendar1 color='#4640DE' />
                </div>
            </div>
            <div className="overflow-x-auto border border-[#D6DDEB] rounded-xl bg-white">
                <table className="w-full min-w-[800px]">
                    <thead className="border-b border-[#D6DDEB] bg-gray-50">
                        <tr className="text-sm text-gray-500">
                            <th className="p-4 text-left font-semibold">Roles</th>
                            <th className="p-4 text-left font-semibold">Status</th>
                            <th className="p-4 text-left font-semibold">Date Posted</th>
                            <th className="p-4 text-left font-semibold">Due Date</th>
                            <th className="p-4 text-left font-semibold">Job Type</th>
                            <th className="p-4 text-left font-semibold">Applicants</th>
                            <th className="p-4 text-left font-semibold">Needs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedJobs.length > 0 ? (
                            paginatedJobs.map((item, index) => {
                                const progress = item.capacity && item.applicationsCount
                                    ? (item.applicationsCount / item.capacity) * 100
                                    : 0;

                                return (
                                    <tr key={index} className="border-b border-[#F1F1F1] hover:bg-gray-50 transition-colors">
                                        {/* Role */}
                                        <td className="py-4 px-4 text-[16px] font-medium text-[#25324B]">
                                            {item.jobTitle || 'N/A'}
                                        </td>

                                        {/* Status */}
                                        <td className="py-4 px-4">
                                            <span className={getStatusStyle(item.status)}>
                                                {item.status || 'N/A'}
                                            </span>
                                        </td>

                                        {/* Date Posted */}
                                        <td className="py-4 px-4 text-[14px] text-[#25324B]">
                                            {formatDate(item.createdAt)}
                                        </td>

                                        {/* Due Date */}
                                        <td className="py-4 px-4 text-[14px] text-[#25324B]">
                                            {formatDate(item.deadline)}
                                        </td>

                                        {/* Job Type */}
                                        <td className="py-4 px-4">
                                            <span className={getJobTypeStyle(item.employmentType)}>
                                                {item.employmentType || 'N/A'}
                                            </span>
                                        </td>

                                        {/* Applicants */}
                                        <td className="py-4 px-4 text-[14px] text-[#25324B]">
                                            {item.applicationsCount || 0}
                                        </td>

                                        {/* Needs (Progress Bar) */}
                                        <td className="py-4 px-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex justify-between text-xs text-gray-500">
                                                    <span>{item.applicationsCount || 0}/{item.capacity || 0}</span>
                                                    <span>{Math.round(progress)}%</span>
                                                </div>
                                                {item.capacity && (
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div
                                                            className="bg-[#4640DE] h-2 rounded-full transition-all duration-300"
                                                            style={{ width: `${Math.min(progress, 100)}%` }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-8 text-gray-500">
                                    No jobs found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default Jobs