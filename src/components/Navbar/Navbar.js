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
        <div className='bg-slate-100 py-6'>
            <nav className='sm:container sm:mx-auto flex justify-between items-center relative mx-2'>
                <p className='w-[350px]'>
                    <Link to='/' className='text-2xl font-medium flex'>
                        <span className='mr-2'>
                            <img className='sm:w-[35px] w-[30px] inline' src={logo} alt="" />
                        </span>
                        <span>Programming.Info</span>
                    </Link>
                </p>
                <ul className={`lg:flex lg:static lg:justify-end absolute lg:bg-transparent bg-slate-400 z-10 w-full lg:p-0 p-5 lg:rounded-none rounded-lg
                ${open ? 'top-[60px]' : 'top-[-400px]'}`}>
                    <li className='lg:ml-9 lg:my-0 my-3 text-lg'>
                        <NavLink className='w-full block' onClick={() => setOpen(!open)} style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/home'>Home</NavLink>
                    </li>
                    <li className='lg:ml-9 lg:my-0 my-3 text-lg'>
                        <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/courses'>Courses</NavLink>
                    </li>
                    <li className='lg:ml-9 lg:my-0 my-3 text-lg'>
                        <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/faq'>FAQ</NavLink>
                    </li>
                    <li className='lg:ml-9 lg:my-0 my-3 text-lg'>
                        <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                            return isActive ? { textDecoration: 'underLine' } : undefined
                        }} to='/blog'>Blog</NavLink>
                    </li>
                    <li className='lg:ml-9 lg:my-0 my-3 text-lg'>

                        {theme ?
                            <button onClick={() => setTheme(!theme)}>Light</button> :
                            <button onClick={() => setTheme(!theme)}>Dark</button>
                        }

                    </li>

                    {user ?
                        <>
                            <li onClick={() => setOpen(!open)} className='lg:ml-9 lg:my-0 my-3 text-lg'>
                                <button onClick={handleSignOut}>Sign Out</button>
                            </li>
                            <li>
                                <p className='lg:ml-6 lg:my-0 my-3 text-lg'>{user?.displayName ?
                                    user?.displayName :
                                    'Not Defined'}
                                </p>
                            </li>
                            <li className='lg:ml-4'>
                                <img title={user?.displayName ?
                                    user?.displayName :
                                    'Not Defined'
                                }
                                    className='w-[30px] rounded-full cursor-pointer'
                                    src={user?.photoURL ?
                                        user?.photoURL :
                                        `https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000`}
                                    alt="" />
                            </li>
                        </> :
                        <>
                            <li className='lg:ml-9 lg:my-0 my-3 text-lg'>
                                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                                    return isActive ? { textDecoration: 'underLine' } : undefined
                                }} to='/login'>Log in</NavLink>
                            </li>
                            <li className='lg:ml-9 lg:my-0 my-3 text-lg'>
                                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                                    return isActive ? { textDecoration: 'underLine' } : undefined
                                }} to='/signup'>Sign up</NavLink>
                            </li>
                        </>
                    }

                </ul>
                <div className='lg:hidden cursor-pointer text-3xl' onClick={() => setOpen(!open)}>
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