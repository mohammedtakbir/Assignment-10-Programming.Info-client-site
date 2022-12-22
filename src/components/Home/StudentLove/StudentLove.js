import React from 'react';

const StudentLove = () => {
    return (
        <div className='container mx-auto sm:pt-24 sm:pb-12 pb-2 pt-12 text-center'>
            <div className='sm:max-w-[650px] mx-auto'>
                <div className='sm:mb-14 mb-8 md:mx-0 mx-4'>
                    <h2 className='sm:text-4xl text-3xl font-extrabold mb-4'>Why Students Love us</h2>
                    <p className='sm:text-lg'>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                </div>
                <div className='sm:mb-12 mb-8 md:mx-0 mx-4'>
                    <h2 className='sm:text-2xl text-xl font-extrabold mb-3'>"I come to Programming.Info for the curation and class quality. That's really worth the cost of membership to me."</h2>
                    <h4 className='font-medium sm:text-xl text-lg'>—Afif, Programming.info student</h4>
                </div>
                <div className='md:mx-0 mx-4'>
                    <h2 className='sm:text-2xl text-xl font-extrabold mb-3'>"I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on Programming.Info is to develop a skill. I feel that it's a safe space."</h2>
                    <h4 className='font-medium sm:text-xl text-lg'>—Asif, Programming.info student</h4>
                </div>
            </div>
        </div>
    );
};

export default StudentLove;