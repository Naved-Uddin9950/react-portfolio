import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';

function Header() {
    return (
        <div className='py-6 px-2 w-full font-bold top-0 border shadow-sm'>
            <nav className='flex flex-row flex-wrap items-center justify-between px-20'>
                <img src={logo} alt="logo" />

                <div className='flex flex-row gap-5'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'}`}
                    >Home</NavLink>

                    <NavLink
                        to='projects'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'}`}
                    >Projects</NavLink>

                    <NavLink
                        to='contact'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'}`}
                    >Contact</NavLink>

                    <NavLink
                        to='resume'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'}`}
                    >Resume</NavLink>

                    <NavLink
                        to='github'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black'}`}
                    >Github</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header