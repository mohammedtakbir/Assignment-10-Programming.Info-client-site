import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../CourseCards/CourseCards';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='mt-10 container mx-auto'>
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