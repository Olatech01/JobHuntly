"use client"
import { Grid2x2, List } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const CompanyList = () => {
    const [change, setChange] = useState("grid")
    const [page, setPage] = useState(1);
    const perPage = 6;



    const companies = [
        {
            name: "Stripe",
            description: "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...",
            logo: "/stripe.svg",
            application: "7",
            companyType: [
                "Business",
                "Payment Gateway",
            ]
        },
        {
            name: "Truebill",
            description: "Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...",
            logo: "/truebill.svg",
            application: "7",
            companyType: [
                "Business",
            ]
        },
        {
            name: "Square",
            description: "Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.",
            logo: "/square.svg",
            application: "7",
            companyType: [
                "Business",
                "Blockchain"
            ]
        },
        {
            name: "Coinbase",
            description: "Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.",
            logo: "/coin.svg",
            application: "7",
            companyType: [
                "Business",
                "Blockchain"
            ]
        },
        {
            name: "Robinhood",
            description: "Robinhood is lowering barriers, removing fees, and providing greater access to financial information.",
            logo: "/robin.svg",
            application: "7",
            companyType: [
                "Business",
            ]
        },
        {
            name: "Krakrn",
            description: "Based in San Francisco, Kraken is the world’s largest global bitcoin exchange in euro volume and liquidity.",
            logo: "/kraken.svg",
            application: "7",
            companyType: [
                "Business",
                "Blockchain"
            ]
        },

    ]

    const start = (page - 1) * perPage;
    const paginatedCompanies = companies.slice(start, start + perPage);

    const totalPages = Math.ceil(companies.length / perPage);

    const typeStyles = {
        Business: "border-blue-500 text-blue-500 bg-blue-50",
        "Payment Gateway": "border-green-500 text-green-500 bg-green-50",
        Blockchain: "border-purple-500 text-purple-500 bg-purple-50",
    };


    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-[#25324B]">
                        All Companies
                    </h2>
                    <p className="text-sm text-gray-500">
                        Showing {companies.length} results
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                        Sort by: <span className="font-medium text-[#25324B]">Most relevant</span>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {paginatedCompanies.map((items, index) => (
                    <div key={index} className='flex flex-row justify-between border border-[#D6DDEB] py-6 px-4 gap-2.5'>
                        <div className='flex flex-col gap-2.5'>
                            <Image height={80} width={80} src={items.logo} alt={items.name} />
                            <h2 className='text-[#25324B] text-[24px] font-semibold'>
                                {items.name}
                            </h2>
                            <p className='text-[#515B6F] text-[16px] font-normal'>
                                {items.description}
                            </p>
                            <div className='flex gap-3'>
                                {items?.companyType?.map((item, index) => (
                                    <span
                                        key={index}
                                        className={`border px-3 py-1 text-sm rounded-full ${typeStyles[item] || "border-gray-300 text-gray-500"}`}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <span className='bg-[#F8F8FD] text-[#4640DE] w-fit px-4 h-fit py-1.5 text-[14px] font-normal rounded-[5px]'>
                            {items.application}jobs
                        </span>
                    </div>
                ))}
            </div>

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
    )
}

export default CompanyList