import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthProvider';
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(true);
    const [open, setOpen] = useState(false);

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className='bg-slate-100 py-4'>
            <nav className='container mx-auto flex justify-between items-center relative'>
                <p className='w-[300px]'>
                    <Link to='/' className='text-2xl font-medium flex'>
                        <span className='mr-2'>
                            <img className='w-[30px] inline' src={logo} alt="" />
                        </span>
                        <span>Programming.Info</span>
                    </Link>
                </p>
                <ul className={`md:flex md:static md:justify-end absolute md:bg-transparent bg-slate-400 z-10 w-full md:p-0 p-5 md:rounded-none rounded-md
                ${open ? 'top-[60px]' : 'top-[-400px]'}`}>
                    <li className='md:ml-9 md:my-0 my-3 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/home'>Home</NavLink>
                    </li>
                    <li className='md:ml-9 md:my-0 my-3 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/courses'>Courses</NavLink>
                    </li>
                    <li className='md:ml-9 md:my-0 my-3 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/faq'>FAQ</NavLink>
                    </li>
                    <li className='md:ml-9 md:my-0 my-3 text-lg'>
                        <NavLink style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/blog'>Blog</NavLink>
                    </li>
                    <li className='md:ml-9 md:my-0 my-3 text-lg'>

                        {theme ?
                            <button onClick={() => setTheme(!theme)}>Light</button> :
                            <button onClick={() => setTheme(!theme)}>Dark</button>
                        }

                    </li>

                    {user ?
                        <>
                            <li className='md:ml-9 md:my-0 my-3 text-lg'>
                                <button onClick={handleSignOut}>Sign Out</button>
                            </li>
                            <li>
                                <p className='md:ml-6 md:my-0 my-3 text-lg'>{user?.displayName ?
                                    user?.displayName :
                                    'Not Defined'}
                                </p>
                            </li>
                            <li>
                                <img title={user?.displayName ?
                                    user?.displayName :
                                    'Not Defined'
                                }
                                    className='w-[30px] rounded-full ml-4 cursor-pointer'
                                    src={user?.photoURL ?
                                        user?.photoURL :
                                        `https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000`}
                                    alt="" />
                            </li>
                        </> :
                        <>
                            <li className='md:ml-9 md:my-0 my-3 text-lg'>
                                <NavLink style={({ isActive }) => {
                                    return isActive ? { textDecoration: 'underLine' } : undefined
                                }} to='/login'>Log in</NavLink>
                            </li>
                            <li className='md:ml-9 md:my-0 my-3 text-lg'>
                                <NavLink style={({ isActive }) => {
                                    return isActive ? { textDecoration: 'underLine' } : undefined
                                }} to='/signup'>Sign up</NavLink>
                            </li>
                        </>
                    }

                </ul>
                <div className='md:hidden cursor-pointer text-3xl' onClick={() => setOpen(!open)}>
                    {open ?
                        <HiXMark /> :
                        <HiBars3 />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;