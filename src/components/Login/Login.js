import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {



    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        



    }


    return (
        <div>
            <h3 className='text-center mt-14 font-bold mb-6'>Log in to your Programming.Info account</h3>
            <hr className='w-[400px] mx-auto' />
            <div className='flex justify-center mt-7'>
                <div>
                    <button className='flex items-center bg-slate-100 hover:bg-slate-200 py-3 px-4 mb-3 rounded-md text-lg w-[300px]'>
                        <span className='text-2xl'><FaGithub /></span>
                        <span className='font-medium ml-3'>Continue with Github</span>
                    </button>
                    <button className='flex items-center bg-slate-100 hover:bg-slate-200 py-3 px-4 rounded-md text-lg w-[300px]'>
                        <span className='text-2xl'><FcGoogle /></span>
                        <span className='font-medium ml-3'>Continue with Google</span>
                    </button>
                    <p className='text-center text-lg font-bold mt-3'>or</p>
                    <form onSubmit={handleLogIn}>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Email</label>
                            <input
                                className='border w-[300px] border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="email"
                                name="email"
                                id=""
                                placeholder='your Email address' />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Password</label>
                            <input
                                className='border w-[300px] border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="password"
                                name="password" 
                                id=""
                                placeholder='your Email address' />
                        </div>
                        <div>
                            <button type='submit' className='bg-slate-200 hover:bg-slate-300 py-3 px-4 rounded-md w-[300px] text-lg font-medium'>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;