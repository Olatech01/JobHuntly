"use client"

import { ListFilter, Search, Star, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const APPLICANTS = [
    { fullName: "Jake Gyll", score: 0.0, role: "Designer", appliedDate: "13 July, 2021", stage: "inreview" },
    { fullName: "Guy Hawkins", score: 0.0, role: "JavaScript Dev", appliedDate: "13 July, 2021", stage: "inreview" },
    { fullName: "Cyndy Lillibridge", score: 4.5, role: "Golang Dev", appliedDate: "12 July, 2021", stage: "shortlisted" },
    { fullName: "Rodolfo Goode", score: 3.75, role: ".NET Dev", appliedDate: "11 July, 2021", stage: "declined" },
    { fullName: "Leif Floyd", score: 4.8, role: "Graphic Design", appliedDate: "11 July, 2021", stage: "hired" },
    { fullName: "Jake Gyll", score: 0.0, role: "Designer", appliedDate: "13 July, 2021", stage: "inreview" },
    { fullName: "Guy Hawkins", score: 0.0, role: "JavaScript Dev", appliedDate: "13 July, 2021", stage: "inreview" },
    { fullName: "Cyndy Lillibridge", score: 4.5, role: "Golang Dev", appliedDate: "12 July, 2021", stage: "shortlisted" },
    { fullName: "Rodolfo Goode", score: 3.75, role: ".NET Dev", appliedDate: "11 July, 2021", stage: "declined" },
    { fullName: "Leif Floyd", score: 4.8, role: "Graphic Design", appliedDate: "11 July, 2021", stage: "hired" },
]

const STAGE_STYLES = {
    inreview: "border border-amber-400 text-amber-500",
    shortlisted: "border border-purple-400 text-purple-500",
    declined: "border border-red-400 text-red-500",
    hired: "border border-green-400 text-green-500",
}

function getInitials(name) {
    return name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
}

function Avatar({ name }) {
    return (
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
            {getInitials(name)}
        </div>
    )
}

export default function Applicants() {
    const [search, setSearch] = useState("")

    const filtered = APPLICANTS.filter((a) => {
        const q = search.toLowerCase()
        return a.fullName.toLowerCase().includes(q) || a.role.toLowerCase().includes(q)
    })

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-[24px] font-semibold text-[#25324B]">
                    Total Applicants: {filtered.length}
                </h2>

                <div className="flex gap-3">

                    {/* Search */}
                    <div className="flex items-center gap-2 border border-[#D6DDEB] rounded-lg px-3 py-2">
                        <Search size={16} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="outline-none text-sm"
                        />
                    </div>

                    {/* Filter */}
                    <div className="flex items-center gap-2 border border-[#D6DDEB] rounded-lg px-3 py-2 cursor-pointer">
                        <ListFilter size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600">Filter</span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-[#D6DDEB] rounded-xl bg-white">
                <table className="w-full">

                    <thead>
                        <tr className="border-b border-[#D6DDEB] text-sm text-gray-400">
                            <th className="p-4">
                                <input type="checkbox" />
                            </th>
                            <th className="p-4 text-left">Full Name</th>
                            <th className="p-4 text-left">Score</th>
                            <th className="p-4 text-left">Hiring Stage</th>
                            <th className="p-4 text-left">Applied Date</th>
                            <th className="p-4 text-left">Job Role</th>
                            <th className="p-4 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filtered.map((user, i) => (
                            <tr key={i} className="border-b border-[#D6DDEB] hover:bg-gray-50">

                                {/* Checkbox */}
                                <td className="p-4">
                                    <input type="checkbox" />
                                </td>

                                {/* Name */}
                                <td className="p-4">
                                    <Link href={"/company/applicants/details"} className="flex items-center gap-3">
                                        <Avatar name={user.fullName} />
                                        <span className="text-sm font-medium text-[#25324B]">
                                            {user.fullName}
                                        </span>
                                    </Link>
                                </td>

                                {/* Score */}
                                <td className="p-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                        <Star size={14} className="text-amber-400 fill-amber-400" />
                                        {user.score.toFixed(1)}
                                    </div>
                                </td>

                                {/* Stage */}
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${STAGE_STYLES[user.stage]}`}>
                                        {user.stage}
                                    </span>
                                </td>

                                {/* Date */}
                                <td className="p-4 text-sm text-gray-600">
                                    {user.appliedDate}
                                </td>

                                {/* Role */}
                                <td className="p-4 text-sm text-gray-600">
                                    {user.role}
                                </td>

                                {/* Action */}
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <button className="px-4 py-1.5 text-xs border border-indigo-500 text-indigo-600 rounded-md hover:bg-indigo-50 transition">
                                            See Application
                                        </button>

                                        <MoreHorizontal size={18} className="text-gray-400 cursor-pointer" />
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}