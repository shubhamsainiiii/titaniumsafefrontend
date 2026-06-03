/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-5">

            <div className="text-center max-w-2xl">

                {/* Icon */}
                <div className="w-28 h-28 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-8">

                    <FaShieldAlt className="text-[#D4AF37] text-5xl" />

                </div>

                {/* 404 */}
                <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-[#D4AF37] leading-none">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-6">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-5 text-lg leading-relaxed">
                    Oops! The page you are looking for does not exist
                    or may have been moved.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

                    {/* Home */}
                    <Link
                        to="/"
                        className="bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                    >
                        Back To Home
                    </Link>

                    {/* Products */}
                    <Link
                        to="/products"
                        className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
                    >
                        Explore Products
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default NotFound;