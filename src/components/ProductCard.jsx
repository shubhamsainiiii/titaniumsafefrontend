/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaWhatsapp, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {

    const whatsappBuyNow = () => {
        const productLink = window.location.href;
        const msg = `I want to buy this product: ${product.name}.\n\nProduct Link: ${productLink}\n\nPlease share complete details.`;
        window.open(`https://wa.me/917727922769?text=${encodeURIComponent(msg)}`, "_blank");
    };

    const avg = product?.averageRating || 0;

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e2d6] hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/8 hover:-translate-y-1 transition-all duration-300 group">

            {/* Image */}
            <div className="relative overflow-hidden h-[200px] bg-[#f8f6f0]">
                <img
                    src={product?.images?.[0]}
                    alt={product?.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#0f1623] px-3 py-1 rounded-xl text-sm font-bold shadow-md">
                    ₹{product?.price?.toLocaleString("en-IN")}
                </div>

                {/* Rating pill */}
                {avg > 0 && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-[#e8e2d6] px-2.5 py-1 rounded-lg shadow-sm">
                        <FaStar className="text-[#D4AF37] text-xs" />
                        <span className="text-[#0f1623] text-xs font-bold">{avg}</span>
                        {product?.totalReviews > 0 && (
                            <span className="text-[#9ca3af] text-xs">({product.totalReviews})</span>
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">

                {/* Category tag */}
                {product?.category && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#B8941F] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2 py-0.5 rounded-md mb-2">
                        {product.category}
                    </span>
                )}

                {/* Name */}
                <h2 className="text-[#0f1623] font-bold text-sm mb-1.5 truncate">
                    {product?.name}
                </h2>

                {/* Description */}
                <p className="text-[#9ca3af] text-xs leading-relaxed mb-4 line-clamp-2">
                    {product?.description}
                </p>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((s) =>
                        s <= Math.round(avg)
                            ? <FaStar key={s} className="text-[#D4AF37] text-xs" />
                            : <FaRegStar key={s} className="text-[#d1d5db] text-xs" />
                    )}
                    {avg === 0 && (
                        <span className="text-[#c8c0b0] text-[10px] ml-1">No reviews</span>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <Link
                        to={`/product/${product?._id}`}
                        className="flex-1 border border-[#D4AF37]/40 text-[#B8941F] bg-[#D4AF37]/5 py-2.5 rounded-xl text-center text-xs font-semibold hover:bg-[#D4AF37] hover:text-[#0f1623] hover:border-[#D4AF37] transition-all duration-300"
                    >
                        View Details
                    </Link>
                    <button
                        onClick={whatsappBuyNow}
                        className="flex-1 bg-[#D4AF37] text-[#0f1623] py-2.5 rounded-xl text-xs font-bold hover:brightness-105 hover:shadow-md hover:shadow-[#D4AF37]/25 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
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