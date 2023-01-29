import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <>
            <div className='md:w-[800px] sm:w-[400px] w-[300px] mx-auto md:mt-10 mt-4'>
                <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                    <img className='w-full' src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt="" />
                    <div className=''>
                        <h3 className='text-3xl font-semibold mb-5'>Transform your life <br /> through education</h3>
                        <p className='mb-5'>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                        <Link to='/courses' className='bg-slate-500 hover:bg-slate-600 md:py-3 py-2 px-4 text-white rounded-md'>Find It Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;