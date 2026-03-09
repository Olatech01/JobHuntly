import Dashboard from '@/components/Dashboard/Dashboard'
import RecentApplications from '@/components/Dashboard/RecentApplications'
import Stats from '@/components/Dashboard/Stats'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Dashboard />
      <Stats />
      <RecentApplications />
    </div>
  )
}

export default page