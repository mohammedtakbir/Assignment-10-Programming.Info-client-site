import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const { userSignUp, updateUserProfile } = useContext(AuthContext);
    const [error, serError] = useState('');
    const navigate = useNavigate();


    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        userSignUp(email, password)
            .then(result => {
                handleUpdateUserProfile(name, photoURL);
                form.reset();
                toast.success('Sign up successfully!');
                navigate('/');
                console.log(result.user)
            })
            .catch(error => {
                serError(error.message)
                console.error(error)
            })

    };
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h3 className='text-center md:mt-14 mt-7 font-bold mb-6'>Sign up and start learning</h3>
            <hr className='sm:w-[500px] w-[400px] mx-auto' />
            <div className='flex justify-center mt-7'>
                <div className='sm:w-[400px] w-[300px] shadow-xl p-5 pb-6 rounded-md'>
                    <form onSubmit={handleSignUp}>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Full Name</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="text"
                                name="name"
                                id=""
                                placeholder='Your Full Name' />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>PhotoURL</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="text"
                                name="photoURL"
                                id=""
                                placeholder='your photoURL' />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Email</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="email"
                                name="email"
                                id=""
                                placeholder='your Email address'
                                required />
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
                                placeholder='your Email address'
                                required />
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className='mt-3'>
                            <button type='submit' className='bg-slate-200 hover:bg-slate-300 py-3 px-4 rounded-md w-full text-lg font-medium'>Sign Up</button>
                        </div>
                    </form>
                    <p className='mt-4'>
                        <small>By signing up, you agree to our
                            <Link className='text-blue-500 underline ml-1'>Terms of Use</Link> and
                            <Link className='text-blue-500 underline ml-1'>Privacy Policy</Link>.
                        </small>
                    </p>
                </div>
            </div>
            <hr className='max-w-[500px] mx-auto mb-5 mt-8' />
            <p className='text-center mt-4'>
                <span>Already have an account? </span>
                <Link to='/login' className='underline text-blue-500'>Log In</Link>
            </p>
        </div>
    );
};

export default Signup;