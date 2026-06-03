/* eslint-disable no-unused-vars */
import React from "react";

const CTASection = () => {
    return (
        <section className="py-24">

            <div className="max-w-5xl mx-auto px-5">

                <div className="bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] rounded-3xl p-10 lg:p-16 text-center">

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
                        Protect Your Valuables
                        With TitaniumSafe
                    </h2>

                    <p className="text-[#0F172A]/80 mt-5 text-lg">
                        Explore our premium security solutions today.
                    </p>

                    <a
                        href="/products"
                        className="inline-block mt-8 bg-[#0F172A] text-white px-8 py-4 rounded-full font-semibold"
                    >
                        Explore Products
                    </a>

                </div>

            </div>

        </section>
    );
};

export default CTASection;