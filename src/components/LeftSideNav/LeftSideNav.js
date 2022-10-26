import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = ({ courses }) => {

    return (
        <div className='shadow-xl p-4 pb-1 rounded-md'>
            {
                courses.map(course => <p key={course.id} className='mb-5 text-xl '>
                    <NavLink
                        to={`/course-details/${course.id}`}
                        className='font-medium hover:font-bold block border-b border-b-gray-300'
                        key={course.id}>
                        {course.name}</NavLink>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;