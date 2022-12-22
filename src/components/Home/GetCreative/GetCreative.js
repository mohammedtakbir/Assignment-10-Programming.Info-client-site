import React from 'react';
import { HiCheckCircle } from "react-icons/hi";

const GetCreative = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-[1000px] mx-auto sm:pt-20 pt-12 sm:pb-20 pb-10 md:flex items-center gap-6'>
                <h2 className='sm:text-4xl text-2xl font-extrabold md:w-[40%] w-[80%] lg:ml-0 ml-7 md:mb-0 mb-5'>
                    Get Creative <br />
                    <span className='md:block'>With</span>
                    Programming.Info
                </h2>
                <div className='md:w-[60%] w-[95%] sm:text-2xl text-xl font-bold lg:mx-0 mx-2'>
                    <div className='mb-4 flex'>
                        <HiCheckCircle className='w-14 text-green-400' />
                        <h4 className='w-[95%]'>Learn creative Programming skills to achieve your personal and professional goals.</h4>
                    </div>
                    <div className='mb-4 flex'>
                        <HiCheckCircle className='w-14 text-green-400' />
                        <h4 className='w-[95%]'>Tune in and level up at your own pace.</h4>
                    </div>
                    <div className='mb-4 flex'>
                        <HiCheckCircle className='w-14 text-green-400' />
                        <h4 className='w-[95%]'>Go from dabbler to master in a matter of hours.</h4>
                    </div>
                    <div className='flex'>
                        <HiCheckCircle className='w-14 text-green-400' />
                        <h4 className='w-[95%]'>Connect with a global community of curious creatives.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetCreative;