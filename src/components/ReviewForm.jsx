/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaStar, FaUser, FaArrowRight } from "react-icons/fa";
import api from "../services/api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ratingLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

const ReviewForm = ({ productId, onReviewSubmit }) => {
    const [loading, setLoading] = useState(false);
    const [rating, setRating]   = useState(0);
    const [hover, setHover]     = useState(0);
    const [formData, setFormData] = useState({ userName: "", review: "" });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) { toast.error("Please select a rating"); return; }
        try {
            setLoading(true);
            const { data } = await api.post("/reviews/create", {
                productId, userName: formData.userName, review: formData.review, rating,
            });
            toast.success(data.message);
            setFormData({ userName: "", review: "" });
            setRating(0);
            onReviewSubmit?.();
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Failed To Submit Review");
        } finally {
            setLoading(false);
        }
    };

    const activeRating = hover || rating;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Heading */}
            <div className="mb-7">
                <p className="text-[#B8941F] text-xs font-semibold tracking-widest uppercase mb-1">
                    Your Opinion Matters
                </p>
                <h2 className="text-2xl font-bold text-[#0f1623]">
                    Write a <span className="text-[#D4AF37]">Review</span>
                </h2>
                <p className="text-[#9ca3af] text-sm mt-1.5">
                    Share your experience about this product.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-1.5">
                        Your Name
                    </label>
                    <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8941F] text-xs" />
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="w-full bg-[#f8f6f0] border border-[#e8e2d6] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10 outline-none rounded-xl py-3.5 pl-10 pr-4 text-[#0f1623] text-sm placeholder:text-[#9ca3af] transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-1.5">
                        Rating
                    </label>
                    <div className="bg-[#f8f6f0] border border-[#e8e2d6] rounded-xl px-4 py-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <motion.button
                                    type="button"
                                    key={star}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    className="text-2xl transition-colors duration-150"
                                >
                                    <FaStar
                                        className={
                                            star <= activeRating
                                                ? "text-[#D4AF37]"
                                                : "text-[#d1d5db]"
                                        }
                                    />
                                </motion.button>
                            ))}
                        </div>

                        {/* Label */}
                        <motion.span
                            key={activeRating}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-sm font-semibold transition-colors ${
                                activeRating > 0 ? "text-[#B8941F]" : "text-[#c8c0b0]"
                            }`}
                        >
                            {activeRating > 0 ? ratingLabels[activeRating] : "Select rating"}
                        </motion.span>
                    </div>
                </div>

                {/* Review */}
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-1.5">
                        Your Review
                    </label>
                    <textarea
                        rows="4"
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                        placeholder="Write your review here..."
                        required
                        className="w-full bg-[#f8f6f0] border border-[#e8e2d6] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10 outline-none rounded-xl p-4 text-[#0f1623] text-sm placeholder:text-[#9ca3af] resize-none transition-all duration-200 leading-relaxed"
                    />
                </div>

                {/* Submit */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D4AF37] text-[#0f1623] py-4 rounded-xl font-bold text-sm tracking-wide cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-105 hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <span className="w-4 h-4 border-2 border-[#0f1623] border-t-transparent rounded-full animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            Submit Review
                            <FaArrowRight className="text-xs" />
                        </>
                    )}
                </motion.button>

            </form>
        </motion.div>
    );
};

export default ReviewForm;