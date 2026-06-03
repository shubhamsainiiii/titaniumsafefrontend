/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        alert("Message Sent Successfully!");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div className="bg-[#0F172A] text-white min-h-screen pt-28">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                <div className="text-center mb-16">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        Contact
                        <span className="text-[#D4AF37]"> Us</span>
                    </h1>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
                        Have questions about our premium safes and vaults?
                        Contact TitaniumSafe today and our team will assist you.
                    </p>

                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-14 items-start">

                    {/* Left Side */}
                    <div>

                        <h2 className="text-3xl font-bold mb-8">
                            Get In Touch
                        </h2>

                        <div className="space-y-6">

                            {/* Address */}
                            <div className="bg-[#111827] border border-[#D4AF37]/10 rounded-3xl p-6 flex gap-5 hover:border-[#D4AF37]/40 transition-all duration-300">

                                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-[#D4AF37] text-xl" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Office Address
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        Jaipur, Rajasthan, India
                                    </p>
                                </div>

                            </div>

                            {/* Phone */}
                            <div className="bg-[#111827] border border-[#D4AF37]/10 rounded-3xl p-6 flex gap-5 hover:border-[#D4AF37]/40 transition-all duration-300">

                                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <FaPhoneAlt className="text-[#D4AF37] text-xl" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Phone Number
                                    </h3>

                                    <p className="text-gray-400">
                                        +91 9999999999
                                    </p>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="bg-[#111827] border border-[#D4AF37]/10 rounded-3xl p-6 flex gap-5 hover:border-[#D4AF37]/40 transition-all duration-300">

                                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-[#D4AF37] text-xl" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Email Address
                                    </h3>

                                    <p className="text-gray-400">
                                        support@titaniumsafe.com
                                    </p>
                                </div>

                            </div>

                            {/* WhatsApp */}
                            <div className="bg-[#111827] border border-[#D4AF37]/10 rounded-3xl p-6 flex gap-5 hover:border-[#D4AF37]/40 transition-all duration-300">

                                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <FaWhatsapp className="text-[#D4AF37] text-xl" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        WhatsApp
                                    </h3>

                                    <a
                                        href="https://wa.me/919999999999"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#111827] border border-[#D4AF37]/10 rounded-3xl p-8 shadow-2xl">

                        <h2 className="text-3xl font-bold mb-8">
                            Send Message
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Name */}
                            <div>
                                <label className="block mb-2 text-sm text-gray-300">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full bg-[#0F172A] border border-gray-700 focus:border-[#D4AF37] outline-none px-5 py-4 rounded-2xl text-white"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 text-sm text-gray-300">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-[#0F172A] border border-gray-700 focus:border-[#D4AF37] outline-none px-5 py-4 rounded-2xl text-white"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block mb-2 text-sm text-gray-300">
                                    Phone Number
                                </label>

                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                    className="w-full bg-[#0F172A] border border-gray-700 focus:border-[#D4AF37] outline-none px-5 py-4 rounded-2xl text-white"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-2 text-sm text-gray-300">
                                    Your Message
                                </label>

                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    required
                                    className="w-full bg-[#0F172A] border border-gray-700 focus:border-[#D4AF37] outline-none px-5 py-4 rounded-2xl text-white resize-none"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#D4AF37] text-[#0F172A] py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Contact;