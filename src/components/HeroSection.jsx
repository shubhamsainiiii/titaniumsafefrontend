/* eslint-disable no-unused-vars */
import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="bg-[#0F172A] py-20 px-6 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                    <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-full mb-6">
                        <FaShieldAlt className="text-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-sm font-medium">
                            Trusted Security Solutions
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                        Premium
                        <span className="text-[#D4AF37]"> Titanium </span>
                        Safes & Vaults
                    </h1>

                    <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-xl">
                        Protect your valuables with high-quality premium safes.
                        Strong security, elegant design, and trusted durability for
                        homes, offices, and businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mt-10">
                        <a
                            href="/products"
                            className="bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-center"
                        >
                            Explore Products
                        </a>

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300 text-center"
                        >
                            Contact Now
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-14">
                        <div>
                            <h2 className="text-3xl font-bold text-[#D4AF37]">500+</h2>
                            <p className="text-gray-400 mt-1">Happy Clients</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-[#D4AF37]">10+</h2>
                            <p className="text-gray-400 mt-1">Years Experience</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-[#D4AF37]">100%</h2>
                            <p className="text-gray-400 mt-1">Secure Products</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                    <div className="absolute w-[350px] h-[350px] bg-[#D4AF37]/20 blur-3xl rounded-full"></div>

                    <img
                        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                        alt="Titanium Safe"
                        className="relative z-10 w-full max-w-lg rounded-3xl border border-[#D4AF37]/30 shadow-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;