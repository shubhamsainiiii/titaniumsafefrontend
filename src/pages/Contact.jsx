/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaArrowRight,
} from "react-icons/fa";
import api from "../services/api";
import toast from "react-hot-toast";

const inputClass =
    "w-full bg-[#f8f6f0] border border-[#e8e2d6] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10 outline-none px-5 py-3.5 rounded-xl text-[#0f1623] text-sm placeholder:text-[#9ca3af] transition-all duration-200";

const labelClass = "block mb-1.5 text-xs font-semibold uppercase tracking-widest text-[#6b7280]";

const contactItems = [
    {
        icon: FaMapMarkerAlt,
        label: "Office Address",
        value: "Jaipur, Rajasthan, India",
        href: null,
        color: "bg-orange-50 border-orange-100 text-orange-500",
    },
    {
        icon: FaPhoneAlt,
        label: "Phone Number",
        value: "+91 9999999999",
        href: "tel:+919999999999",
        color: "bg-blue-50 border-blue-100 text-blue-500",
    },
    {
        icon: FaEnvelope,
        label: "Email Address",
        value: "support@titaniumsafe.com",
        href: "mailto:support@titaniumsafe.com",
        color: "bg-purple-50 border-purple-100 text-purple-500",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "Chat on WhatsApp",
        href: "https://wa.me/919999999999",
        color: "bg-green-50 border-green-100 text-green-500",
    },
];

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await api.post("/contact/create", formData);
            toast.success(data.message);
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Failed To Send Message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#f8f6f0] text-[#0f1623] min-h-screen pt-10">
            {/* ── Hero ── */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#B8941F] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
                        Get In Touch
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1623]">
                        Contact <span className="text-[#D4AF37]">Us</span>
                    </h1>
                    <p className="text-[#718096] mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                        Have questions about our premium safes and vaults?
                        Our team is ready to assist you.
                    </p>
                </div>

                {/* ── Grid ── */}
                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* ── Left: Contact Info ── */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#0f1623] mb-6">
                            Reach Out To Us
                        </h2>

                        <div className="space-y-4">
                            {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                                <div
                                    key={label}
                                    className="bg-white border border-[#e8e2d6] rounded-2xl p-5 flex items-center gap-4 hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${color}`}>
                                        <Icon className="text-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-[#5c616b] mb-0.5">
                                            {label}
                                        </p>
                                        {href ? (
                                            <a
                                                href={href}
                                                target={href.startsWith("https") ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                className="text-[#0f1623] text-sm font-medium hover:text-[#B8941F] transition-colors duration-200 truncate block"
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="text-[#0f1623] text-sm font-medium truncate">{value}</p>
                                        )}
                                    </div>
                                    {href && (
                                        <FaArrowRight className="text-[#d1d5db] group-hover:text-[#D4AF37] text-xs transition-colors duration-200 flex-shrink-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Form ── */}
                    <div className="bg-white border border-[#e8e2d6] rounded-3xl p-8 shadow-xl shadow-[#D4AF37]/5">

                        {/* Form header */}
                        <div className="mb-7">
                            <h2 className="text-2xl font-bold text-[#0f1623]">Send a Message</h2>
                            <p className="text-[#9ca3af] text-sm mt-1">
                                We'll get back to you within 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Name + Phone row */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Phone</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                        required
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className={labelClass}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className={labelClass}>Your Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    required
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#D4AF37] text-[#0f1623] py-4 rounded-xl font-bold text-sm tracking-wide hover:brightness-105 hover:shadow-lg hover:shadow-[#D4AF37]/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {loading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-[#0f1623] border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <FaArrowRight className="text-xs" />
                                    </>
                                )}
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;