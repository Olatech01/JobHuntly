import Layout from '@/components/Company/Layout'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Layout>
            {children}
        </Layout>
    </div>
  )
}

export default layout