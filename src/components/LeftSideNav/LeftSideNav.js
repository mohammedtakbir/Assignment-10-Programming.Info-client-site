import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = ({ courses }) => {

    return (
        <div>
            {
                courses.map(course => <p className='my-3 text-lg '>
                    <NavLink
                        to={`/course-details/${course.id}`}
                        className='font-medium hover:font-bold block'
                        key={course.id}>
                        {course.name}</NavLink>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;