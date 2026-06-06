/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ product }) => {

    const whatsappBuyNow = () => {
        const message = `I want to buy this product: ${product?.name}. Please share complete details.`;
        window.open(
            `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    const avg = product?.averageRating || 0;

    return (
        <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-lg hover:shadow-[#D4AF37]/10 hover:shadow-xl hover:-translate-y-1 max-w-[320px] mx-auto">
            {/* ── Image ── */}
            <div className="relative overflow-hidden h-80 bg-[#060D1A]">
                <img
                    src={product?.images?.[0]}
                    alt={product?.name}
                    className="w-full h-full object-cover p-3 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rmb-1 m-1 rounded-xl text-sm font-bold shadow-lg">
                    ₹{product?.price?.toLocaleString("en-IN")}
                </div>

                {/* Rating pill */}
                {avg > 0 && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/10 p-1 mb-1 ml-1 rounded-xl">
                        <FaStar className="text-[#D4AF37] text-xs" />
                        <span className="text-white text-xs font-semibold">{avg}</span>
                        {/* <span className="text-gray-400 text-xs">({product?.totalReviews})</span> */}
                    </div>
                )}
            </div>

            {/* ── Content ── */}
            <div className="p-4">

                {/* Name */}
                <h2 className="text-white font-bold text-base mb-1.5 truncate">
                    {product?.name}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {product?.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-2">
                    <Link
                        to={`/product/${product?._id}`}
                        className="flex-1 border border-[#D4AF37]/50 text-[#D4AF37] py-2.5 rounded-xl text-center text-sm font-semibold hover:bg-[#D4AF37] hover:text-[#0F172A] hover:border-[#D4AF37] transition-all duration-300"
                    >
                        View Details
                    </Link>

                    <button
                        onClick={whatsappBuyNow}
                        className="flex-1 bg-[#D4AF37] text-[#0F172A] py-2.5 rounded-xl text-sm font-bold hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <FaWhatsapp className="text-sm" />
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;