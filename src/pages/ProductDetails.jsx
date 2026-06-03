/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
    FaStar,
    FaWhatsapp,
    FaShieldAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";


const ProductDetails = () => {

    const { id } = useParams();

    // Product Data
    const product = {
        _id: id,

        name: "Titanium Safe X1",

        price: 45000,

        available: true,

        description:
            "Titanium Safe X1 is a premium heavy-duty safe designed for homes, offices, jewelry stores, and businesses. It features advanced locking technology, strong steel construction, and premium protection for valuables.",

        images: [
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        ],
    };

    // Latest 4 Reviews
    const latestReviews = [
        {
            _id: 1,
            userName: "Rahul Sharma",
            rating: 5,
            review:
                "Excellent quality safe with premium finish and advanced security.",
        },

        {
            _id: 2,
            userName: "Amit Verma",
            rating: 5,
            review:
                "Strong build quality and modern design. Highly recommended.",
        },

        {
            _id: 3,
            userName: "Priya Jain",
            rating: 4,
            review:
                "Perfect safe for office and home use with premium locking system.",
        },

        {
            _id: 4,
            userName: "Sneha Kapoor",
            rating: 5,
            review:
                "Amazing premium safe. Totally worth the investment.",
        },
    ];

    const [selectedImage, setSelectedImage] = useState(
        product.images[0]
    );

    // Buy Now
    const handleBuyNow = () => {

        const message =
            `I want to buy this product: ${product.name}. ` +
            `Please share complete details about this product.`;

        window.open(
            `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    // Know More
    const handleKnowMore = () => {

        const message =
            `I want to know more about this product: ${product.name}. ` +
            `Please share complete details.`;

        window.open(
            `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="bg-[#0F172A] min-h-screen text-white pt-28 overflow-hidden">

            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                {/* Product Section */}
                <div className="grid lg:grid-cols-2 gap-14 items-start">

                    {/* Left Images */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Main Image */}
                        <motion.div
                            layout
                            className="bg-[#111827] rounded-3xl overflow-hidden border border-[#D4AF37]/10 shadow-2xl"
                        >

                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-[500px] object-cover"
                            />

                        </motion.div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-5 gap-4 mt-5">

                            {product.images.map((image, index) => (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    key={index}
                                    onClick={() => setSelectedImage(image)}
                                    className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === image
                                        ? "border-[#D4AF37]"
                                        : "border-transparent"
                                        }`}
                                >

                                    <img
                                        src={image}
                                        alt="product"
                                        className="w-full h-24 object-cover"
                                    />

                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Availability */}
                        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-2 rounded-full text-sm mb-5">

                            <FaShieldAlt />

                            {product.available
                                ? "Available"
                                : "Not Available"}

                        </div>

                        {/* Product Name */}
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-5">

                            <div className="flex items-center gap-[2px] text-[#D4AF37] text-sm">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <span className="text-gray-400 text-sm">
                                5.0 Rating
                            </span>

                        </div>

                        {/* Price */}
                        <div className="mt-8">

                            <h2 className="text-5xl font-bold text-[#D4AF37]">
                                ₹ {product.price}
                            </h2>

                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mt-8 text-lg">
                            {product.description}
                        </p>

                        {/* Features */}
                        <div className="mt-10 space-y-4">

                            {[
                                "Advanced Digital Locking System",
                                "Fire Resistant Protection",
                                "Heavy-Duty Steel Construction",
                                "Premium Modern Design",
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.2,
                                    }}
                                    className="flex items-center gap-3"
                                >

                                    <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>

                                    <p className="text-gray-300">
                                        {feature}
                                    </p>

                                </motion.div>
                            ))}

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 mt-12">
                            {/* Buy Now */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleBuyNow}
                                className="flex-1 bg-[#D4AF37] text-[#0F172A] py-4 rounded-full font-semibold flex items-center justify-center gap-3 cursor-pointer"
                            >
                                <FaWhatsapp />
                                Buy Now
                            </motion.button>
                            {/* Know More */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleKnowMore}
                                className="flex-1 border border-[#D4AF37] text-[#D4AF37] py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300 cursor-pointer"
                            >
                                Know More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Reviews Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-28"
                >

                    {/* Heading */}
                    <div className="text-center mb-14">

                        <h2 className="text-4xl font-bold">
                            Latest
                            <span className="text-[#D4AF37]"> Reviews</span>
                        </h2>

                        <p className="text-gray-400 mt-4">
                            See what customers are saying about this product.
                        </p>

                    </div>

                    {/* Slider */}
                    {/* Slider */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },

                            768: {
                                slidesPerView: 2,
                            },

                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >

                        {latestReviews.map((review) => (
                            <SwiperSlide key={review._id}>

                                <div className="h-full">
                                    <ReviewCard review={review} />
                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>
                    {/* Review Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-24"
                    >

                        <div className="max-w-3xl mx-auto">

                            <ReviewForm productId={product._id} />

                        </div>

                    </motion.div>

                </motion.div>

            </section>
        </div>
    );
};

export default ProductDetails;