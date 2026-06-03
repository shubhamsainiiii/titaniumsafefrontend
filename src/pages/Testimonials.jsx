/* eslint-disable no-unused-vars */
import React from "react";
import ReviewCard from "../components/ReviewCard";

const Testimonials = () => {

    // Dummy Reviews
    const reviews = [
        {
            _id: 1,
            userName: "Rahul Sharma",
            rating: 5,
            review:
                "Excellent quality safe with premium finishing. Highly secure and worth the investment.",
        },
        {
            _id: 2,
            userName: "Amit Verma",
            rating: 5,
            review:
                "Very strong and durable safe. Customer support was also amazing.",
        },
        {
            _id: 3,
            userName: "Priya Jain",
            rating: 4,
            review:
                "Modern design with excellent security features. Perfect for office use.",
        },
        {
            _id: 4,
            userName: "Vikas Gupta",
            rating: 5,
            review:
                "Best titanium safe brand I have used. Strong build quality and premium look.",
        },
        {
            _id: 5,
            userName: "Sneha Kapoor",
            rating: 5,
            review:
                "Very satisfied with the product quality and fast support team.",
        },
        {
            _id: 6,
            userName: "Rohit Meena",
            rating: 4,
            review:
                "Heavy-duty safe with advanced locking system. Recommended for businesses.",
        },
    ];

    return (
        <div className="bg-[#0F172A] min-h-screen text-white pt-28">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                <div className="text-center mb-16">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        Customer
                        <span className="text-[#D4AF37]"> Testimonials</span>
                    </h1>

                    <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto leading-relaxed">
                        Trusted by hundreds of customers for premium security,
                        durability, and modern safe solutions.
                    </p>

                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {reviews.map((review) => (
                        <ReviewCard
                            key={review._id}
                            review={review}
                        />
                    ))}

                </div>

            </section>

            {/* CTA Section */}
            <section className="pb-20">

                <div className="max-w-5xl mx-auto px-5">

                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] rounded-3xl p-10 lg:p-16 text-center">

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                            Secure Your Valuables
                            With TitaniumSafe
                        </h2>

                        <p className="text-[#0F172A]/80 mt-5 text-lg max-w-2xl mx-auto">
                            Discover premium safes designed for homes,
                            offices, jewelry shops, and businesses.
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

        </div>
    );
};

export default Testimonials;