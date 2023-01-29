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
    const [open, setOpen] = useState(false);

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className='bg-slate-50 py-3 shadow-lg sticky top-0 z-50'>
            <nav className='sm:max-w-[1400px] sm:mx-auto flex justify-between items-center relative mx-2'>
                <p className='w-[350px]'>
                    <Link to='/' className='sm:text-2xl text-xl font-medium flex'>
                        <span className='mr-2'>
                            <img className='sm:w-[35px] w-[30px] inline' src={logo} alt="" />
                        </span>
                        <span>Programming.Info</span>
                    </Link>
                </p>
                <ul className={`lg:flex lg:static lg:justify-end items-center absolute lg:bg-transparent bg-slate-400 z-10 w-full lg:p-0 p-5 lg:rounded-none rounded-lg
                ${open ? 'top-[50px]' : 'top-[-400px]'}`}>
                    <li className='lg:my-0 my-3 text-base'>
                        <NavLink
                            className='w-full block'
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underLine' } : undefined
                            }}
                            to='/home'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='lg:ml-6 lg:my-0 my-3 text-base'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underLine' } : undefined
                            }}
                            to='/courses'
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li className='lg:ml-6 lg:my-0 my-3 text-base'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underLine' } : undefined
                            }}
                            to='/faq'
                        >
                            FAQ
                        </NavLink>
                    </li>
                    {/* <li className='lg:ml-9 lg:my-0 my-3 text-base'>
                        <NavLink
                            onClick={() => setOpen(!open)}
                            style={({ isActive }) => {
                                return isActive ? { textDecoration: 'underLine' } : undefined
                            }}
                            to='/blog'
                        >
                            Blog
                        </NavLink>
                    </li> */}
                    {user ?
                        <>
                            <li className='lg:ml-6 lg:my-0 my-3 text-base'>
                                <div className="dropdown md:dropdown-end">
                                    <label tabIndex={0}>
                                        <img title={user?.displayName ?
                                            user?.displayName :
                                            'Not Defined'
                                        }
                                            className='w-[30px] rounded-full cursor-pointer'
                                            src={user?.photoURL ?
                                                user?.photoURL :
                                                `https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000`}
                                            alt="" />
                                    </label>
                                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-56 mt-4">
                                        <img title={user?.displayName ?
                                            user?.displayName :
                                            'Not Defined'
                                        }
                                            className='w-[50px] rounded-full cursor-pointer mx-auto mt-3'
                                            src={user?.photoURL ?
                                                user?.photoURL :
                                                `https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000`}
                                            alt="" />
                                        <p className='text-sm mt-3 text-center font-medium'>{user?.displayName}</p>
                                        <p className='text-sm mb-2 text-center'>{user?.email}</p>
                                        <li onClick={() => setOpen(!open)}>
                                            <button onClick={handleSignOut} className='justify-center p-0 mb-2 text-sm'>Sign Out</button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </> :
                        <>
                            <li className='lg:ml-6 lg:my-0 my-3 lg:mb-0 mb-5 text-base inline-block'>
                                <NavLink
                                    className='border border-gray-900 px-3 py-2 hover:bg-gray-200 text-black'
                                    onClick={() => setOpen(!open)}
                                    to='/login'
                                >
                                    Sign In
                                </NavLink>
                            </li>
                            <li className='lg:ml-5 lg:my-0 my-3 text-base block'>
                                <NavLink
                                    className='border border-gray-900 px-3 py-2 bg-black text-white'
                                    onClick={() => setOpen(!open)} 
                                    /* style={({ isActive }) => {
                                        return isActive ? { textDecoration: 'underLine' } : undefined
                                    }} */
                                    to='/signup'
                                >
                                    Register
                                </NavLink>
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