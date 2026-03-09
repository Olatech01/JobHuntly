import MainLayout from '@/components/Dashboard/Layout/MainLayout'
import React from 'react'

const layout = ({children}) => {
  return (
    <MainLayout>
        {children}
    </MainLayout>
  )
}

export default layout