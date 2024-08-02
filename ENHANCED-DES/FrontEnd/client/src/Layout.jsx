import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-gradient-to-br from-purple-800 via-black to-black p-4 flex flex-col min-h-screen '>
        
        <Header/>
        
        <Outlet/>
        
        
        
    </div>
  )
}

export default Layout