/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-md shadow-[#D4AF37]/5 border-b border-[#e8e2d6]"
                : "bg-white/80 backdrop-blur-sm border-b border-[#e8e2d6]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
                <div className="flex items-center justify-between h-18">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="TitaniumSafe Logo"
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-[#D4AF37]/30 shadow-md"
                        />
                        <div>
                            <h1 className="text-[#0f1623] text-xl font-bold tracking-wide leading-tight">
                                Titanium<span className="text-[#D4AF37]">Safe</span>
                            </h1>
                            <p className="text-[#9ca3af] text-[10px] tracking-wide">
                                Premium Security Vaults
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1 ml-auto">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                        ? "text-[#B8941F] bg-[#D4AF37]/10"
                                        : "text-[#4a5568] hover:text-[#B8941F] hover:bg-[#D4AF37]/8"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            color="#B8941F"
                            size={24}
                            rounded
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white border-t border-[#e8e2d6] px-6 py-5 shadow-lg">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                        ? "text-[#B8941F] bg-[#D4AF37]/10"
                                        : "text-[#4a5568] hover:text-[#B8941F] hover:bg-[#D4AF37]/8"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;