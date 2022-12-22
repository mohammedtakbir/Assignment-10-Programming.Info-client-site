import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay, FaFileAlt, FaInfinity, FaMobileAlt, FaTrophy } from "react-icons/fa";
import { HiFolderDownload } from "react-icons/hi";
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';

const CheckOut = () => {

    const checkoutId = useParams();

    const { data: checkOut = [], isLoading } = useQuery({
        queryKey: ['course-details', checkoutId.id],
        queryFn: () => fetch(`https://programming-info.vercel.app/checkout/${checkoutId.id}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading />
    }

    const { name, image, price, course_includes } = checkOut;

    return (
        <div className="container mx-auto md:mt-16 mt-8">
            <div className='sm:w-[400px] w-[300px] mx-auto shadow-lg px-5 py-5 rounded-lg'>
                <img className='w-full sm:h-[300px] h-[250px] mx-auto border rounded-lg' src={image} alt="" />
                <h3 className='text-2xl font-medium mt-5 mb-2'>{name}</h3>
                <p className='md:text-4xl text-3xl font-bold'>${price}</p>
                <div className='mt-5'>
                    <button className='bg-slate-500 hover:bg-slate-600 block w-full py-2 text-white font-medium rounded-md mb-4'>Add to cart</button>
                    <button className='border border-gray-600 font-medium rounded-md w-full py-2 hover:bg-slate-400 hover:border-slate-400'>Buy now</button>
                </div>
                <p className='text-center mt-3 mb-4'><small>30-Day Money-Back Guarantee</small></p>
                <h3 className='font-bold md:text-xl'>This course includes:</h3>
                {course_includes === undefined ? <Loading /> :
                    <div className='mt-4'>
                        <p className='mb-1'>
                            <small><FaPlay className='inline mr-4' /></small>
                            <small className='text-gray-500'>{course_includes?.list1}</small>
                        </p>
                        <p className='mb-1'>
                            <small><FaFileAlt className='inline mr-4' /></small>
                            <small className='text-gray-500'>{course_includes?.list2}</small>
                        </p>
                        <p className='mb-1'>
                            <small><HiFolderDownload className='inline mr-4' /></small>
                            <small className='text-gray-500'>{course_includes?.list3}</small>
                        </p>
                        <p className='mb-1'>
                            <small><FaInfinity className='inline mr-4' /></small>
                            <small className='text-gray-500'>{course_includes?.list4}</small>
                        </p>
                        <p className='mb-1'>
                            <small><FaMobileAlt className='inline mr-4' /></small>
                            <small className='text-gray-500'>{course_includes?.list5}</small>
                        </p>
                        <p>
                            <small><FaTrophy className='inline mr-4' /></small>
                            <small className='text-gray-500'>{course_includes?.list6}</small>
                        </p>
                    </div>}
            </div>
        </div>
    );
};

export default CheckOut;