/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-[#f8f6f0]/95 backdrop-blur-sm flex items-center justify-center z-[9999]">

            {/* Subtle background glow */}
            <div className="absolute w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col items-center gap-5">

                {/* Spinning ring + logo */}
                <div className="relative w-20 h-20 flex items-center justify-center">

                    {/* Outer spin ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-[3px] border-[#D4AF37]/15 border-t-[#D4AF37]"
                    />

                    {/* Inner pulse ring */}
                    <motion.div
                        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        className="absolute inset-2 rounded-full border border-[#D4AF37]/30"
                    />

                    {/* Logo image center */}
                    <motion.img
                        src={logo}
                        alt="TitaniumSafe"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        className="w-11 h-11 rounded-full object-cover ring-2 ring-[#D4AF37]/30 shadow-md relative z-10"
                    />
                </div>

                {/* Brand name */}
                <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-center"
                >
                    <h2 className="text-[#0f1623] text-lg font-bold tracking-wide">
                        Titanium<span className="text-[#D4AF37]">Safe</span>
                    </h2>
                    <p className="text-[#9ca3af] text-xs tracking-widest uppercase mt-0.5">
                        Loading...
                    </p>
                </motion.div>

                {/* Animated dots */}
                <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] block"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Loader;