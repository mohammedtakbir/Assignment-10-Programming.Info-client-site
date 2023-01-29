import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import AllCourses from './AllCourses';

const LearnCode = () => {

    const { data: courses = [], isLoading } = useQuery({
        queryKey: ['courses'],
        queryFn: () => fetch(`http://localhost:5002/courses`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading />
    }


    return (
        <section className='max-w-[1400px] mx-auto px-3 md:my-[80px] sm:my-[60px] my-[40px]'>
            <div className='mb-10'>
                <h2 className='md:text-3xl text-2xl font-semibold mb-2'>Learn in-demand professional skills</h2>
                <p>Choose from courses in English and many other languages</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-7 gap-x-5'>
                {
                    courses.map(course => <AllCourses key={course.id} course={course} />)
                }
            </div>
        </section>
    );
};

export default LearnCode;