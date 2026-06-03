/* eslint-disable no-unused-vars */

import React from "react";

import {
    FaHome,
    FaBuilding,
    FaGem,
} from "react-icons/fa";

import { motion } from "framer-motion";

const ProductCategories = () => {

    const categories = [
        {
            title: "Home Safes",

            icon: <FaHome />,

            desc: "Premium home security safes for valuables and important documents.",

            image:
                "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",
        },

        {
            title: "Office Vaults",

            icon: <FaBuilding />,

            desc: "Modern office vaults with advanced locking technology.",

            image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        },

        {
            title: "Jewelry Safes",

            icon: <FaGem />,

            desc: "Heavy-duty safes designed for jewelry businesses and luxury assets.",

            image:
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <section className="py-24 bg-[#0F172A] overflow-hidden">

            <div className="max-w-7xl mx-auto px-5 lg:px-10">

                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="text-center mb-20"
                >

                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">

                        Product
                        <span className="text-[#D4AF37]">
                            {" "}Categories
                        </span>

                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
                        Explore premium security solutions designed for homes,
                        offices, and commercial industries.
                    </p>

                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {categories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                            className="group relative h-[480px] rounded-[32px] overflow-hidden border border-[#D4AF37]/10"
                        >

                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/40 to-transparent"></div>

                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 z-10">

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-2xl mb-6 group-hover:scale-110 transition-all duration-500">

                                    {item.icon}

                                </div>

                                {/* Title */}
                                <h3 className="text-3xl font-bold text-white mb-4">

                                    {item.title}

                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed max-w-sm">

                                    {item.desc}

                                </p>

                                {/* Animated Line */}
                                <div className="w-16 h-1 bg-[#D4AF37] rounded-full mt-6 group-hover:w-28 transition-all duration-500"></div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ProductCategories;