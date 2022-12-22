import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const { userSignUp, updateUserProfile, githubSignIn, GoogleSignIn, user } = useContext(AuthContext);
    const [error, serError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSignUp = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user_photo = form.user_photo.files[0];
        const formData = new FormData();
        formData.append('image', user_photo);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(photoData => {
                userSignUp(email, password)
                    .then(result => {
                        setLoading(false);
                        handleUpdateUserProfile(name, photoData.data.display_url);
                        form.reset();
                        toast.success('Sign up successfully!');
                        navigate('/');
                    })
                    .catch(error => {
                        setLoading(false);
                        serError(error.message);
                    })
            })

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error));
        }
    
    };

    //* SignIn with google
    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                navigate('/');
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
                navigate('/');
                toast.success('Log in successfully!');
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div>
            <h3 className='text-center md:mt-14 mt-7 font-bold mb-6'>Sign up and start learning</h3>
            <hr className='sm:max-w-[500px] max-w-[400px] mx-auto' />
            <div className='flex justify-center mt-7'>
                <div className='sm:max-w-[400px] max-w-[300px] shadow-xl p-5 pb-6 rounded-md border border-gray-100'>
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

                    <form onSubmit={handleSignUp}>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-sm font-medium mb-1'>Full Name</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-sm'
                                type="text"
                                name="name"
                                id=""
                                placeholder='Your Full Name' />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-sm font-medium mb-1'>User Photo</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-sm'
                                type="file"
                                name="user_photo"
                                id=""
                                placeholder='User Photo' />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-sm font-medium mb-1'>Email</label>
                            <input
                                className='border w-full border-[#8c99ab] py-2 px-3 rounded-md text-sm'
                                type="email"
                                name="email"
                                id=""
                                placeholder='your Email address'
                                required />
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
                                placeholder='your Email address'
                                required />
                        </div>
                        <p className='text-red-500 text-sm'>{error}</p>
                        <div className='mt-3'>
                            <button type='submit' className='bg-slate-200 hover:bg-slate-300 py-3 px-4 rounded-md w-full text-sm font-medium'>
                                {loading ? 'Loading...' : 'Sign Up'}
                            </button>
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
            <p className='text-center mt-4 text-sm'>
                <span>Already have an account? </span>
                <Link to='/login' className='underline text-blue-500'>Log In</Link>
            </p>
        </div>
    );
};

export default Signup;