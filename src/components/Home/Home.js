import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Unlock the power of your people
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                                    Programming.info Business is trusted by 5K+ companies around the world.
                                    <Link className='text-blue-500 underline'> Find out what we can do for yours.</Link>
                                </p>
                                <Link
                                    to="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 underline text-blue-400 text-xl"
                                >
                                    Learn more
                                </Link>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Sign up for updates
                                    </h3>
                                    <form>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="firstName"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                First name
                                            </label>
                                            <input
                                                placeholder="Mohammed"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                name="firstName"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="lastName"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                placeholder="Takbir"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                name="lastName"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                E-mail
                                            </label>
                                            <input
                                                placeholder="mohammedtakbir@gmail.com"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-lg bg-slate-500 text-white hover:bg-slate-600"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-600 sm:text-sm">
                                            We respect your privacy. Unsubscribe at any time.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-[800px] sm:w-[400px] w-[300px] mx-auto md:mt-10 mt-4'>
                <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                    <img className='w-full' src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt="" />
                    <div className=''>
                        <h3 className='text-3xl font-semibold mb-5'>Transform your life <br /> through education</h3>
                        <p className='mb-5'>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                        <button className='bg-slate-500 hover:bg-slate-600 md:py-3 py-2 px-4 text-white rounded-md'>Find It Now</button>
                    </div>
                </div>
            </div>
            <div className='py-8 bg-slate-200 mt-12 text-center'>
                <div className='container mx-auto'>
                    <h3 className='text-2xl mb-3 font-semibold'>Trusted by the best</h3>
                    <p className='mb-6 font-medium'>Leading companies use the same courses to help employees keep their skills fresh.</p>
                    <ul className='flex flex-wrap md:justify-between lg:mx-16'>
                        <li className='md:mx-0 mx-3 md:mb-0 mb-3'>
                            <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg' alt="" />
                        </li>
                        <li className='md:mx-0 mx-3 md:mb-0 mb-3'>
                            <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg' alt="" />
                        </li>
                        <li className='md:mx-0 mx-3 md:mb-0 mb-3'>
                            <img src='https://s.udemycdn.com/partner-logos/v4/box-dark.svg' alt="" />
                        </li>
                        <li className='md:mx-0 mx-3 md:mb-0 mb-3'>
                            <img src='https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg' alt="" />
                        </li>
                        <li className='md:mx-0 mx-3 md:mb-0 mb-3'>
                            <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg' alt="" />
                        </li>
                        <li className='md:mx-0 mx-3 md:mb-0 mb-3'>
                            <img src='https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg' alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;