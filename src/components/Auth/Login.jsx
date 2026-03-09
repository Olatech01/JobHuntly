"use client"
import Image from 'next/image'
import React from 'react'

const Login = () => {
    const [activeTab, setActiveTab] = React.useState('seeker');

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
        password: formData.password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });


            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
            } else {
                console.error('Login failed:', data);
            }

            if (response.ok) {
                // Store the token in localStorage or cookies
                localStorage.setItem('token', data.token);
                alert('Login successful!');
                // Redirect to dashboard or another page
                window.location.href = '/dashboard';
            }
        } catch (error) {
            console.error('Error during login:', error);
        }

    }


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
                            <button onClick={() => setActiveTab('seeker')} className={`w-1/2 py-2 ${activeTab === 'seeker' ? 'bg-[#4640DE]/40 text-[#4640DE]' : 'bg-gray-200 text-gray-700'}`}>Job Seeker</button>
                            <button onClick={() => setActiveTab('employer')} className={`w-1/2 py-2 ${activeTab === 'employer' ? 'bg-[#4640DE]/70 text-[#4640DE]' : 'bg-gray-200 text-gray-700'}`}>Employer</button>
                        </div>
                        <h2 className='text-[25px] font-bold'>
                            Welcome Back
                        </h2>
                        {activeTab === 'seeker' && (
                            <div>
                                <div>
                                    <label htmlFor="">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email" className='w-full p-2 mb-4 border border-gray-300 rounded' />
                                </div>
                                <div>
                                    <label htmlFor="">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password" className='w-full p-2 mb-4 border border-gray-300 rounded' />
                                </div>
                                <button type='submit' className='w-full py-2 bg-blue-500 text-white rounded'>Login as Job Seeker</button>
                            </div>
                        )}
                        {activeTab === 'employer' && (
                            <div>
                                <input type="email" placeholder="Email" className='w-full p-2 mb-4 border border-gray-300 rounded' />
                                <input type="password" placeholder="Password" className='w-full p-2 mb-4 border border-gray-300 rounded' />
                                <button className='w-full py-2 bg-blue-500 text-white rounded'>Login as Employer</button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login