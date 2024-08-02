import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between items-center bg-gray-600 p-4 rounded-full bg-opacity-50 shadow-2xl '>
        <div>
        <h1 className='text-2xl font-bold text-gray-500 '>EnhancedDES</h1>
        </div>

        <div>
        <Link to='/' className='p-4 text-gray-500 hover:text-purple-600 '>Home</Link>
        <Link to='/encrypt' className='p-4 text-gray-500 hover:text-purple-600'>Encrypt</Link>
        <Link to='/decrypt' className='p-4 text-gray-500 hover:text-purple-600'>Decrypt</Link>
        </div>
        
    </div>
  )
}

export default Header