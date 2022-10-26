import React, { useContext } from 'react';
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { userLogIn, GoogleSignIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                navigate(from);
                form.reset();
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    };
    //* SignIn with google
    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                navigate(from);
                setError('');
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    };
    //* SignIn with Github
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                navigate(from);
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div>
            <h3 className='text-center mt-14 font-bold mb-6'>Log in to your Programming.Info account</h3>
            <hr className='max-w-[500px] mx-auto' />
            <div className='flex justify-center mt-7'>
                <div className='w-[400px] shadow-xl p-5 rounded-md'>
                    <button onClick={handleGithubSignIn} className='flex items-center bg-slate-100 hover:bg-slate-200 py-3 px-4 mb-3 rounded-md text-lg w-full'>
                        <span className='text-2xl'><FaGithub /></span>
                        <span className='font-medium ml-3'>Continue with Github</span>
                    </button>
                    <button onClick={handleGoogleSignIn} className='flex items-center bg-slate-100 hover:bg-slate-200 py-3 px-4 rounded-md text-lg w-full'>
                        <span className='text-2xl'><FcGoogle /></span>
                        <span className='font-medium ml-3'>Continue with Google</span>
                    </button>

                    <form onSubmit={handleLogIn}>
                        <div className='mb-4 mt-3'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Email</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="email"
                                name="email"
                                id=""
                                placeholder='your Email address' />
                        </div>
                        <div className='mb-2'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Password</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="password"
                                name="password"
                                id=""
                                placeholder='your Email address' />
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className='mt-5'>
                            <button type='submit' className='bg-slate-200 hover:bg-slate-300 py-3 px-4 rounded-md w-full text-lg font-medium'>Log In</button>
                        </div>
                    </form>
                    <p className='text-center mt-3'>
                        <span>or </span>
                        <button className='text-blue-500'>Forgot Password</button>
                    </p>
                    <p className='text-center mt-4'>
                        <span>Don't have an account? </span>
                        <Link to='/signup' className='underline text-blue-500'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;