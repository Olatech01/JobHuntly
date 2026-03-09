import { Ellipsis } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentApplications = () => {

    const applications = [
        {
            company: "Nomad",
            position: "Social Media Assistant",
            date: "24 July 2021",
            location: "Paris, France",
            status: "In Review",
            jobType: "Full-time",
            companyLogo: "/nomad.svg"
        },
        {
            company: "Udacity",
            position: "Social Media Assistant",
            date: "24 July 2021",
            location: "Paris, France",
            status: "Shortlisted",
            jobType: "Full-time",
            companyLogo: "/udacity.svg"
        },
        {
            company: "Packer",
            position: "Social Media Assistant",
            date: "24 July 2021",
            location: "Paris, France",
            status: "Rejected",
            jobType: "Full-time",
            companyLogo: "/packer.svg"
        },
    ]
    return (
        <div className='space-y-6'>
            <h2 className='text-[#25324B] text-[20px] font-semibold'>
                Recent Applications History
            </h2>

            <div className="lg:overflow-hidden overflow-scroll">
                <div className="container lg:w-full w-[180%]">
                    <table className="table-auto text-[var(--text-color)] w-full">
                        <thead className="border border-[#D6DDEB] rounded-[10px] w-full">
                            <tr>
                                <th className="py-[25px] lg:px-[40px] px-0 text-start ">
                                    <p className="text-[#202430] opacity-50 lg:text-[20px] text-[16px]">
                                        Role
                                    </p>
                                </th>
                                <th className="py-2 lg:px-3 px-0 text-start">
                                    <span className="flex lg:items-center items-start">
                                        <p className="text-[#202430] opacity-50 lg:text-[20px] text-[16px]">
                                            Date Applied
                                        </p>
                                    </span>
                                </th>
                                <th className="text-start ">
                                    <span className="flex items-center">
                                        <p className="text-[#202430] opacity-50 lg:text-[20px] text-[16px]">
                                            Status
                                        </p>
                                    </span>
                                </th>
                                {/* <th className="text-start">
                                    <span className="flex items-center">
                                        <p className="text-[#202430] opacity-50 lg:text-[20px] text-[16px]">
                                            Action
                                        </p>
                                    </span>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody className="mt-4 w-full">
                            {applications?.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`border-b-[1px] border-b-[#FFFFFF1A] pb-[1rem]`}
                                >
                                    <td className="flex items-center px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            {/* <p className="bg-[black] text-[white] p-[6px]"> */}
                                            <Image src={item.companyLogo} height={64} width={64} alt='image' />
                                            {/* </p> */}
                                            <div href={"#"}>
                                                <h1 className="lg:text-[20px] text-[12px] font-semibold text-[#202430]">
                                                    {item.position}
                                                </h1>
                                                <h2 className="lg:text-[14px] text-[10px] w-full text-[#7C8493]">
                                                    {item.company} - {item.location} - {item.jobType}
                                                </h2>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="lg:px-3 px-[-5px] py-[10px] lg:text-[14px] text-[12px] text-[var(--text-color)]">
                                        {item.date}
                                    </td>

                                    <td
                                        className={``}
                                    >

                                        {item?.status === "In Review" && (
                                            <span className="text-[#FFB836] border-[#FFB836] border flex justify-center items-center py-[4px] px-[7px] rounded-[5px]">
                                                In Review
                                            </span>
                                        )}
                                        {item?.status === "Shortlisted" && (
                                            <span className="text-[#4640DE] border-[#4640DE] border flex justify-center items-center py-[4px] px-[7px] rounded-[5px]">
                                                Shortlisted
                                            </span>
                                        )}
                                        {item?.status === "Rejected" && (
                                            <span className="text-[#FF6550] border-[#FF6550] border flex justify-center items-center py-[4px] px-[7px] rounded-[5px]">
                                                Rejected
                                            </span>
                                        )}

                                    </td>
                                    {/* <td className="text-start cursor-pointer">
                                        <Ellipsis />
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex items-center justify-center mt-6">
                        <h2 className="text-[#4640DE] text-[16px] font-medium">
                            View all applications history
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentApplications