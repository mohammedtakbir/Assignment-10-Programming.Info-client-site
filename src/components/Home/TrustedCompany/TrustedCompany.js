import React from 'react';

const TrustedCompany = () => {
    return (
        <>
            <div className='py-12 bg-slate-100 mt-12 text-center'>
                <div className='container mx-auto'>
                    <h3 className='text-3xl mb-2 font-semibold'>Trusted by the best</h3>
                    <p className='mb-7 font-medium'>Leading companies use the same courses to help employees keep their skills fresh.</p>
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
        </>
    );
};

export default TrustedCompany;