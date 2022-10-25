import React from 'react';

const Signup = () => {



    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        
    }





    return (
        <div>
            <h3 className='text-center mt-14 font-bold mb-6'>Sign up and start learning</h3>
            <hr className='w-[400px] mx-auto' />
            <div className='flex justify-center mt-7'>
                <div>
                    <form onSubmit={handleSignUp}>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Full Name</label>
                            <input
                                className='border w-[300px] border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="text"
                                name="name"
                                id=""
                                placeholder='Your Full Name' />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>PhotoURL</label>
                            <input
                                className='border w-[300px] border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="text"
                                name="photoURL"
                                id=""
                                placeholder='your photoURL' />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Email</label>
                            <input
                                className='border w-[300px] border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="email"
                                name="email"
                                id=""
                                placeholder='your Email address' />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor=""
                                className='block text-lg font-medium mb-1'>Password</label>
                            <input
                                className='border w-[300px] border-[#8c99ab] py-2 px-3 rounded-md text-lg'
                                type="password"
                                name="password"
                                id=""
                                placeholder='your Email address' />
                        </div>
                        <div>
                            <button type='submit' className='bg-slate-200 hover:bg-slate-300 py-3 px-4 rounded-md w-[300px] text-lg font-medium'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;