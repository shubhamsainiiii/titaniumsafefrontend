/* eslint-disable no-unused-vars */
import React from "react";

const CTASection = () => {
    return (
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
    );
};

export default CTASection;