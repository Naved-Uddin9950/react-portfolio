import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <div className='bg-gray-800 py-3 px-2 w-full text-white font-bold top-0'>
            <nav className='flex flex-row flex-wrap gap-4 items-center justify-center'>
                <NavLink 
                    to='/'
                    className={({isActive}) => `${isActive?'text-blue-500':'text-white'}`}
                >Home</NavLink>

                <NavLink
                    to='projects'
                    className={({isActive}) => `${isActive?'text-blue-500':'text-white'}`}
                >Projects</NavLink>
                
                <NavLink
                    to='contact'
                    className={({isActive}) => `${isActive?'text-blue-500':'text-white'}`}
                >Contact</NavLink>
               
                <NavLink
                    to='resume'
                    className={({isActive}) => `${isActive?'text-blue-500':'text-white'}`}
                >Resume</NavLink>

                <NavLink 
                    to='github'
                    className={({isActive}) => `${isActive?'text-blue-500':'text-white'}`}
                >Github</NavLink>
            </nav>
        </div>
    )
}

export default Header