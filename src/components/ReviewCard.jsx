/* eslint-disable no-unused-vars */
import React from "react";
import { FaStar, FaRegStar, FaCheckCircle } from "react-icons/fa";

const getInitials = (name = "") =>
    name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);

const avatarColors = [
    { bg: "#FEF3C7", text: "#92400E" },
    { bg: "#DBEAFE", text: "#1E40AF" },
    { bg: "#D1FAE5", text: "#065F46" },
    { bg: "#EDE9FE", text: "#5B21B6" },
    { bg: "#FCE7F3", text: "#9D174D" },
];

const getColor = (name = "") =>
    avatarColors[(name.charCodeAt(0) || 0) % avatarColors.length];

const ReviewCard = ({ review }) => {
    const color = getColor(review?.userName);
    const rating = review?.rating || 5;

    return (
        <div className="h-full bg-white border border-[#e8e2d6] rounded-3xl p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/8 hover:-translate-y-1 transition-all duration-300">

            {/* Top row: avatar + name + verified */}
            <div className="flex items-center gap-3 mb-5">
                <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: color.bg, color: color.text }}
                >
                    {getInitials(review?.userName)}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-[#0f1623] font-semibold text-sm truncate">
                        {review?.userName}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                        <FaCheckCircle className="text-[#D4AF37] text-[10px]" />
                        <p className="text-[#9ca3af] text-xs">Verified Customer</p>
                    </div>
                </div>
                {/* Rating badge */}
                <span className="flex items-center gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#B8941F] text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0">
                    {rating}
                    <FaStar className="text-[10px]" />
                </span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                    s <= rating
                        ? <FaStar key={s} className="text-[#D4AF37] text-sm" />
                        : <FaRegStar key={s} className="text-[#d1d5db] text-sm" />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-[#4a5568] leading-relaxed text-sm line-clamp-4">
                {review?.review}
            </p>

            {/* Bottom divider */}
            <div className="mt-5 pt-4 border-t border-[#f0ebe2]">
                <p className="text-[#c8b98a] text-xs font-medium tracking-wide uppercase">
                    TitaniumSafe Customer
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;