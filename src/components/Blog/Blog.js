import React from 'react';

const Blog = () => {
    return (
        <div className='md:mt-10 mt-2 max-w-screen-lg md:mx-auto shadow-xl md:p-7 p-3 mx-3 rounded-md'>
            <h2 className='text-center mb-7 md:text-4xl text-3xl font-medium'>Interview Questions & Answers</h2>
            <div>
                <h2 className='font-medium md:text-2xl text-xl mb-3'>What is CORS?</h2>
                <p className='mb-3'><strong>1. </strong>
                    <strong>Cross-Origin Resource Sharing (CORS)</strong> is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                <p className="mb-3"><strong>2. </strong>
                    It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the <strong>Same-Origin Policy (SOP)</strong>.</p>
                <p><strong>3. </strong>
                    <strong>CORS</strong> also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='mt-7'>
                <h2 className='font-medium md:text-2xl text-xl mb-3'>Why are you using firebase?</h2>
                <p className='mb-3'><strong>1. </strong>
                    Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.</p>
                <p className='mb-3'><strong>2. </strong>
                    Firebase helps you <strong>develop high-quality apps, grow your user base, and earn more money</strong>. Each feature works independently, and they work even better together.</p>
                <p className="mb-3"><strong>3. </strong>
                    Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
            </div>
            <div className='mt-7'>
                <h2 className='font-medium md:text-2xl text-xl mb-3'>What other options do you have to implement authentication?</h2>
                <p className='mb-3 font-medium text-lg'>Top alternatives to Firebase Authentication</p>
                <span className='mr-4 font-medium'>i. Auth0</span>
                <span className='mr-4 font-medium'>ii. Passport</span>
                <span className='mr-4 font-medium'>iii. Keycloak</span>
                <span className='mr-4 font-medium'>iv. Okta</span>
                <span className='mr-4 font-medium'>v. Amazon Cognito</span>
                <span className='mr-4 font-medium'>vi. MongoDB</span>
                <span className='mr-4 font-medium'>vii. JSON Web Token</span>
            </div>
            <div className='mt-7'>
                <h2 className='font-medium md:text-2xl text-xl mb-3'>How does the private route work?</h2>
                <p className='mb-3'><strong>1. </strong>
                    The private route component is <strong>used to protect selected pages in a React app from unauthenticated users</strong>.</p>
                <p className='mb-3'><strong>2. </strong>
                    The private route component is similar to the public route, the only change is that <strong>redirect URL and authenticate condition</strong>. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='mt-7'>
                <h2 className='font-medium md:text-2xl text-xl mb-3'> What is Node? How does Node work?</h2>
                <p className='mb-3'><strong>1. </strong>
                    Node. js is <strong>a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications</strong>.
                </p>
                <p className='mb-3'><strong>2. </strong>
                    It is a used as backend service where javascript works on the server-side of the application. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.
                </p>
                <p>
                    <strong>Working of Node.js: </strong>
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                </p>
            </div>
        </div>
    );
};

export default Blog;