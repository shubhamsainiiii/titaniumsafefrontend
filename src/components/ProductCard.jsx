/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {

    const whatsappBuyNow = () => {
        const message = `I want to buy this product: ${product?.name}. Please share complete details.`;

        window.open(
            `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="bg-[#111827] rounded-3xl overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-xl">

            {/* Product Image */}
            <div className="overflow-hidden relative">
                <img
                    src={product?.images?.[0]}
                    alt={product?.name}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition-all duration-500"
                />

                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rounded-full text-sm font-semibold">
                    ₹ {product?.price}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">

                {/* Product Name */}
                <h2 className="text-2xl font-bold text-white mb-3">
                    {product?.name}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {product?.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <span className="text-gray-400 text-sm">
                        (5.0 Reviews)
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">

                    {/* Details */}
                    <Link
                        to={`/product/${product?._id}`}
                        className="flex-1 border border-[#D4AF37] text-[#D4AF37] py-3 rounded-full text-center font-semibold hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
                    >
                        View Details
                    </Link>

                    {/* Buy Now */}
                    <button
                        onClick={whatsappBuyNow}
                        className="flex-1 bg-[#D4AF37] text-[#0F172A] py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                    >
                        Buy Now
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;