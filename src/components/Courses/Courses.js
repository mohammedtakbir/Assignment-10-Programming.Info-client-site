import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CourseCards from '../CourseCards/CourseCards';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Loading from '../Loading/Loading';
import './Courses.css'

const Courses = () => {

    const { data: courses = [], isLoading } = useQuery({
        queryKey: ['courses'],
        queryFn: () => fetch(`https://programming-info.vercel.app/courses`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-10 max-w-[1400px] mx-auto'>
            <h2 className='md:text-3xl text-2xl font-medium md:mb-10 mb-6 sm:mx-0 mx-3'>A broad selection of courses</h2>
            <div className='custom-grid relative'>
                <div>
                    <LeftSideNav courses={courses} />
                </div>
                <div className='grid xl:grid-cols-2 gap-9'>
                    {
                        courses.map(course => <CourseCards
                            key={course.id}
                            course={course}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;