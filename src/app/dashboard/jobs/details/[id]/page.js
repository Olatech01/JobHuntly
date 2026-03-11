import JobDetails from '@/components/Dashboard/FindJobs/JobDetails'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
        <JobDetails />
    </Suspense>
  )
}

export default page