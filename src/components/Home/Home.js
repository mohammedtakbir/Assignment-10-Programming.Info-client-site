import React from 'react';
import Banner from './Banner/Banner';
import Education from './Education/Education';
import PeopleLove from './PeopleLove/PeopleLove';
import TrustedCompany from './TrustedCompany/TrustedCompany';

const Home = () => {
    return (
        <div>
            <Banner />
            <Education />
            <TrustedCompany />
            <PeopleLove />
        </div>
    );
};

export default Home;