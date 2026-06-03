/* eslint-disable no-unused-vars */
import React, {
    useEffect,
    useState,
} from "react";

import ProductCard from "../components/ProductCard";

import {
    FaSearch,
} from "react-icons/fa";

import api from "../services/api";

const Products = () => {

    // ==========================
    // States
    // ==========================
    const [products, setProducts] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    // ==========================
    // Fetch Products
    // ==========================
    const getProducts = async () => {

        try {

            setLoading(true);

            const { data } =
                await api.get(
                    "/products/all"
                );

            // Only Available Products
            const availableProducts =
                data.products.filter(
                    (item) => item.available
                );

            setProducts(
                availableProducts
            );

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };

    // ==========================
    // Use Effect
    // ==========================
    useEffect(() => {

        getProducts();

    }, []);

    // ==========================
    // Filter Products
    // ==========================
    const filteredProducts =
        products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    return (
        <div className="bg-[#0F172A] min-h-screen text-white pt-28">

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                <div className="text-center">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">

                        Our Premium
                        <span className="text-[#D4AF37]">
                            {" "}Products
                        </span>

                    </h1>

                    <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto leading-relaxed">

                        Explore our premium collection of modern safes,
                        digital lockers, office vaults, and advanced
                        security solutions.

                    </p>

                </div>

                {/* Search */}
                <div className="max-w-2xl mx-auto mt-12">

                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search products..."

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                            className="w-full bg-[#111827] border border-[#D4AF37]/10 focus:border-[#D4AF37] outline-none px-6 py-4 rounded-full text-white pl-14"
                        />

                        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                    </div>

                </div>

                {/* Loading */}
                {
                    loading ? (

                        <div className="flex items-center justify-center py-32">

                            <div className="w-14 h-14 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>

                        </div>

                    ) : (

                        <>
                            {/* Products Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                                {
                                    filteredProducts.length > 0 ? (

                                        filteredProducts.map((product) => (

                                            <ProductCard
                                                key={product._id}
                                                product={product}
                                            />

                                        ))

                                    ) : (

                                        <div className="col-span-full text-center py-20">

                                            <h2 className="text-3xl font-bold text-white">

                                                No Products Found

                                            </h2>

                                            <p className="text-gray-400 mt-4">

                                                Try searching with another keyword.

                                            </p>

                                        </div>
                                    )
                                }

                            </div>
                        </>
                    )
                }

            </section>

        </div>
    );
};

export default Products;