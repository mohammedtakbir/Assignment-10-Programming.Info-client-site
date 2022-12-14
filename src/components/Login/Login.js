import React, { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { userLogIn, GoogleSignIn, githubSignIn, userForgotPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                setLoading(false);
                navigate(from);
                form.reset();
                toast.success('Log in successfully!');
                console.log(result.user)
            })
            .catch(error => {
                setLoading(false);
                setError(error.message)
            })
    };
    //* SignIn with google
    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                navigate(from);
                setError('');
                toast.success('Log in successfully!');
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
                toast.success('Log in successfully!');
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    };

    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    };

    //* Forget password
    const handleForgotPassword = () => {
        if (!email) {
            setError('You have to insert email first.')
            return;
        }
        userForgotPassword(email)
            .then(() => {
                toast.success('Password reset email sent on your email address!')
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
    }

    return (
        <div>
            <h3 className='text-center md:mt-14 mt-7 font-bold mb-6 sm:mx-0 mx-3'>Log in to your Programming.Info account</h3>
            <hr className='sm:max-w-[500px] max-w-[400px] mx-auto' />
            <div className='flex justify-center mt-7'>
                <div className='sm:w-[350px] w-[300px] shadow-xl p-5 rounded-md border border-gray-100'>
                    <div className='pb-5'>
                        <button onClick={handleGithubSignIn} className='flex items-center bg-slate-100 hover:bg-slate-200 py-3 px-4 mb-3 rounded-md text-sm w-full'>
                            <span className='text-2xl'><FaGithub /></span>
                            <span className='font-medium md:ml-3 ml-2'>Continue with Github</span>
                        </button>
                        <button onClick={handleGoogleSignIn} className='flex items-center bg-slate-100 hover:bg-slate-200 py-3 px-4 rounded-md text-sm w-full'>
                            <span className='text-2xl'><FcGoogle /></span>
                            <span className='font-medium md:ml-3 ml-2'>Continue with Google</span>
                        </button>
                    </div>

                    <form onSubmit={handleLogIn}>
                        <div className='mb-4 mt-3'>
                            <label
                                htmlFor=""
                                className='block text-sm font-medium mb-1'>Email</label>
                            <input
                                onBlur={handleGetEmail}
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-sm'
                                type="email"
                                name="email"
                                id=""
                                placeholder='Email Address'
                                required
                            />
                        </div>
                        <div className='mb-2'>
                            <label
                                htmlFor=""
                                className='block text-sm font-medium mb-1'>Password</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-sm'
                                type="password"
                                name="password"
                                id=""
                                placeholder='Password' 
                                required
                            />
                        </div>
                        <p className='text-red-500 text-sm'>{error}</p>
                        <div className='mt-5'>
                            <button type='submit' className='bg-slate-200 hover:bg-slate-300 py-3 px-4 rounded-md w-full text-sm font-medium'>
                                {loading ? 'Loading' : 'Log In'}
                            </button>
                        </div>
                    </form>
                    <p className='text-center mt-3 text-sm'>
                        <span>or </span>
                        <button onClick={handleForgotPassword} className='text-blue-500'>Forgot Password</button>
                    </p>
                    <p className='text-center mt-4 text-sm'>
                        <span>Don't have an account? </span>
                        <Link to='/signup' className='underline text-blue-500'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;