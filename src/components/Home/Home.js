import React from 'react';
import Banner from './Banner/Banner';
import Education from './Education/Education';
import StudentLove from './StudentLove/StudentLove';
import TrustedCompany from './TrustedCompany/TrustedCompany';

const Home = () => {
    return (
        <div>
            <Banner />
            <Education />
            <TrustedCompany />
            <StudentLove />
        </div>
    );
};

export default Home;