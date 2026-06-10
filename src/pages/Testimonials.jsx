/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import api from "../services/api";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// ── Skeleton Card ──────────────────────────────────────────
const SkeletonCard = () => (
    <div className="bg-white border border-[#e8e2d6] rounded-3xl p-6 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#e8e2d6]" />
            <div className="flex-1">
                <div className="h-3 bg-[#e8e2d6] rounded-full w-1/2 mb-2" />
                <div className="h-2.5 bg-[#e8e2d6] rounded-full w-1/3" />
            </div>
        </div>
        <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-3.5 h-3.5 rounded bg-[#e8e2d6]" />
            ))}
        </div>
        <div className="space-y-2">
            <div className="h-2.5 bg-[#e8e2d6] rounded-full w-full" />
            <div className="h-2.5 bg-[#e8e2d6] rounded-full w-5/6" />
            <div className="h-2.5 bg-[#e8e2d6] rounded-full w-2/3" />
        </div>
    </div>
);

// ── Main ───────────────────────────────────────────────────
const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const getReviews = async () => {
        try {
            const { data } = await api.get("/reviews/latest");
            if (data.success) setReviews(data.reviews);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { getReviews(); }, []);

    // avg rating from reviews
    const avg = reviews.length
        ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
        : null;

    return (
        <div className="bg-[#f8f6f0] min-h-screen text-[#0f1623] pt-10">

            {/* ── Hero ── */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                <div className="text-center mb-14">

                    {/* Label */}
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#B8941F] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
                        Customer Reviews
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1623]">
                        What Our Customers
                        <span className="text-[#D4AF37]"> Say</span>
                    </h1>

                    <p className="text-[#718096] mt-4 text-base max-w-2xl mx-auto leading-relaxed">
                        Trusted by hundreds of customers for premium security,
                        durability and modern safe solutions.
                    </p>

                    {/* Rating summary */}
                    {!loading && avg && (
                        <div className="inline-flex items-center gap-3 mt-6 bg-white border border-[#e8e2d6] rounded-2xl px-5 py-3 shadow-sm">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <FaStar
                                        key={s}
                                        className={`text-sm ${s <= Math.round(avg) ? "text-[#D4AF37]" : "text-[#d1d5db]"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-[#0f1623] font-bold">{avg}</span>
                            <span className="text-[#9ca3af] text-sm">· {reviews.length} reviews</span>
                        </div>
                    )}
                </div>

                {/* ── Loading Skeletons ── */}
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
                    </div>

                ) : reviews.length > 0 ? (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review) => (
                            <ReviewCard key={review._id} review={review} />
                        ))}
                    </div>

                ) : (

                    <div className="text-center py-20 bg-white border border-[#e8e2d6] rounded-3xl">
                        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                            <FaStar className="text-[#D4AF37] text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0f1623]">No Reviews Yet</h3>
                        <p className="text-[#9ca3af] mt-2 text-sm">Customer reviews will appear here.</p>
                    </div>

                )}
            </section>

            {/* ── CTA ── */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-5">
                    <div className="relative overflow-hidden bg-white border border-[#e8e2d6] rounded-3xl p-10 lg:p-16 text-center shadow-xl shadow-[#D4AF37]/5">

                        {/* Decorations */}
                        <div className="absolute top-0 left-0 w-56 h-56 bg-[#D4AF37]/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D4AF37]/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 rounded-t-3xl" />

                        <h2 className="relative z-10 text-3xl lg:text-4xl font-bold text-[#0f1623] leading-tight">
                            Secure Your Valuables
                            <span className="block text-[#D4AF37] mt-1">With TitaniumSafe</span>
                        </h2>

                        <p className="relative z-10 text-[#718096] mt-4 text-base max-w-2xl mx-auto">
                            Discover premium safes designed for homes,
                            offices, jewelry shops and businesses.
                        </p>

                        <div className="relative z-10 mt-8">
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0f1623] px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:brightness-105 hover:shadow-lg hover:shadow-[#D4AF37]/25 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Explore Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonials;