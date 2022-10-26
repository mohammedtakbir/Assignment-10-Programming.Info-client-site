import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi2';
import { Link, useLoaderData } from 'react-router-dom';
import { HiCheckCircle } from "react-icons/hi2";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    
    const { author, description, id, others_info, title, image, details, price } = courseDetails;
    const { list1, list2, list3, list4, list5, list6, list7 } = details;
    
    return (
        <div className='max-w-screen-md mx-auto mt-12 shadow-xl p-5 rounded-lg'>
            <div className='flex justify-between items-center gap-5 '>
                <img src={image} className='w-[300px] h-[250px] border rounded-lg' alt="" />
                <div>
                    <h2 className='text-2xl font-medium mb-2'>{title}</h2>
                    <p className='mb-2'>{description}</p>
                    <p>
                        <small>{author}</small>
                    </p>
                    <p>
                        <small className='mr-1'>{others_info?.rating?.number}</small>
                        <small>
                            <HiStar className='inline text-yellow-400' />
                            <HiStar className='inline text-yellow-400' />
                            <HiStar className='inline text-yellow-400' />
                            <HiStar className='inline text-yellow-400' />
                            <FaStarHalfAlt className='inline text-yellow-400' />
                        </small>
                        <small className='ml-1 text-gray-500'>({others_info?.students})</small>
                    </p>
                    <p className='font-medium mt-1'>${price}</p>
                </div>
            </div>
            <div className='mt-8'>
                <h2 className='font-bold text-[30px] mb-3'>What you'll learn</h2>
                <hr />
                <div className='mt-3'>
                    <li className={`list-none flex ${list1 ? 'mb-4' : 'mb-0' }`}>
                        <span>{list1 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                        <span>{list1}</span>
                    </li>
                    <li className={`list-none flex ${list2 ? 'mb-4' : 'mb-0' }`}>
                        <span>{list2 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                        <span>{list2}</span>
                    </li>
                    <li className={`list-none flex ${list3 ? 'mb-4' : 'mb-0' }`}>
                        <span>{list3 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                        <span>{list3}</span>
                    </li>
                    <li className={`list-none flex ${list4 ? 'mb-4' : 'mb-0' }`}>
                        <span>{list4 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                        <span>{list4}</span>
                    </li>
                    <li className={`list-none flex ${list5 ? 'mb-4' : 'mb-0' }`}>
                        <span>{list5 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                        <span>{list5}</span>
                    </li>
                    <li className={`list-none flex ${list6 ? 'mb-4' : 'mb-0' }`}>
                        <span>{list6 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                        <span>{list6}</span>
                    </li>
                    <li className={`list-none flex ${list7 ? 'mb-4' : 'mb-0' }`}>
                        <span>{list7 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                        <span>{list7}</span>
                    </li>
                </div>
                <hr />
            </div>
            <div className='mt-5'>
                <Link to={`/checkout/${id}`}>
                    <button className='bg-slate-500 duration-200 rounded-md hover:bg-slate-600 text-white py-3 px-4'>Get Premium Access</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;