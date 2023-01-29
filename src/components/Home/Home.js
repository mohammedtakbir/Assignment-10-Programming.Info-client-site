import React from 'react';
import Banner from './Banner/Banner';
import Education from './Education/Education';
import GetCreative from './GetCreative/GetCreative';
import LearnCode from './LearnCode/LearnCode';
import StudentLove from './StudentLove/StudentLove';
import TrustedCompany from './TrustedCompany/TrustedCompany';

const Home = () => {
    return (
        <div>
            <Banner />
            <GetCreative />
            <LearnCode />
            <Education />
            <TrustedCompany />
            <StudentLove />
        </div>
    );
};

export default Home;