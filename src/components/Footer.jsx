/* eslint-disable no-unused-vars */
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaShieldAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#0B1120] border-t border-[#D4AF37]/10 mt-20">

            {/* Top Footer */}
            <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

                    {/* Logo & About */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">

                            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                <FaShieldAlt className="text-[#0F172A] text-xl" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Titanium
                                    <span className="text-[#D4AF37]">Safe</span>
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    Premium Security Vaults
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-sm">
                            TitaniumSafe provides premium quality security safes
                            and vaults designed for homes, offices, jewelry shops,
                            and businesses with advanced protection technology.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-6">

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://wa.me/919999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
                            >
                                <FaWhatsapp />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
                                >
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/testimonials"
                                    className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
                                >
                                    Testimonials
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">
                            Our Products
                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
                                Home Safes
                            </li>

                            <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
                                Office Vaults
                            </li>

                            <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
                                Jewelry Safes
                            </li>

                            <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
                                Digital Lockers
                            </li>

                            <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
                                Fireproof Safes
                            </li>

                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">
                            Contact Info
                        </h3>

                        <div className="space-y-5">

                            <div className="flex gap-4">
                                <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Jaipur, Rajasthan, India
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <FaPhoneAlt className="text-[#D4AF37] mt-1" />

                                <p className="text-gray-400 text-sm">
                                    +91 9999999999
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <FaEnvelope className="text-[#D4AF37] mt-1" />

                                <p className="text-gray-400 text-sm">
                                    support@titaniumsafe.com
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-[#D4AF37]/10">
                <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-gray-500 text-sm text-center">
                        © 2026 TitaniumSafe. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm text-center">
                        Designed & Developed with ❤️
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;