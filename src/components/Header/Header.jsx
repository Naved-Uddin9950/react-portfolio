import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';
import { Toggle } from '../../components';

function Header() {
    return (
        <div className='py-6 px-2 w-full font-bold top-0 border dark:border-transparent dark:shadow-md shadow-sm dark:bg-gray-900'>
            <nav className='flex flex-row flex-wrap items-center justify-between px-20'>
                <div className='flex flex-row items-center gap-8'>
                    <img src={logo} alt="logo" />

                    <NavLink
                        to='/'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black dark:text-white'}`}
                    >Home</NavLink>

                    <NavLink
                        to='projects'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black dark:text-white'}`}
                    >Projects</NavLink>

                    <NavLink
                        to='contact'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black dark:text-white'}`}
                    >Contact</NavLink>

                    <NavLink
                        to='resume'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black dark:text-white'}`}
                    >Resume</NavLink>

                    <NavLink
                        to='github'
                        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-black dark:text-white'}`}
                    >Github</NavLink>
                </div>

                <div className='flex flex-row gap-5'>
                    <Toggle />
                </div>
            </nav>
        </div>
    )
}

export default Header