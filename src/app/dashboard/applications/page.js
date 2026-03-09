import Application from '@/components/Dashboard/Applications/Application'
import ApplicationTable from '@/components/Dashboard/Applications/ApplicationTable'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Application />
      <ApplicationTable />
    </div>
  )
}

export default page