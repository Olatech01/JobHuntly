"use client"
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast';
import { setCookie, deleteCookie, getCookie } from 'cookies-next';

const Login = () => {
    const [loading, setLoading] = React.useState(false);
    const [userType, setUserType] = React.useState('jobSeeker'); // 'seeker' or 'employer'

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    // Clear existing cookies on component mount
    React.useEffect(() => {
        // Clear any existing auth cookies
        deleteCookie('token');
        deleteCookie('user');
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const payload = {
        email: formData.email,
        password: formData.password,
        userType: userType // Include user type in the request
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // First, clear any existing cookies before new login
            deleteCookie('token');
            deleteCookie('user');

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

                // Role-based routing
                if (data.user.role === 'company' || data.user.userType === 'company') {
                    window.location.href = '/company';
                } else {
                    window.location.href = '/dashboard';
                }
            } else {
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
                        {/* <h1 className='text-3xl font-bold mb-6'>Login</h1> */}

                        <h2 className='text-[25px] font-bold mb-4'>
                            Welcome Back
                        </h2>

                        <div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    className='w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent'
                                    required
                                />
                            </div>

                            {/* Forgot Password Link */}
                            <div className="text-right mb-4">
                                <a href="/forgot-password" className="text-sm text-[#4640DE] hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 rounded-lg text-white flex items-center justify-center gap-2 font-medium transition-all
                                    ${loading
                                        ? "bg-[#4640DE]/50 cursor-not-allowed"
                                        : "bg-[#4640DE] hover:bg-[#3630B0] hover:shadow-lg"
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Logging in...
                                    </>
                                ) : (
                                    "Login"
                                )}
                            </button>

                            {/* Sign up link */}
                            <p className="text-center mt-6 text-gray-600">
                                Don't have an account?{' '}
                                <a
                                    href={userType === 'seeker' ? "/signup" : "/company/signup"}
                                    className="text-[#4640DE] font-medium hover:underline"
                                >
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login