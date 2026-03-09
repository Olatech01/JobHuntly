"use client"
import { Grid2x2, List } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const jobs = [
    {
        company: "Nomad",
        logo: "/nomad.svg",
        title: "Social Media Assistant",
        location: "Paris, France",
        tags: ["Full-Time", "Marketing", "Design"],
        applied: 5,
        capacity: 10
    },
    {
        company: "Dropbox",
        logo: "/divvy.svg",
        title: "Brand Designer",
        location: "San Francisco, USA",
        tags: ["Full-Time", "Marketing", "Design"],
        applied: 2,
        capacity: 10
    },
    {
        company: "Terraform",
        logo: "/packer.svg",
        title: "Interactive Developer",
        location: "Hamburg, Germany",
        tags: ["Full-Time", "Marketing", "Design"],
        applied: 8,
        capacity: 12
    },
    {
        company: "Nomad",
        logo: "/nomad.svg",
        title: "Social Media Assistant",
        location: "Paris, France",
        tags: ["Full-Time", "Marketing", "Design"],
        applied: 5,
        capacity: 10
    },
    {
        company: "Dropbox",
        logo: "/divvy.svg",
        title: "Brand Designer",
        location: "San Francisco, USA",
        tags: ["Full-Time", "Marketing", "Design"],
        applied: 2,
        capacity: 10
    },
    {
        company: "Terraform",
        logo: "/packer.svg",
        title: "Interactive Developer",
        location: "Hamburg, Germany",
        tags: ["Full-Time", "Marketing", "Design"],
        applied: 8,
        capacity: 12
    }
];



export default function JobList() {

    const [page, setPage] = useState(1);
    const [change, setChange] = useState("grid")

    const employment = [
        { name: "Full-time", count: 3 },
        { name: "Part-Time", count: 5 },
        { name: "Remote", count: 2 },
        { name: "Internship", count: 24 },
        { name: "Contract", count: 3 },
    ];

    const perPage = 5;

    const start = (page - 1) * perPage;
    const paginatedJobs = jobs.slice(start, start + perPage);

    const totalPages = Math.ceil(jobs.length / perPage);

    return (
        <div className="flex gap-8 w-full">
            <div className="w-[200px] border-r border-[#D6DDEB] pr-6 space-y-8">
                <div>
                    <h3 className="font-semibold text-[#25324B] mb-4">
                        Type of Employment
                    </h3>
                    {employment.map((item, i) => (
                        <label key={i} className="flex items-center gap-3 mb-3 cursor-pointer">
                            <input type="checkbox" />
                            <span className="text-[#515B6F]">
                                {item.name} ({item.count})
                            </span>
                        </label>
                    ))}
                </div>
                <div>
                    <h3 className="font-semibold text-[#25324B] mb-4">
                        Categories
                    </h3>

                    <label className="flex items-center gap-3 mb-3">
                        <input type="checkbox" />
                        Design (24)
                    </label>

                    <label className="flex items-center gap-3 mb-3">
                        <input type="checkbox" />
                        Marketing (3)
                    </label>

                    <label className="flex items-center gap-3 mb-3">
                        <input type="checkbox" defaultChecked />
                        Business (3)
                    </label>
                </div>

            </div>
            <div className="flex-1">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-[#25324B]">
                            All Jobs
                        </h2>
                        <p className="text-sm text-gray-500">
                            Showing {jobs.length} results
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-500">
                            Sort by: <span className="font-medium text-[#25324B]">Most relevant</span>
                        </div>
                        <div className="flex border rounded-lg overflow-hidden">

                            <button
                                onClick={() => setChange("grid")}
                                className={`p-2 ${change === "grid" ? "bg-[#4640DE] text-white" : ""}`}
                            >
                                <Grid2x2 size={18} />
                            </button>

                            <button
                                onClick={() => setChange("list")}
                                className={`p-2 ${change === "list" ? "bg-[#4640DE] text-white" : ""}`}
                            >
                                <List size={18} />
                            </button>

                        </div>
                    </div>
                </div>

                {/* Job Cards */}
                {
                    change === "grid" ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginatedJobs.map((job, i) => {

                                const progress = (job.applied / job.capacity) * 100;

                                return (
                                    <div
                                        key={i}
                                        className="border border-[#D6DDEB] rounded-xl p-6 space-y-4"
                                    >
                                        {/* Logo + badge */}
                                        <div className="flex justify-between items-center">
                                            <Image src={job.logo} width={40} height={40} alt="logo" />

                                            <span className="bg-[#E7F6EC] text-[#56CDAD] text-xs px-3 py-1 rounded-full">
                                                Full-Time
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#25324B]">
                                                {job.title}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {job.company} • {job.location}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex gap-2 flex-wrap">

                                            <span className="border text-[#FFB836] border-[#FFB836] text-xs px-3 py-1 rounded-full">
                                                Marketing
                                            </span>

                                            <span className="border text-[#4640DE] border-[#4640DE] text-xs px-3 py-1 rounded-full">
                                                Design
                                            </span>

                                        </div>

                                        {/* Progress */}
                                        <div>
                                            <div className="h-2 bg-gray-200 rounded-full">
                                                <div
                                                    style={{ width: `${progress}%` }}
                                                    className="h-2 bg-[#56CDAD] rounded-full"
                                                />
                                            </div>

                                            <p className="text-xs text-gray-500 mt-2">
                                                {job.applied} applied of {job.capacity} capacity
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="space-y-6">

                            {paginatedJobs.map((job, i) => (

                                <div key={i} className="flex items-center justify-between border border-[#D6DDEB] rounded-xl p-5">

                                    {/* Left */}
                                    <div className="flex gap-4">

                                        <Image
                                            src={job.logo}
                                            width={50}
                                            height={50}
                                            alt="logo"
                                        />

                                        <div>

                                            <h3 className="font-semibold text-[#25324B]">
                                                {job.title}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {job.company} • {job.location}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex gap-2 mt-2">

                                                <span className="bg-[#E7F6EC] text-[#56CDAD] text-xs px-2 py-1 rounded">
                                                    Full-Time
                                                </span>

                                                <span className="border text-[#FFB836] border-[#FFB836] text-xs px-2 py-1 rounded">
                                                    Marketing
                                                </span>

                                                <span className="border text-[#4640DE] border-[#4640DE] text-xs px-2 py-1 rounded">
                                                    Design
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Right */}
                                    <div className="text-right">

                                        <button className="bg-[#4640DE] text-white px-6 py-2 rounded-lg mb-2">
                                            Apply
                                        </button>

                                        <p className="text-xs text-gray-500">
                                            {job.applied} applied of {job.capacity} capacity
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>
                    )
                }

                {/* Pagination */}

                <div className="flex justify-center mt-10 gap-2">

                    {Array.from({ length: totalPages }).map((_, i) => (

                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`w-8 h-8 rounded ${page === i + 1
                                ? "bg-[#4640DE] text-white"
                                : "border"
                                }`}
                        >
                            {i + 1}
                        </button>

                    ))}

                </div>

            </div>
        </div>
    );
}