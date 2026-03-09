import Image from "next/image";
import React from "react";
import DoughnutChart from "./DoughnutChart ";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Stats = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {/* LEFT CARD */}
            <div className=" rounded-xl grid grid-rows-2 gap-2">
                <div className="flex justify-between rounded-xl px-6 shadow-sm border border-[#D6DDEB] items-center">
                    <div className="pt-3">
                        <p className="text-[#202430] text-[20px] font-semibold">Total Jobs Applied</p>
                        <h2 className="text-[#202430] text-[72px] font-semibold mt-2">45</h2>
                    </div>
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                        📄
                    </div>
                </div>
                <div className="flex justify-between rounded-xl shadow-sm px-6 border border-[#D6DDEB] items-center">
                    <div className="pt-3">
                        <p className="text-[#202430] text-[20px] font-semibold">Interviewed</p>
                        <h2 className="text-[#202430] text-[72px] font-semibold mt-2">18</h2>
                    </div>
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                        💬
                    </div>
                </div>

            </div>

            {/* MIDDLE CARD */}
            <div className=" shadow-sm rounded-xl p-6 border border-[#D6DDEB]">
                <p className="text-gray-700 font-semibold mb-6">
                    Jobs Applied Status
                </p>
                <div className="flex items-center justify-between">
                    <DoughnutChart />
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded bg-indigo-600"></div>
                            <div>
                                <p className="font-semibold">60%</p>
                                <p className="text-sm text-gray-500">Unsuitable</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded bg-gray-300"></div>
                            <div>
                                <p className="font-semibold">40%</p>
                                <p className="text-sm text-gray-500">Interviewed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="mt-6 text-indigo-600 font-medium flex items-center gap-2">
                    View All Applications →
                </button>

            </div>

            {/* RIGHT CARD */}
            <div className="shadow-sm rounded-xl flex flex-col gap-2 p-6 border border-[#D6DDEB]">
                <p className="font-semibold text-[#202430]">
                    Upcoming Interviews
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-[#202430]">
                        <span className="font-semibold">Today,</span> 26 November

                    </p>
                    <div className="flex items-center justify-end gap-2 text-gray-400">
                        <ChevronLeft />
                        <ChevronRight />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="text-sm text-gray-400">10:00 AM</div>
                    <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                        <Image
                            src="/hr.svg"
                            width={40}
                            height={40}
                            alt="avatar"
                            className="rounded-full"
                        />
                        <div>
                            <p className="font-semibold text-gray-800">
                                Joe Bartmann
                            </p>
                            <p className="text-sm text-gray-500">
                                HR Manager at Divvy
                            </p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400">11:00 AM</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;