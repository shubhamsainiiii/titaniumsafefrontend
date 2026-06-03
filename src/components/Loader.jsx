/* eslint-disable no-unused-vars */

import React from "react";

import {
    motion,
} from "framer-motion";

import {
    FaShieldAlt,
} from "react-icons/fa";

const Loader = () => {

    return (
        <div className="fixed inset-0 bg-[#0F172A]/95 backdrop-blur-sm flex items-center justify-center z-[9999]">

            <div className="flex flex-col items-center">

                {/* Spinner */}
                <motion.div

                    animate={{
                        rotate: 360,
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "linear",
                    }}

                    className="w-16 h-16 border-[3px] border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full flex items-center justify-center"
                >

                    {/* Icon */}
                    <motion.div

                        animate={{
                            scale: [1, 1.08, 1],
                        }}

                        transition={{
                            repeat: Infinity,
                            duration: 0.7,
                        }}
                    >

                        <FaShieldAlt className="text-[#D4AF37] text-xl" />

                    </motion.div>

                </motion.div>

                {/* Logo */}
                <motion.h2

                    animate={{
                        opacity: [0.6, 1, 0.6],
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 1,
                    }}

                    className="text-white text-lg font-bold mt-5 tracking-wide"
                >

                    Titanium
                    <span className="text-[#D4AF37]">
                        Safe
                    </span>

                </motion.h2>

            </div>

        </div>
    );
};

export default Loader;