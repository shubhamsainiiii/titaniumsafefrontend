/* eslint-disable no-unused-vars */
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {

    return (
        <div className="h-full bg-[#111827] border border-[#D4AF37]/10 rounded-3xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl">

            {/* Quote Icon */}
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                <FaQuoteLeft className="text-[#D4AF37] text-xl" />
            </div>

            {/* Review Text */}
            <p className="text-gray-300 leading-relaxed text-[15px] mb-6">
                {review?.review}
            </p>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-5">
                {[...Array(review?.rating || 5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className="text-[#D4AF37] text-sm"
                    />
                ))}
            </div>

            {/* User Info */}
            <div className="border-t border-gray-700 pt-4">
                <h3 className="text-white font-semibold text-lg">
                    {review?.userName}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                    Verified Customer
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;