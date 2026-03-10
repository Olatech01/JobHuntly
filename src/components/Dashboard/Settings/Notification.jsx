import React from 'react'

const Notification = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='border-b border-[#D6DDEB] pb-2'>
                <h2 className='text-[#202430] text-[18px] font-semibold'>
                    Basic Information
                </h2>
                <p className='text-[#515B6F] text-[14px] font-normal'>
                    This is notifications preferences that you can update anytime.
                </p>
            </div>
            <div className='flex flex-row pb-4 justify-between'>
                <div>
                    <h2 className='text-[#202430] text-[16px] font-semibold'>
                        Notifications
                    </h2>
                    <p className='text-[#515B6F] w-[259px] text-[16px] font-normal'>
                        Customize your preferred notification settings
                    </p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-3'>
                        <input type="checkbox" />
                        <div>
                            <h2 className='text-[#202430] text-[16px] font-semibold'>Applications</h2>
                            <p className='text-[#515B6F] text-[16px] font-normal'>These are notifications for jobs that you have applied to</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <input type="checkbox" />
                        <div>
                            <h2 className='text-[#202430] text-[16px] font-semibold'>Jobs</h2>
                            <p className='text-[#515B6F] text-[16px] font-normal'>These are notifications for job openings that suit your profile</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <input type="checkbox" />
                        <div>
                            <h2 className='text-[#202430] text-[16px] font-semibold'>Recommendations</h2>
                            <p className='text-[#515B6F] text-[16px] font-normal'>These are notifications for personalized recommendations from our recruiters</p>
                        </div>
                    </div>
                    <button className='bg-[#4640DE] text-white font-semibold cursor-pointer w-[145px] h-[50px]'>
                        Update Email
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notification