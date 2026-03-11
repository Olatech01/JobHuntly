import React from 'react'

const LoadingState = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Welcome message with loading dots */}
                <div className="mb-8 text-center">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-semibold text-gray-700">Finding the best jobs for you</span>
                        <span className="flex gap-1">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></span>
                        </span>
                    </div>
                    <p className="text-gray-500 mt-2">This will only take a moment</p>
                </div>

                {/* Loading cards with hover effect */}
                <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 
                         transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                        >
                            <div className="flex items-start gap-4">
                                {/* Animated logo */}
                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl 
                                animate-pulse flex items-center justify-center">
                                        <svg className="w-8 h-8 text-indigo-300 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-3">
                                    {/* Title and company */}
                                    <div className="space-y-2">
                                        <div className="h-6 w-64 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg animate-pulse"></div>
                                        <div className="h-4 w-40 bg-gradient-to-r from-indigo-50 to-purple-50 rounded animate-pulse"></div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex gap-2">
                                        <div className="h-6 w-20 bg-indigo-50 rounded-full animate-pulse"></div>
                                        <div className="h-6 w-20 bg-indigo-50 rounded-full animate-pulse"></div>
                                        <div className="h-6 w-20 bg-indigo-50 rounded-full animate-pulse"></div>
                                    </div>

                                    {/* Meta info */}
                                    <div className="flex items-center gap-4">
                                        <div className="h-4 w-24 bg-gray-100 rounded animate-pulse"></div>
                                        <div className="h-4 w-24 bg-gray-100 rounded animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Action button */}
                                <div className="h-10 w-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fun message */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400 italic">
                        While you wait, here's a fun fact: The first job board was created in 1994!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoadingState