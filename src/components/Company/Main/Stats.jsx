"use client"

import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts"

const data = [
    { day: "Mon", view: 80, applied: 40 },
    { day: "Tue", view: 60, applied: 55 },
    { day: "Wed", view: 90, applied: 20 },
    { day: "Thu", view: 70, applied: 75 },
    { day: "Fri", view: 95, applied: 35 },
    { day: "Sat", view: 30, applied: 15 },
    { day: "Sun", view: 45, applied: 60 }
]

export default function JobStatistics() {
    return (
        <div className="grid grid-cols-3 gap-6">

            {/* LEFT SECTION */}
            <div className="col-span-2 bg-white p-6 rounded-xl shadow">

                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="font-semibold text-lg">Job statistics</h2>
                        <p className="text-sm text-gray-400">
                            Showing Job statistic Jul 19-25
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <button className="px-4 py-1 bg-purple-100 text-purple-600 rounded">
                            Week
                        </button>
                        <button className="px-4 py-1 bg-gray-100 rounded">
                            Month
                        </button>
                        <button className="px-4 py-1 bg-gray-100 rounded">
                            Year
                        </button>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="w-full">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="day" />

                                <Tooltip />

                                <Bar dataKey="applied" stackId="a" fill="#7C3AED" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="view" stackId="a" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>

                        <div className="flex gap-6 mt-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-yellow-500 rounded"></span>
                                Job View
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-purple-600 rounded"></span>
                                Job Applied
                            </div>
                        </div>
                    </div>
                    <div className="w-[228px] space-y-3">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <p className="text-gray-500 text-sm">Job Views</p>
                            <h1 className="text-3xl font-bold">2,342</h1>
                            <p className="text-green-500 text-sm">
                                This Week 6.4%
                            </p>
                        </div>

                        {/* JOB APPLIED */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <p className="text-gray-500 text-sm">Job Applied</p>
                            <h1 className="text-3xl font-bold">654</h1>
                            <p className="text-red-400 text-sm">
                                This Week 0.5%
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6 w-[352px]">

                {/* JOB OPEN */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Job Open</p>
                    <h1 className="text-4xl font-bold mt-2">12</h1>
                    <p className="text-gray-400">Jobs Opened</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Applicants Summary</p>

                    <h1 className="text-4xl font-bold">67</h1>
                    <p className="text-gray-400 mb-4">Applicants</p>

                    <div className="flex w-full h-3 rounded overflow-hidden">
                        <div className="bg-purple-500 w-2/5"></div>
                        <div className="bg-green-400 w-1/5"></div>
                        <div className="bg-blue-400 w-1/6"></div>
                        <div className="bg-yellow-400 w-1/6"></div>
                        <div className="bg-red-400 w-1/6"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                        <p>🟣 Full Time : 45</p>
                        <p>🟡 Internship : 32</p>
                        <p>🟢 Part-Time : 24</p>
                        <p>🔴 Contract : 30</p>
                        <p>🔵 Remote : 22</p>
                    </div>
                </div>

            </div>
        </div>
    )
}