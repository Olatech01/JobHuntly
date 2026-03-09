"use client"
import { Building2, CircleQuestionMark, File, Home, LogOut, MessageSquareText, Search, Settings, User } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", icon: <Home />, path: "/dashboard" },
        { name: "Message", icon: <MessageSquareText />, path: "/dashboard/messages" },
        { name: "My Applications", icon: <File />, path: "/dashboard/applications" },
        { name: "Find Jobs", icon: <Search />, path: "/dashboard/jobs" },
        { name: "Browse Companies", icon: <Building2 />, path: "/dashboard/companies" },
        { name: "My Public Profile", icon: <User />, path: "/dashboard/profile" },
        { name: "Settings", icon: <Settings />, path: "/dashboard/settings" },
        { name: "Help Center", icon: <CircleQuestionMark />, path: "/dashboard/help" },
    ]
    return (
        <div className="fixed left-0 top-0 h-screen w-[320px] hidden bg-gray-50 border-r border-gray-200 px-6 py-8 md:flex flex-col">
            {/* Logo / Brand */}
            <div className="mb-12">
                <Image src="/logo.svg" alt="Logo" width={150} height={50} className="object-contain" />
            </div>

            {/* Menu Items */}
            <nav className="flex-1">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`
                    flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                    ${isActive
                                            ? "bg-[#5858FA] text-white shadow-lg"
                                            : "text-gray-700 hover:bg-gray-100 hover:text-[#5858FA]"
                                        }
                  `}
                                >
                                    <span className={isActive ? "text-white" : "text-gray-600"}>
                                        {item.icon}
                                    </span>
                                    <span className="font-medium">{item.name}</span>

                                    {/* Optional: Add badge for notifications */}
                                    {item.name === "Notifications" && (
                                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            3
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Optional: Logout or Footer */}
            <div className="border-t border-gray-200 pt-6">
                <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition">
                    <LogOut size={22} />
                    <span className="font-medium">Log Out</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar