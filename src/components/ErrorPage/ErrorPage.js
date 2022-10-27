import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-screen bg-slate-50 text-white">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-black">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 text-black">But don't worry, you can find plenty of other things on our homepage.</p>
                        <Link
                            rel="noopener noreferrer"
                            to="/"
                            className="px-8 py-3 font-semibold rounded bg-slate-500 text-white">
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;