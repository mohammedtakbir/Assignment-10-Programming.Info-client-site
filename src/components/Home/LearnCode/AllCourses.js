import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const AllCourses = ({ course }) => {

    const { image, title, author, others_info, price, id } = course;

    console.log(course)

    return (
        <div className='px-4 py-4 shadow-lg border rounded-md'>
            <Link to={`/course-details/${id}`}>
                <img src={image} alt="" className='w-full h-[170px]' />
                <h3 className='font-semibold text-base mt-4'>{title.length < 100 ? title : title.slice(0, 50) + '...'}</h3>
                <p className='mt-2'><small className='text-gray-500'>{author}</small></p>
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
                <p className='font-semibold'>${price}</p>
            </Link>
        </div>
    );
};

export default AllCourses;