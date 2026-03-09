"use client"
import { ListFilter, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ApplicationTable = () => {

    const table = [
        {
            companyLogo: "/nomad.svg",
            companyName: "Nomad",
            role: "Social Media Assistant",
            dateApplied: "24 July 2021",
            status: "In Review",
        },
        {
            companyLogo: "/udacity.svg",
            companyName: "Udacity",
            role: "Frontend Developer",
            dateApplied: "24 July 2021",
            status: "Shortlisted",
        },
        {
            companyLogo: "/packer.svg",
            companyName: "Packer",
            role: "Product Designer",
            dateApplied: "24 July 2021",
            status: "Offered",
        },
        {
            companyLogo: "/divvy.svg",
            companyName: "Divvy",
            role: "UI Designer",
            dateApplied: "24 July 2021",
            status: "Interviewing",
        },
        {
            companyLogo: "/ocean.svg",
            companyName: "DigitalOcean",
            role: "Backend Developer",
            dateApplied: "24 July 2021",
            status: "Unsuitable",
        },
    ];

    /* ---------------- Pagination ---------------- */

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(table.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = table.slice(startIndex, startIndex + itemsPerPage);

    /* ---------------- Status Colors ---------------- */

    const statusStyle = {
        "In Review": "text-[#FFB836] border-[#FFB836]",
        Shortlisted: "text-[#56CDAD] border-[#56CDAD]",
        Offered: "text-[#4640DE] border-[#4640DE]",
        Interviewing: "text-[#FFB836] border-[#FFB836]",
        Unsuitable: "text-[#FF6550] border-[#FF6550]",
    };

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex items-center justify-between">
                <h2 className="text-[#25324B] text-[20px] font-semibold">
                    Recent Applications History
                </h2>

                <div className="flex gap-3">
                    <div className="flex items-center gap-2 border border-[#D6DDEB] rounded-lg px-3 py-2">
                        <Search color="#D6DDEB" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none text-[16px] font-medium text-[#7C8493]"
                        />
                    </div>

                    <div className="flex items-center gap-2 border border-[#D6DDEB] rounded-lg px-3 py-2">
                        <ListFilter color="#D6DDEB" />
                        <input
                            type="text"
                            placeholder="Filter"
                            className="outline-none text-[16px] font-medium text-[#7C8493]"
                        />
                    </div>
                </div>
            </div>

            {/* TABLE */}
            <div className="lg:overflow-hidden overflow-scroll">
                <div className="container lg:w-full w-[180%]">

                    <table className="table-auto w-full">

                        <thead className="border-b border-[#D6DDEB]">
                            <tr>
                                <th className="py-[20px] text-start text-[#202430] opacity-50">
                                    Company Name
                                </th>

                                <th className="text-start text-[#202430] opacity-50">
                                    Role
                                </th>

                                <th className="text-start text-[#202430] opacity-50">
                                    Date Applied
                                </th>

                                <th className="text-start text-[#202430] opacity-50">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentData.map((item, index) => (

                                <tr key={index} className="border-b border-[#F1F1F1]">

                                    <td className="flex items-center gap-3 py-4">

                                        <Image
                                            src={item.companyLogo}
                                            height={40}
                                            width={40}
                                            alt="logo"
                                        />

                                        <p className="text-[16px] font-medium text-[#25324B]">
                                            {item.companyName}
                                        </p>

                                    </td>

                                    <td className="text-[16px] font-medium text-[#25324B]">
                                        {item.role}
                                    </td>

                                    <td className="text-[16px] font-medium text-[#25324B]">
                                        {item.dateApplied}
                                    </td>

                                    <td>

                                        <span
                                            className={`border px-3 py-1 rounded-md text-sm font-medium ${statusStyle[item.status]}`}
                                        >
                                            {item.status}
                                        </span>

                                    </td>

                                </tr>

                            ))}
                        </tbody>

                    </table>

                </div>
            </div>

            {/* PAGINATION */}

            <div className="flex justify-end items-center gap-2">

                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    className="px-3 py-1 border border-[#F1F1F1] rounded"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (

                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === index + 1
                                ? "bg-[#4640DE] text-white"
                                : ""
                            }`}
                    >
                        {index + 1}
                    </button>

                ))}

                <button
                    onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    className="px-3 py-1 border border-[#F1F1F1] rounded"
                >
                    Next
                </button>

            </div>

        </div>
    );
};

export default ApplicationTable;