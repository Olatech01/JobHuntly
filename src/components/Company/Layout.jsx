import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({children}) => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className='md:pl-[350px] pl-0 bg-white w-full flex flex-col'>
                <Header />
                <main className="flex-1 py-8  md:pr-6 px-3 w-full overflow-y-auto ">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout