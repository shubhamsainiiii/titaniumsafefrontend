/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
    FaShieldAlt,
    FaLock,
    FaUserShield,
    FaAward,
    FaCheckCircle,
} from "react-icons/fa";
import about from "../assets/about.png";
import CTASection from "../components/CTASection";

const About = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="bg-[#f8f6f0] text-[#1a1a2e] min-h-screen pt-4">

            {/* ── Hero Section ── */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-4 py-2 rounded-full mb-6">
                            <FaShieldAlt className="text-[#B8941F]" />
                            <span className="text-[#B8941F] text-sm font-semibold tracking-wide">
                                About TitaniumSafe
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0f1623]">
                            Premium Security
                            <span className="text-[#D4AF37]"> Safes </span>
                            You Can Trust
                        </h1>

                        <p className="text-[#4a5568] mt-6 text-lg leading-relaxed">
                            TitaniumSafe is a trusted brand providing high-quality
                            security safes and vaults designed for homes,
                            offices, jewelry stores, and businesses.
                        </p>

                        <p className="text-[#718096] mt-4 leading-relaxed">
                            Our mission is to provide modern, durable, and highly
                            secure safes that protect your valuables with advanced
                            locking systems and premium build quality.
                        </p>

                        {/* Features */}
                        <div className="mt-10 space-y-4">
                            {[
                                "High Security Locking System",
                                "Fire Resistant & Durable Design",
                                "Modern Premium Finish",
                            ].map((feat) => (
                                <div key={feat} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                                        <FaCheckCircle className="text-[#B8941F] text-xs" />
                                    </div>
                                    <p className="text-[#2d3748] font-medium">{feat}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats row */}
                        <div className="mt-12 flex items-center gap-8">
                            {[
                                { value: "500+", label: "Happy Customers" },
                                { value: "10+", label: "Years Experience" },
                                { value: "50+", label: "Products" },
                            ].map(({ value, label }) => (
                                <div key={label}>
                                    <p className="text-3xl font-bold text-[#D4AF37]">{value}</p>
                                    <p className="text-[#718096] text-sm mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute w-[320px] h-90 bg-[#D4AF37]/20 blur-3xl rounded-full top-10 left-10 pointer-events-none" />

                        <div className="relative z-10">

                            {!loaded && (
                                <div className="absolute inset-0 rounded-3xl bg-gray-200 animate-pulse z-0" />
                            )}

                            <img
                                src={about}
                                alt="Titanium Safe"
                                loading="lazy"
                                onLoad={() => setLoaded(true)}
                                className={`w-full rounded-3xl shadow-2xl object-cover transition-all duration-1000 ${loaded
                                    ? "opacity-100 blur-0 scale-100"
                                    : "opacity-0 blur-xl scale-105"
                                    }`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="py-20 bg-white border-t border-b border-[#e8e2d6]">
                <div className="max-w-7xl mx-auto px-5 lg:px-10">

                    <div className="text-center mb-16">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#B8941F] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
                            Why Us
                        </span>
                        <h2 className="text-4xl font-bold text-[#0f1623]">
                            Why Choose{" "}
                            <span className="text-[#D4AF37]">TitaniumSafe</span>
                        </h2>
                        <p className="text-[#718096] mt-4 max-w-2xl mx-auto">
                            We provide top-level protection with premium quality,
                            modern technology, and trusted customer support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: FaLock,
                                title: "Advanced Security",
                                desc: "Premium locking systems with strong protection for valuables and confidential assets.",
                            },
                            {
                                icon: FaShieldAlt,
                                title: "Durable Build",
                                desc: "Heavy-duty metal body with long-lasting premium quality materials.",
                            },
                            {
                                icon: FaUserShield,
                                title: "Trusted Brand",
                                desc: "Hundreds of customers trust TitaniumSafe for securing their valuables.",
                            },
                            {
                                icon: FaAward,
                                title: "Premium Quality",
                                desc: "Elegant modern design with premium finishing and superior performance.",
                            },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-[#fdfbf7] border border-[#e8e2d6] hover:border-[#D4AF37]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-3xl p-8 text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors duration-300 flex items-center justify-center mx-auto mb-5">
                                    <Icon className="text-[#B8941F] text-2xl" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0f1623] mb-3">{title}</h3>
                                <p className="text-[#718096] text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Story ── */}
            <section className="py-20 bg-[#f8f6f0]">
                <div className="max-w-7xl mx-auto px-5 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#B8941F] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
                            Our Story
                        </span>
                        <h2 className="text-4xl font-bold text-[#0f1623] mb-6">
                            Built on{" "}
                            <span className="text-[#D4AF37]">Trust & Quality</span>
                        </h2>
                        <p className="text-[#4a5568] leading-relaxed text-lg">
                            Founded with a vision to make premium security accessible,
                            TitaniumSafe has grown into one of India's most trusted safe
                            manufacturers. Every product is crafted with precision,
                            tested rigorously, and designed to give you complete peace of mind.
                        </p>
                        <div className="mt-10 h-px bg-linear-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default About;