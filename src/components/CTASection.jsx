/* eslint-disable no-unused-vars */
import React from "react";
import { FaShieldAlt, FaArrowRight } from "react-icons/fa";

const CTASection = () => {
    return (
        <section className="py-20 bg-[#f8f6f0]">
            <div className="max-w-5xl mx-auto px-5">

                <div className="relative overflow-hidden bg-white border border-[#e8e2d6] rounded-3xl p-10 lg:p-16 text-center shadow-xl shadow-[#D4AF37]/5">

                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 rounded-t-3xl" />

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                        <FaShieldAlt className="text-[#B8941F] text-2xl" />
                    </div>

                    {/* Heading */}
                    <h2 className="relative z-10 text-4xl lg:text-5xl font-bold text-[#0f1623] leading-tight">
                        Protect Your Valuables
                        <span className="block text-[#D4AF37] mt-1">With TitaniumSafe</span>
                    </h2>

                    {/* Subtext */}
                    <p className="relative z-10 text-[#718096] mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore our premium collection of modern safes and
                        security vaults for home and business use.
                    </p>

                    {/* Divider */}
                    <div className="relative z-10 mt-8 mb-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent max-w-xs mx-auto" />

                    {/* CTA Button */}
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/products"
                            className="inline-flex items-center gap-2.5 bg-[#D4AF37] text-[#0f1623] px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:brightness-105 hover:shadow-lg hover:shadow-[#D4AF37]/25 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Explore Products
                            <FaArrowRight className="text-xs" />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 border border-[#D4AF37]/40 text-[#B8941F] bg-[#D4AF37]/5 px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;