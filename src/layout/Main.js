import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;