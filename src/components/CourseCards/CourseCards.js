import React from 'react';
import { HiStar } from "react-icons/hi2";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CourseCards = ({ course }) => {
    const { author, description, id, others_info, title, image } = course;
    
    return (
        <Link to={`/course-details/${id}`}>
            <div className='flex justify-between items-center gap-5 shadow-xl p-5 rounded-lg duration-300 hover:shadow-2xl'>
                <img src={image} className='w-[200px] h-[200px] border rounded-lg' alt="" />
                <div>
                    <h2 className='text-xl font-medium mb-2'>{title}</h2>
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
                </div>
            </div>
        </Link>
    );
};

export default CourseCards;