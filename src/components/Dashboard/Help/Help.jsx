"use client"
import React, { useEffect, useState } from "react";
import { LifeBuoy } from "lucide-react";

const Help = () => {
    const text = "Help Center is being prepared for you...";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayText(text.slice(0, index));
            index++;

            if (index > text.length) clearInterval(interval);
        }, 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-0 flex items-center justify-center h-[80vh] overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 animate-pulse"></div>

            {/* Floating Icons */}
            <LifeBuoy className="absolute top-20 left-20 text-green-400 opacity-40 animate-bounce" size={40} />
            <LifeBuoy className="absolute bottom-20 right-20 text-blue-400 opacity-40 animate-bounce delay-300" size={50} />
            <LifeBuoy className="absolute top-32 right-40 text-green-300 opacity-40 animate-bounce delay-500" size={30} />

            {/* Content */}
            <div className="relative text-center">

                <div className="flex justify-center mb-6">
                    <div className="p-5 rounded-full bg-white shadow-lg">
                        <LifeBuoy size={50} className="text-green-600 animate-pulse" />
                    </div>
                </div>

                <h1 className="text-4xl font-bold mb-3">
                    Help Center
                </h1>

                <p className="text-gray-600 text-lg h-[30px]">
                    {displayText}
                    <span className="animate-pulse">|</span>
                </p>

                {/* Loader */}
                <div className="flex justify-center mt-6">
                    <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                </div>

                <p className="text-gray-500 text-sm mt-4">
                    Our support resources will be available soon 🚀
                </p>

            </div>
        </div>
    );
};

export default Help;