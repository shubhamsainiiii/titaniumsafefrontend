/* eslint-disable no-unused-vars */

import React, { useState } from "react";

import {
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "Do you provide installation service?",
            a: "Yes, we provide professional installation services for homes, offices, jewelry shops, and commercial spaces.",
        },

        {
            q: "Are your safes fire resistant?",
            a: "Yes, selected TitaniumSafe models come with advanced fire-resistant protection technology.",
        },

        {
            q: "Do you provide digital lock safes?",
            a: "Yes, we provide premium digital locking systems with password and fingerprint security.",
        },

        {
            q: "Do your safes come with warranty?",
            a: "Yes, all our premium safes come with official warranty support.",
        },
    ];

    // Toggle FAQ
    const toggleFAQ = (index) => {

        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }

    };

    return (
        <section className="py-24 bg-[#111827]">

            <div className="max-w-5xl mx-auto px-5">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                        Frequently Asked
                        <span className="text-[#D4AF37]">
                            {" "}Questions
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-5">
                        Everything you need to know about TitaniumSafe products.
                    </p>

                </div>

                {/* FAQ Items */}
                <div className="space-y-6">

                    {faqs.map((faq, index) => {

                        const isOpen = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                layout
                                className={`bg-[#0F172A] border rounded-3xl overflow-hidden transition-all duration-300 ${isOpen
                                        ? "border-[#D4AF37]"
                                        : "border-[#D4AF37]/10"
                                    }`}
                            >

                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between gap-5 text-left p-8"
                                >

                                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                                        {faq.q}
                                    </h3>

                                    <div className="text-[#D4AF37] text-lg flex-shrink-0">

                                        {isOpen
                                            ? <FaChevronUp />
                                            : <FaChevronDown />}

                                    </div>

                                </button>

                                {/* Answer */}
                                <AnimatePresence>

                                    {isOpen && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                height: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                            }}
                                            exit={{
                                                opacity: 0,
                                                height: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                        >

                                            <div className="px-8 pb-8">

                                                <p className="text-gray-400 leading-relaxed">
                                                    {faq.a}
                                                </p>

                                            </div>

                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default FAQSection;