/* eslint-disable no-unused-vars */

import React from "react";

import {
    FaHome,
    FaBuilding,
    FaGem,
    FaUniversity,
    FaHotel,
    FaHospital,
} from "react-icons/fa";

import { motion } from "framer-motion";

const IndustriesSection = () => {

    const industries = [
        {
            title: "Homes",
            icon: <FaHome />,
            desc: "Premium home security safes for valuables and documents.",
        },

        {
            title: "Offices",
            icon: <FaBuilding />,
            desc: "Advanced office vaults with modern protection systems.",
        },

        {
            title: "Jewelry Shops",
            icon: <FaGem />,
            desc: "Heavy-duty safes designed for jewelry businesses.",
        },

        {
            title: "Banks",
            icon: <FaUniversity />,
            desc: "High-security vault solutions for banking sectors.",
        },

        {
            title: "Hotels",
            icon: <FaHotel />,
            desc: "Secure guest lockers and hotel protection systems.",
        },

        {
            title: "Hospitals",
            icon: <FaHospital />,
            desc: "Protect confidential records and valuable equipment.",
        },
    ];

    return (
        <section className="py-24 bg-[#0F172A] overflow-hidden">

            <div className="max-w-7xl mx-auto px-5 lg:px-10">

                {/* Heading */}
                <div className="text-center mb-20">

                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">

                        Industries We
                        <span className="text-[#D4AF37]">
                            {" "}Serve
                        </span>

                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
                        Trusted security solutions for homes, businesses,
                        and commercial industries.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                            className="group relative bg-[#111827] border border-[#D4AF37]/10 rounded-3xl p-8 overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-500"
                        >

                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* Icon */}
                            <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-3xl mb-8 group-hover:scale-110 transition-all duration-500">

                                {item.icon}

                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-2xl font-bold text-white mb-4">

                                {item.title}

                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-400 leading-relaxed">

                                {item.desc}

                            </p>

                            {/* Bottom Line */}
                            <div className="relative z-10 w-14 h-1 bg-[#D4AF37] rounded-full mt-8 group-hover:w-24 transition-all duration-500"></div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default IndustriesSection;