import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(true);

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className='bg-slate-100 py-4'>
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

                        {theme ?
                            <button onClick={() => setTheme(!theme)}>Light</button> :
                            <button onClick={() => setTheme(!theme)}>Dark</button>
                        }

                    </li>

                    {user ?
                        <>
                            <li className='md:ml-9 text-lg'>
                                <button onClick={handleSignOut}>Sign Out</button>
                            </li>
                            <li>
                                <p className='md:ml-6 text-lg'>{user?.displayName ?
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
                        </>
                    }

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;