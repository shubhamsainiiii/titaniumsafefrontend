/* eslint-disable no-unused-vars */
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

const Footer = () => {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact Us", path: "/contact" },
    ];

    const products = [
        "Home Safes",
        "Office Vaults",
        "Jewelry Safes",
        "Digital Lockers",
        "Fireproof Safes",
    ];

    const contactInfo = [
        { icon: FaMapMarkerAlt, text: "Jaipur, Rajasthan, India" },
        { icon: FaPhoneAlt, text: "+91 9999999999" },
        { icon: FaEnvelope, text: "support@titaniumsafe.com" },
    ];

    return (
        <footer className="bg-white border-t border-[#e8e2d6] relative overflow-hidden">

            {/* Top gold accent line */}
            <div className="h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />

            {/* Subtle background blobs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Main Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

                    {/* Col 1: Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-5 w-fit">
                            <img
                                src={logo}
                                alt="TitaniumSafe"
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D4AF37]/30 shadow-md"
                            />
                            <div>
                                <h2 className="text-xl font-bold text-[#0f1623] leading-tight">
                                    Titanium<span className="text-[#D4AF37]">Safe</span>
                                </h2>
                                <p className="text-[#9ca3af] text-xs tracking-wide">
                                    Premium Security Vaults
                                </p>
                            </div>
                        </Link>

                        <p className="text-[#6b7280] leading-relaxed text-sm mb-7">
                            TitaniumSafe provides premium security safes and vaults
                            designed for homes, offices, jewelry shops, and businesses
                            with advanced protection technology.
                        </p>

                        <div className="flex items-center gap-3">
                            {[
                                { icon: FaFacebookF, href: "#" },
                                { icon: FaInstagram, href: "#" },
                                { icon: FaWhatsapp, href: "https://wa.me/919999999999" },
                            ].map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-xl border border-[#e8e2d6] bg-[#f8f6f0] flex items-center justify-center text-[#B8941F] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] hover:scale-110 transition-all duration-300 text-sm shadow-sm"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h3 className="text-[#0f1623] font-bold text-xs mb-6 flex items-center gap-2 uppercase tracking-widest">
                            <span className="w-5 h-[2px] bg-[#D4AF37] rounded-full inline-block" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.path}
                                        className="text-[#6b7280] hover:text-[#B8941F] transition-colors duration-300 text-sm flex items-center gap-2.5 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#d1d5db] group-hover:bg-[#D4AF37] transition-colors duration-300 flex-shrink-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Products */}
                    <div>
                        <h3 className="text-[#0f1623] font-bold text-xs mb-6 flex items-center gap-2 uppercase tracking-widest">
                            <span className="w-5 h-[2px] bg-[#D4AF37] rounded-full inline-block" />
                            Our Products
                        </h3>
                        <ul className="space-y-3">
                            {products.map((product, i) => (
                                <li
                                    key={i}
                                    className="text-[#6b7280] hover:text-[#B8941F] transition-colors duration-300 text-sm flex items-center gap-2.5 cursor-pointer group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#d1d5db] group-hover:bg-[#D4AF37] transition-colors duration-300 flex-shrink-0" />
                                    {product}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div>
                        <h3 className="text-[#0f1623] font-bold text-xs mb-6 flex items-center gap-2 uppercase tracking-widest">
                            <span className="w-5 h-[2px] bg-[#D4AF37] rounded-full inline-block" />
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map(({ icon: Icon, text }, i) => (
                                <div key={i} className="flex items-start gap-3 group">
                                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                                        <Icon className="text-[#B8941F] text-xs" />
                                    </div>
                                    <p className="text-[#6b7280] text-sm leading-relaxed pt-1">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-[#e8e2d6] bg-[#f8f6f0]">
                <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-[#9ca3af] text-xs text-center">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-[#B8941F] font-medium">TitaniumSafe</span>
                        . All Rights Reserved.
                    </p>
                    <p className="text-[#9ca3af] text-xs text-center">
                        Designed & Developed with{" "}
                        <span className="text-[#D4AF37]">❤️</span>
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;