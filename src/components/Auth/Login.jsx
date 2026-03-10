"use client"
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast';
import { setCookie } from 'cookies-next';

const Login = () => {
    const [activeTab, setActiveTab] = React.useState('seeker');
    const [loading, setLoading] = React.useState(false);

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const payload = {
        email: formData.email,
        password: formData.password,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);

                // Store in cookies using cookies-next
                setCookie('token', data.token, {
                    maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
                    path: '/',
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict'
                });

                setCookie('user', JSON.stringify(data.user), {
                    maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
                    path: '/',
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict'
                });

                toast.success(data.msg);
                window.location.href = '/dashboard';
            } else {
                // console.error('Login failed:', data);
                if (data.error) {
                    toast.error(data.error); 
                } else if (data.statusCode === "00") {
                    toast.error("Invalid credentials");
                } else {
                    toast.error('Login failed!');
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className='flex bg-[#F8F8FD]'>
            <div className='w-full h-screen'>
                <Image src="/auth.svg" alt="Login Image" width={500} height={500} className='w-full h-screen' />
            </div>
            <div className='w-full bg-white h-screen'>
                <form onSubmit={handleSubmit} className='flex justify-center items-center h-full'>
                    <div className='w-[400px]'>
                        <h1 className='text-3xl font-bold mb-6'>Login</h1>
                        <div className='flex mb-4'>
                            <button
                                type="button"
                                onClick={() => setActiveTab('seeker')}
                                className={`w-1/2 py-2 ${activeTab === 'seeker' ? 'bg-[#4640DE]/40 text-[#4640DE]' : 'bg-gray-200 text-gray-700'}`}
                            >
                                Job Seeker
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('employer')}
                                className={`w-1/2 py-2 ${activeTab === 'employer' ? 'bg-[#4640DE]/70 text-[#4640DE]' : 'bg-gray-200 text-gray-700'}`}
                            >
                                Employer
                            </button>
                        </div>
                        <h2 className='text-[25px] font-bold'>
                            Welcome Back
                        </h2>
                        {activeTab === 'seeker' && (
                            <div>
                                <div>
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className='w-full p-2 mb-4 border border-gray-300 rounded'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password"
                                        className='w-full p-2 mb-4 border border-gray-300 rounded'
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-2 rounded text-white flex items-center justify-center gap-2 
                                    ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Logging in...
                                        </>
                                    ) : (
                                        "Login as Job Seeker"
                                    )}
                                </button>
                            </div>
                        )}
                        {activeTab === 'employer' && (
                            <div>
                                <div>
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className='w-full p-2 mb-4 border border-gray-300 rounded'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password"
                                        className='w-full p-2 mb-4 border border-gray-300 rounded'
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-2 rounded text-white flex items-center justify-center gap-2 
                                    ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Logging in...
                                        </>
                                    ) : (
                                        "Login as Employer"
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login