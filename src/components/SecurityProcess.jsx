/* eslint-disable no-unused-vars */

import React from "react";

import {
    FaShieldAlt,
    FaUserTie,
    FaTools,
    FaLock,
} from "react-icons/fa";

import { motion } from "framer-motion";

const SecurityProcess = () => {

    const steps = [
        {
            id: "01",
            title: "Choose Your Safe",
            desc: "Explore premium safes designed for homes, offices, and businesses.",
            icon: <FaShieldAlt />,
        },

        {
            id: "02",
            title: "Expert Consultation",
            desc: "Get personalized guidance from our security experts.",
            icon: <FaUserTie />,
        },

        {
            id: "03",
            title: "Professional Installation",
            desc: "Safe and secure installation by trained professionals.",
            icon: <FaTools />,
        },

        {
            id: "04",
            title: "Lifetime Protection",
            desc: "Advanced security systems with long-term reliability.",
            icon: <FaLock />,
        },
    ];

    return (
        <section className="py-24 bg-[#111827] overflow-hidden">

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

                        Our Security
                        <span className="text-[#D4AF37]">
                            {" "}Process
                        </span>

                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
                        From consultation to installation, we ensure complete
                        protection for your valuables.
                    </p>

                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                    {steps.map((step, index) => (
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
                            className="group relative bg-[#0F172A] border border-[#D4AF37]/10 rounded-3xl p-8 overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-500"
                        >

                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* Step Number */}
                            <div className="absolute top-6 right-6 text-5xl font-bold text-white/5">

                                {step.id}

                            </div>

                            {/* Icon */}
                            <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-3xl mb-8 group-hover:scale-110 transition-all duration-500">

                                {step.icon}

                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-2xl font-bold text-white mb-4">

                                {step.title}

                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-400 leading-relaxed">

                                {step.desc}

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

export default SecurityProcess;