import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOut = useLoaderData();
    const { name, id, image, price } = checkOut
    return (
        <div className="container mx-auto mt-20">
            <div className='max-w-[400px] mx-auto shadow-lg px-5 py-5 rounded-lg'>
                <img className='w-full h-[300px] mx-auto border rounded-lg' src={image} alt="" />
                <h3 className='text-xl font-medium mt-5 mb-2'>{name}</h3>
                <p className='text-3xl font-semibold'>${price}</p>
                <div className='mt-5'>
                    <button className='bg-slate-500 hover:bg-slate-600 block w-full py-3 text-white text-lg font-medium rounded-md mb-4'>Add to cart</button>
                    <button className='border border-gray-600 text-lg font-medium rounded-md w-full py-3 hover:bg-slate-400 hover:border-slate-400'>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;