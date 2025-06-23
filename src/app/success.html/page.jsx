"use client";

import { FaCheckCircle } from 'react-icons/fa';

const SuccessPayment = () => {
    return (
        <div className="flex justify-center items-center mt-12 md:mt-32">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg w-96">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
                <h2 className="text-2xl font-bold text-green-500 mt-6">Payment Successful!</h2>
                <p className="text-gray-600 mt-2">Your payment has been successfully processed.</p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none cursor-pointer"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

export default SuccessPayment;
