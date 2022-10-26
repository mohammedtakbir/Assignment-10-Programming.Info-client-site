import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-medium mb-5'>A broad selection of courses</h2>
            <div className='custom-grid'>
                <div>
                    <LeftSideNav courses={courses} />
                </div>
                <h2>Courses</h2>
            </div>
        </div>
    );
};

export default Courses;