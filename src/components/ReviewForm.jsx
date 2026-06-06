/* eslint-disable no-unused-vars */

import React, { useState } from "react";

import {
    FaStar,
    FaUser,
} from "react-icons/fa";
import api from "../services/api";
import toast from "react-hot-toast";

import { motion } from "framer-motion";

const ReviewForm = ({ productId,
    onReviewSubmit, }) => {
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(0);

    const [hover, setHover] = useState(0);

    const [formData, setFormData] = useState({
        userName: "",
        review: "",
    });

    // Handle Change
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    // Submit Review
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (rating === 0) {
            toast.error(
                "Please select a rating"
            );
            return;
        }

        try {

            setLoading(true);

            const { data } =
                await api.post(
                    "/reviews/create",
                    {
                        productId,
                        userName:
                            formData.userName,
                        review:
                            formData.review,
                        rating,
                    }
                );

            toast.success(
                data.message
            );

            setFormData({
                userName: "",
                review: "",
            });

            setRating(0);

            if (onReviewSubmit) {
                onReviewSubmit();
            }

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data
                    ?.message ||
                "Failed To Submit Review"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl"
        >

            {/* Heading */}
            <div className="mb-8">

                <h2 className="text-3xl font-bold text-white">
                    Write A
                    <span className="text-[#D4AF37]">
                        {" "}Review
                    </span>
                </h2>

                <p className="text-gray-400 mt-3">
                    Share your experience about this product.
                </p>

            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                {/* Name */}
                <div>

                    <label className="block text-sm text-gray-300 mb-3">
                        Your Name
                    </label>

                    <div className="relative">

                        <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="w-full bg-[#0F172A] border border-gray-700 focus:border-[#D4AF37] outline-none rounded-2xl py-4 pl-14 pr-5 text-white"
                        />

                    </div>

                </div>

                {/* Rating */}
                <div>

                    <label className="block text-sm text-gray-300 mb-3">
                        Rating
                    </label>

                    <div className="flex items-center gap-3">

                        {[...Array(5)].map((_, index) => {

                            const currentRating = index + 1;

                            return (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => setRating(currentRating)}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(0)}
                                    className="text-3xl transition-all duration-200"
                                >

                                    <FaStar
                                        className={
                                            currentRating <= (hover || rating)
                                                ? "text-[#D4AF37]"
                                                : "text-gray-600"
                                        }
                                    />

                                </button>
                            );
                        })}

                    </div>

                </div>

                {/* Review */}
                <div>

                    <label className="block text-sm text-gray-300 mb-3">
                        Your Review
                    </label>

                    <textarea
                        rows="5"
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                        placeholder="Write your review..."
                        required
                        className="w-full bg-[#0F172A] border border-gray-700 focus:border-[#D4AF37] outline-none rounded-2xl p-5 text-white resize-none"
                    ></textarea>

                </div>

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D4AF37] text-[#0F172A] py-4 rounded-2xl font-semibold text-lg cursor-pointer disabled:opacity-60"
                >
                    {loading
                        ? "Submitting..."
                        : "Submit Review"}
                </motion.button>

            </form>

        </motion.div>
    );
};

export default ReviewForm;