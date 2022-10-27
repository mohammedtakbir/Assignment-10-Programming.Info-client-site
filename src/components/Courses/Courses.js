import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../CourseCards/CourseCards';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='mt-10 container mx-auto'>
            <h2 className='text-3xl font-medium mb-10'>A broad selection of courses</h2>
            <div className='custom-grid'>
                <div>
                    <LeftSideNav courses={courses} />
                </div>
                <div className='grid grid-cols-2 gap-9'>
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