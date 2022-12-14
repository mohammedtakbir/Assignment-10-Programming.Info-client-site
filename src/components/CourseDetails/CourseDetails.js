import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import { HiCheckCircle } from "react-icons/hi2";
import { HiFolderDownload } from "react-icons/hi";
import ReactToPdf from 'react-to-pdf'
import Loading from '../Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const CourseDetails = () => {
    const ref = React.createRef();
    const courseDetailsId = useParams();

    const { data: courseDetails = [], isLoading } = useQuery({
        queryKey: ['course-details', courseDetailsId.id],
        queryFn: () => fetch(`https://programming-info.vercel.app/course-details/${courseDetailsId.id}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading />
    }

    const { author, description, id, others_info, title, image, details, price } = courseDetails;

    return (
        <div className='max-w-screen-md md:mx-auto md:mt-10 mt-6 shadow-xl p-5 rounded-lg mx-3 relative'>
            <div className='sm:flex justify-between items-center gap-5 '>
                <img src={image} className='sm:w-[300px] w-full sm:h-[250px] border rounded-lg' alt="" />
                <div className='sm:mt-0 mt-3'>
                    <h2 className='text-2xl font-medium mb-4'>{title}</h2>
                    <p className='mb-2'>{description}</p>
                    <p>
                        <small className='text-gray-600'>{author}</small>
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
            <div ref={ref} className='mt-8'>
                <h2 className='font-bold text-[30px] mb-3'>What you'll learn</h2>
                <hr />
                {details === undefined ? <Loading /> :
                    <div className='mt-3'>
                        <li className={`list-none flex ${details?.list1 ? 'mb-4' : 'mb-0'}`}>
                            <span>{details?.list1 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                            <span>{details?.list1}</span>
                        </li>
                        <li className={`list-none flex ${details?.list2 ? 'mb-4' : 'mb-0'}`}>
                            <span>{details?.list2 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                            <span>{details?.list2}</span>
                        </li>
                        <li className={`list-none flex ${details?.list3 ? 'mb-4' : 'mb-0'}`}>
                            <span>{details?.list3 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                            <span>{details?.list3}</span>
                        </li>
                        <li className={`list-none flex ${details?.list4 ? 'mb-4' : 'mb-0'}`}>
                            <span>{details?.list4 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                            <span>{details?.list4}</span>
                        </li>
                        <li className={`list-none flex ${details?.list5 ? 'mb-4' : 'mb-0'}`}>
                            <span>{details?.list5 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                            <span>{details?.list5}</span>
                        </li>
                        <li className={`list-none flex ${details?.list6 ? 'mb-4' : 'mb-0'}`}>
                            <span>{details?.list6 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                            <span>{details?.list6}</span>
                        </li>
                        <li className={`list-none flex ${details?.list7 ? 'mb-4' : 'mb-0'}`}>
                            <span>{details?.list7 ? <HiCheckCircle className='inline text-2xl mr-3' /> : ''}</span>
                            <span>{details?.list7}</span>
                        </li>
                    </div>}
                <hr />
            </div>
            <div className='flex'>
                <div className='mt-5'>
                    <Link to={`/checkout/${id}`}>
                        <button className='bg-slate-500 duration-200 rounded-md hover:bg-slate-600 text-white py-2 px-3'>Get Premium Access</button>
                    </Link>
                </div>
                <div>
                    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                        {({ toPdf }) => (
                            <button onClick={toPdf}>
                                <div title='Download PDF' className='absolute md:top-[320px] right-[20px] cursor-pointer'>
                                    <HiFolderDownload className='w-8 h-7' />
                                </div>
                            </button>
                        )}
                    </ReactToPdf>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;