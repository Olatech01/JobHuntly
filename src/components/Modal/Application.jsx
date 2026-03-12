"use client";
import { Paperclip } from 'lucide-react';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { UserContext } from '@/components/Context/UserContext';
import toast from 'react-hot-toast';

const Application = ({ open, setOpen, icon, companyName, jobTitle, location, employmentType, jobId }) => {
    const { token } = useContext(UserContext);

    const [formData, setFormData] = useState({
        coverLetter: '',
        portfolio: '',
        jobTitle: '',
    });
    const [resumeFile, setResumeFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    if (!open) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setResumeFile(file);
        } else {
            setError('Only PDF files are allowed');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = new FormData();
            data.append('coverLetter', formData.coverLetter);
            data.append('portfolio', formData.portfolio);
            data.append('jobTitle', jobTitle);
            if (resumeFile) {
                data.append('resume', resumeFile);
            }

            const res = await fetch(`/api/apply/${jobId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: data,
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || 'Failed to submit application');
            }

            if (res.ok) {
                toast.success(result.message)
                setTimeout(() => setOpen(false), 2000);

            }

            // setSuccess(true);


        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
                onClick={() => setOpen(false)}
            />
            <div className='bg-[#FFFFFF] z-[9999] relative w-[644px] h-[650px] flex flex-col'>

                {/* Fixed Header */}
                <div className='flex items-center border-b border-[#F8F8FD] px-6 py-4 gap-4 flex-shrink-0'>
                    <Image
                        src={icon}
                        alt="Company Logo" width={80} height={80} className="object-contain rounded-md"
                    />
                    <div>
                        <h2 className='text-[24px] font-bold text-[#25324B]'>{jobTitle}</h2>
                        <p className='text-sm text-gray-500'>
                            {companyName} • {location} • {employmentType}
                        </p>
                    </div>
                </div>

                {/* Scrollable Form */}
                <form onSubmit={handleSubmit} className='flex-1 overflow-y-auto px-6 py-4'>
                    <div className='mt-2'>
                        <h2 className='text-[#25324B] text-[24px] font-semibold'>Submit your application</h2>
                        <p className='text-[16px] text-[#7C8493] font-normal'>
                            The following is required and will only be shared with {companyName}
                        </p>
                    </div>

                    {error && (
                        <p className='mt-4 text-red-500 text-sm'>{error}</p>
                    )}
                    {/* {success && (
                        <p className='mt-4 text-green-500 text-sm'>Application submitted successfully!</p>
                    )} */}


                    <div className='flex flex-col gap-1 mt-6'>
                        <label className='text-[16px] text-[#515B6F] font-semibold'>Current or previous job title</label>
                        <input type="text" placeholder='Your current or previous job title?'
                            className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]' />
                    </div>

                    <div className='flex flex-col mt-6 gap-1'>
                        <label className='text-[16px] text-[#515B6F] font-semibold'>Portfolio Url</label>
                        <input type="text" name="portfolio" placeholder='Link to your portfolio URL'
                            onChange={handleChange}
                            className='border border-[#D6DDEB] px-3 outline-0 bg-transparent h-[40px]' />
                    </div>

                    <div className='flex mt-6 flex-col gap-1'>
                        <label className='text-[16px] text-[#515B6F] font-semibold'>Additional information</label>
                        <textarea name="coverLetter" onChange={handleChange}
                            className='border border-[#D6DDEB] p-3 outline-0 bg-transparent min-h-[120px]' />
                    </div>

                    {/* Resume Upload */}
                    <div className='flex mt-6 items-center justify-between w-full'>
                        <h2 className='text-[16px] font-semibold'>Attach your resume</h2>
                        <label className='flex items-center justify-center gap-2 border-dotted border-2 border-[#4640DE] w-[220px] h-[58px] cursor-pointer'>
                            <Paperclip />
                            <span>{resumeFile ? resumeFile.name : 'Attach Resume/CV'}</span>
                            <input type="file" accept=".pdf" onChange={handleFileChange} className='hidden' />
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className='bg-[#4640DE] mt-6 w-full h-[50px] text-white text-[16px] font-semibold disabled:opacity-60'
                    >
                        {loading ? 'Submitting...' : 'Submit Application'}
                    </button>

                    <span className='text-[16px] pt-8 pb-4 block font-normal text-[#515B6F]'>
                        By sending the request you can confirm that you accept our{' '}
                        <span className='text-[#4640DE]'>Terms of Service and Privacy Policy</span>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Application;