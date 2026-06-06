/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

import logo from "../assets/logo.jpeg";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
                <div className="flex items-center justify-between h-20">

                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="TitaniumSafe Logo"
                            className="w-11 h-11 rounded-full object-cover shadow-lg"
                        />
                        <div>
                            <h1 className="text-white text-2xl font-bold tracking-wide">
                                Titanium<span className="text-[#D4AF37]">Safe</span>
                            </h1>
                            <p className="text-gray-400 text-xs">
                                Premium Security Vaults
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8 ml-auto">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium transition-all duration-300 hover:text-[#D4AF37] ${isActive ? "text-[#D4AF37]" : "text-white"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="lg:hidden">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            color="#D4AF37"
                            size={26}
                            rounded
                        />
                    </div>
                </div>
            </div>

            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-[#111827] border-t border-[#D4AF37]/20 px-6 py-5">
                    <nav className="flex flex-col gap-5">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `text-lg font-medium transition-all duration-300 ${isActive ? "text-[#D4AF37]" : "text-white"
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