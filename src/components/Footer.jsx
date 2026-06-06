// /* eslint-disable no-unused-vars */
// import React from "react";
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaWhatsapp,
//     FaMapMarkerAlt,
//     FaPhoneAlt,
//     FaEnvelope,
//     FaShieldAlt,
// } from "react-icons/fa";

// import { Link } from "react-router-dom";

// const Footer = () => {
//     return (
//         <footer className="bg-[#0B1120] border-t border-[#D4AF37]/10 mt-20">

//             {/* Top Footer */}
//             <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

//                 <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

//                     {/* Logo & About */}
//                     <div>
//                         <div className="flex items-center gap-3 mb-5">

//                             <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
//                                 <FaShieldAlt className="text-[#0F172A] text-xl" />
//                             </div>

//                             <div>
//                                 <h2 className="text-2xl font-bold text-white">
//                                     Titanium
//                                     <span className="text-[#D4AF37]">Safe</span>
//                                 </h2>

//                                 <p className="text-gray-400 text-sm">
//                                     Premium Security Vaults
//                                 </p>
//                             </div>
//                         </div>

//                         <p className="text-gray-400 leading-relaxed text-sm">
//                             TitaniumSafe provides premium quality security safes
//                             and vaults designed for homes, offices, jewelry shops,
//                             and businesses with advanced protection technology.
//                         </p>

//                         {/* Social Icons */}
//                         <div className="flex items-center gap-4 mt-6">

//                             <a
//                                 href="#"
//                                 className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
//                             >
//                                 <FaFacebookF />
//                             </a>

//                             <a
//                                 href="#"
//                                 className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
//                             >
//                                 <FaInstagram />
//                             </a>

//                             <a
//                                 href="https://wa.me/919999999999"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
//                             >
//                                 <FaWhatsapp />
//                             </a>

//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="text-white text-xl font-semibold mb-6">
//                             Quick Links
//                         </h3>

//                         <ul className="space-y-4">

//                             <li>
//                                 <Link
//                                     to="/"
//                                     className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
//                                 >
//                                     Home
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link
//                                     to="/about"
//                                     className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
//                                 >
//                                     About Us
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link
//                                     to="/products"
//                                     className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
//                                 >
//                                     Products
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link
//                                     to="/testimonials"
//                                     className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
//                                 >
//                                     Testimonials
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link
//                                     to="/contact"
//                                     className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
//                                 >
//                                     Contact Us
//                                 </Link>
//                             </li>

//                         </ul>
//                     </div>

//                     {/* Products */}
//                     <div>
//                         <h3 className="text-white text-xl font-semibold mb-6">
//                             Our Products
//                         </h3>

//                         <ul className="space-y-4 text-gray-400">

//                             <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
//                                 Home Safes
//                             </li>

//                             <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
//                                 Office Vaults
//                             </li>

//                             <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
//                                 Jewelry Safes
//                             </li>

//                             <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
//                                 Digital Lockers
//                             </li>

//                             <li className="hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
//                                 Fireproof Safes
//                             </li>

//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div>
//                         <h3 className="text-white text-xl font-semibold mb-6">
//                             Contact Info
//                         </h3>

//                         <div className="space-y-5">

//                             <div className="flex gap-4">
//                                 <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />

//                                 <p className="text-gray-400 text-sm leading-relaxed">
//                                     Jaipur, Rajasthan, India
//                                 </p>
//                             </div>

//                             <div className="flex gap-4">
//                                 <FaPhoneAlt className="text-[#D4AF37] mt-1" />

//                                 <p className="text-gray-400 text-sm">
//                                     +91 9999999999
//                                 </p>
//                             </div>

//                             <div className="flex gap-4">
//                                 <FaEnvelope className="text-[#D4AF37] mt-1" />

//                                 <p className="text-gray-400 text-sm">
//                                     support@titaniumsafe.com
//                                 </p>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Bottom Footer */}
//             <div className="border-t border-[#D4AF37]/10">
//                 <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

//                     <p className="text-gray-500 text-sm text-center">
//                         © 2026 TitaniumSafe. All Rights Reserved.
//                     </p>

//                     <p className="text-gray-500 text-sm text-center">
//                         Designed & Developed with ❤️
//                     </p>

//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


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

// 👇 Replace with your actual logo path
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
        <footer className="bg-[#060D1A] mt-20 relative overflow-hidden">

            {/* Subtle glow top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

            {/* Gold gradient line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />

            {/* ── Main Grid ── */}
            <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

                    {/* ── Col 1: Brand ── */}
                    <div className="lg:col-span-1">

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 mb-5 w-fit">
                            <img
                                src={logo}
                                alt="TitaniumSafe"
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/10"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-white leading-tight">
                                    Titanium<span className="text-[#D4AF37]">Safe</span>
                                </h2>
                                <p className="text-gray-500 text-xs tracking-wide">
                                    Premium Security Vaults
                                </p>
                            </div>
                        </Link>

                        <p className="text-gray-500 leading-relaxed text-sm mb-7">
                            TitaniumSafe provides premium security safes and vaults
                            designed for homes, offices, jewelry shops, and businesses
                            with advanced protection technology.
                        </p>

                        {/* Social */}
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
                                    className="w-9 h-9 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F172A] hover:border-[#D4AF37] hover:scale-110 transition-all duration-300 text-sm"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Col 2: Quick Links ── */}
                    <div>
                        <h3 className="text-white font-semibold text-base mb-6 flex items-center gap-2">
                            <span className="w-5 h-[2px] bg-[#D4AF37] rounded-full inline-block" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-[#D4AF37] transition-colors duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3: Products ── */}
                    <div>
                        <h3 className="text-white font-semibold text-base mb-6 flex items-center gap-2">
                            <span className="w-5 h-[2px] bg-[#D4AF37] rounded-full inline-block" />
                            Our Products
                        </h3>
                        <ul className="space-y-3">
                            {products.map((product, i) => (
                                <li
                                    key={i}
                                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm flex items-center gap-2 cursor-pointer group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-[#D4AF37] transition-colors duration-300" />
                                    {product}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4: Contact ── */}
                    <div>
                        <h3 className="text-white font-semibold text-base mb-6 flex items-center gap-2">
                            <span className="w-5 h-[2px] bg-[#D4AF37] rounded-full inline-block" />
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map(({ icon: Icon, text }, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                                        <Icon className="text-[#D4AF37] text-xs" />
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed pt-1">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-gray-600 text-xs text-center">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-[#D4AF37]/70">
                            TitaniumSafe
                        </span>
                        . All Rights Reserved.
                    </p>
                    <p className="text-gray-600 text-xs text-center">
                        Designed & Developed with <span className="text-[#D4AF37]">❤️</span>
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;