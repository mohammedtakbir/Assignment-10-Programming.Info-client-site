import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-slate-300 py-4'>
            <nav className='container mx-auto flex justify-between items-center'>
                <p>
                    <Link to='/' className='text-2xl font-medium'>
                        <span className='mr-2'>
                            <img className='w-[30px] inline' src={logo} alt="" />
                        </span>
                        Programming.Info
                    </Link>
                </p>
                <ul className='flex'>
                    <li className='md:ml-9 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/home'>Home</NavLink>
                    </li>
                    <li className='md:ml-9 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/courses'>Courses</NavLink>
                    </li>
                    <li className='md:ml-9 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/faq'>FAQ</NavLink>
                    </li>
                    <li className='md:ml-9 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/blog'>Blog</NavLink>
                    </li>
                    <li className='md:ml-9 text-lg'>
                        <button>Light</button>
                    </li>
                    <li className='md:ml-9 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/login'>Log in</NavLink>
                    </li>
                    <li className='md:ml-9 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/signup'>Sign up</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;