// ChangePassword.jsx or Settings.jsx
"use client"
import { UserContext } from '@/components/Context/UserContext';
import { CircleAlert } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import toast from 'react-hot-toast';

const ChangePassword = () => {
    const { user, token } = useContext(UserContext);
    const [formData, setFormData] = React.useState({
        email: '',
        oldPassword: '',
        newPassword: ''
    });

    // Update email when user data is available
    useEffect(() => {
        if (user?.email) {
            setFormData(prev => ({
                ...prev,
                email: user.email
            }));
        }
    }, [user]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.oldPassword || !formData.newPassword) {
            toast.error('Please fill in all fields');
            return;
        }

        if (formData.newPassword.length < 8) {
            toast.error('New password must be at least 8 characters');
            return;
        }

        const payload = {
            email: formData.email, // Make sure email is included
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
        };

        try {
            const response = await fetch("/api/auth/changePassword", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // Fixed: Added 'Bearer ' prefix
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Password change successful:', data);
                toast.success(data?.msg);
                setFormData(prev => ({
                    ...prev,
                    oldPassword: '',
                    newPassword: ''
                }));
            } else {
                console.log('Password change failed:', data);
                toast.error(data.message || 'Failed to change password. Please check your old password and try again.');
            }
        } catch (error) {
            console.error('Error changing password:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className='flex flex-col gap-8'>
            <div className='border-b border-[#D6DDEB] pb-2'>
                <h2 className='text-[#202430] text-[18px] font-semibold'>
                    Basic Information
                </h2>
                <p className='text-[#515B6F] text-[14px] font-normal'>
                    This is login information that you can update anytime.
                </p>
            </div>

            {/* Update Email Section */}
            <div className='flex flex-row border-b border-[#D6DDEB] pb-4 justify-between'>
                <div>
                    <h2 className='text-[#202430] text-[16px] font-semibold'>
                        Update Email
                    </h2>
                    <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                        Update your email address to make sure it is safe
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2 className='text-[#202430] text-[16px] font-semibold'>
                            {user?.email || 'jakegyll@email.com'}
                        </h2>
                        <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                            Your email address is verified.
                        </p>
                    </div>
                    <form className='w-[540px] flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-semibold'>
                                Update Email
                            </label>
                            <input
                                type="email"
                                className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                placeholder='Enter your new email'
                            />
                            <button className='bg-[#4640DE] text-white font-semibold cursor-pointer w-[145px] h-[50px]'>
                                Update Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Change Password Section */}
            <div className='flex flex-row border-b border-[#D6DDEB] pb-4 justify-between'>
                <div>
                    <h2 className='text-[#202430] text-[16px] font-semibold'>
                        New Password
                    </h2>
                    <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                        Manage your password to make sure it is safe
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <form onSubmit={handleSubmit} className='w-[540px] flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-semibold'>
                                Old Password
                            </label>
                            <input
                                type="password"
                                value={formData.oldPassword}
                                name="oldPassword"
                                onChange={handleInputChange}
                                className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                placeholder='Enter your old password'
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[16px] font-semibold'>
                                New Password
                            </label>
                            <input
                                type="password"
                                value={formData.newPassword}
                                name="newPassword"
                                onChange={handleInputChange}
                                className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]'
                                placeholder='Enter your new password'
                                required
                                minLength={8}
                            />
                        </div>
                        <span className='text-[#7C8493] text-[14px]'>
                            Minimum 8 characters
                        </span>
                        <button type='submit' className='bg-[#4640DE] text-white font-semibold cursor-pointer w-[165px] h-[50px]'>
                            Change Password
                        </button>
                    </form>
                </div>
            </div>

            {/* Close Account Section */}
            <div className='flex justify-end w-full'>
                <button className='text-[#FF6550] flex items-center gap-2 text-[16px] font-semibold'>
                    Close Account <CircleAlert />
                </button>
            </div>
        </div>
    );
}

export default ChangePassword;