import React from 'react';
import { Link } from 'react-router-dom';

const NotDownload = () => {
    return (
        <section className="bg-white dark:bg-gray-900 h-screen w-screen ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Welcome to Block
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    where technology, innovation, and talent meet.
                </p>
                <div className="text-center flex items-center justify-center">
                    <dotlottie-player
                        src="https://lottie.host/ba605629-aefe-4264-8c4c-2502a12a0570/0XE9CNgf4A.json"
                        background="transparent"
                        speed={1}
                        style={{ width: 300, height: 300 }}
                        loop=""
                        autoPlay=""
                    />
                </div>
                <Link
                    to="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        Connect to Metamask to proceed
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default NotDownload;
