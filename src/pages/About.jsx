/* eslint-disable no-unused-vars */
import React from "react";
import {
    FaShieldAlt,
    FaLock,
    FaUserShield,
    FaAward,
    FaCheckCircle,
} from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[#0F172A] text-white min-h-screen pt-28">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>

                        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-full mb-6">
                            <FaShieldAlt className="text-[#D4AF37]" />

                            <span className="text-[#D4AF37] text-sm font-medium">
                                About TitaniumSafe
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Premium Security
                            <span className="text-[#D4AF37]"> Safes </span>
                            You Can Trust
                        </h1>

                        <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                            TitaniumSafe is a trusted brand providing high-quality
                            security safes and vaults designed for homes,
                            offices, jewelry stores, and businesses.
                        </p>

                        <p className="text-gray-400 mt-5 leading-relaxed">
                            Our mission is to provide modern, durable, and highly
                            secure safes that protect your valuables with advanced
                            locking systems and premium build quality.
                        </p>

                        {/* Features */}
                        <div className="mt-10 space-y-4">

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#D4AF37]" />

                                <p className="text-gray-300">
                                    High Security Locking System
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#D4AF37]" />

                                <p className="text-gray-300">
                                    Fire Resistant & Durable Design
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#D4AF37]" />

                                <p className="text-gray-300">
                                    Modern Premium Finish
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">

                        <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/20 blur-3xl rounded-full top-10 left-10"></div>

                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                            alt="About TitaniumSafe"
                            className="relative z-10 rounded-3xl shadow-2xl border border-[#D4AF37]/20"
                        />

                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#111827]">

                <div className="max-w-7xl mx-auto px-5 lg:px-10">

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <h2 className="text-4xl font-bold">
                            Why Choose
                            <span className="text-[#D4AF37]"> TitaniumSafe</span>
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            We provide top-level protection with premium quality,
                            modern technology, and trusted customer support.
                        </p>

                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1 */}
                        <div className="bg-[#0F172A] p-8 rounded-3xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 text-center">

                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
                                <FaLock className="text-[#D4AF37] text-2xl" />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Advanced Security
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Premium locking systems with strong protection for
                                valuables and confidential assets.
                            </p>

                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#0F172A] p-8 rounded-3xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 text-center">

                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
                                <FaShieldAlt className="text-[#D4AF37] text-2xl" />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Durable Build
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Heavy-duty metal body with long-lasting premium quality
                                materials.
                            </p>

                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#0F172A] p-8 rounded-3xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 text-center">

                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
                                <FaUserShield className="text-[#D4AF37] text-2xl" />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Trusted Brand
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Hundreds of customers trust TitaniumSafe for securing
                                their valuables.
                            </p>

                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#0F172A] p-8 rounded-3xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 text-center">

                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
                                <FaAward className="text-[#D4AF37] text-2xl" />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Premium Quality
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Elegant modern design with premium finishing and
                                superior performance.
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">

                <div className="max-w-5xl mx-auto px-5">

                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] rounded-3xl p-10 lg:p-16 text-center">

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                            Protect Your Valuables
                            With TitaniumSafe
                        </h2>

                        <p className="text-[#0F172A]/80 mt-5 text-lg max-w-2xl mx-auto">
                            Explore our premium collection of modern safes and
                            security vaults for home and business use.
                        </p>

                        <a
                            href="/products"
                            className="inline-block mt-8 bg-[#0F172A] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                        >
                            Explore Products
                        </a>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;