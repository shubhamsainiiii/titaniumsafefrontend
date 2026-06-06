/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */

import React, {
    useEffect,
    useState,
} from "react";

import ReviewCard from "../components/ReviewCard";

import api from "../services/api";

import { Link } from "react-router-dom";

const Testimonials = () => {

    const [reviews, setReviews] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const getReviews = async () => {

        try {

            const { data } =
                await api.get(
                    "/reviews/latest"
                );

            if (data.success) {

                setReviews(
                    data.reviews
                );

            }

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        getReviews();

    }, []);

    return (
        <div className="bg-[#0F172A] min-h-screen text-white pt-28">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                <div className="text-center mb-16">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        Customer
                        <span className="text-[#D4AF37]">
                            {" "}Testimonials
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto leading-relaxed">
                        Trusted by hundreds of customers for premium security,
                        durability and modern safe solutions.
                    </p>

                </div>

                {/* Loading */}
                {loading ? (

                    <div className="text-center py-20">
                        <p className="text-gray-400">
                            Loading Reviews...
                        </p>
                    </div>

                ) : reviews.length > 0 ? (

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {reviews.map((review) => (

                            <ReviewCard
                                key={review._id}
                                review={review}
                            />

                        ))}

                    </div>

                ) : (

                    <div className="text-center py-20">

                        <h3 className="text-2xl font-semibold">
                            No Reviews Yet
                        </h3>

                        <p className="text-gray-400 mt-2">
                            Customer reviews will appear here.
                        </p>

                    </div>

                )}

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
                            offices, jewelry shops and businesses.
                        </p>

                        <Link
                            to="/products"
                            className="inline-block mt-8 bg-[#0F172A] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                        >
                            Explore Products
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Testimonials;