import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-gradient-to-br from-purple-950 via-black to-black p-4 flex flex-col min-h-screen bg-black'>
        
        <Header/>
        <Outlet/>
        
    </div>
  )
}

export default Layout