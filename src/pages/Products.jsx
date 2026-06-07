// /* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable no-unused-vars */
// import React, {
//     useEffect,
//     useState,
// } from "react";

// import ProductCard from "../components/ProductCard";

// import {
//     FaSearch,
// } from "react-icons/fa";

// import api from "../services/api";

// const Products = () => {

//     // ==========================
//     // States
//     // ==========================
//     const [products, setProducts] =
//         useState([]);

//     const [loading, setLoading] =
//         useState(true);

//     const [search, setSearch] =
//         useState("");

//     // ==========================
//     // Fetch Products
//     // ==========================
//     const getProducts = async () => {

//         try {

//             setLoading(true);

//             const { data } =
//                 await api.get(
//                     "/products/all"
//                 );

//             // Only Available Products
//             const availableProducts =
//                 data.products.filter(
//                     (item) => item.available
//                 );

//             setProducts(
//                 availableProducts
//             );

//         } catch (error) {

//             console.log(error);

//         } finally {

//             setLoading(false);

//         }
//     };

//     // ==========================
//     // Use Effect
//     // ==========================
//     useEffect(() => {

//         getProducts();

//     }, []);

//     const filteredProducts =
//         products.filter((product) =>
//             product.name
//                 .toLowerCase()
//                 .includes(
//                     search.toLowerCase()
//                 )
//         );

//     return (
//         <div className="bg-[#0F172A] min-h-screen text-white pt-10">
//             {/* Hero */}
//             <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
//                 <div className="text-center">
//                     <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold">
//                         Our Premium
//                         <span className="text-[#D4AF37]">
//                             {" "}Products
//                         </span>
//                     </h1>
//                     <p className="text-gray-400 mt-5 text-md max-w-3xl mx-auto leading-relaxed">
//                         Explore our premium collection of modern safes,
//                         digital lockers, office vaults, and advanced
//                         security solutions.
//                     </p>
//                 </div>
//                 {/* Search */}
//                 <div className="max-w-2xl mx-auto mt-5">
//                     <div className="relative">
//                         <input
//                             type="text"
//                             placeholder="Search products..."
//                             value={search}
//                             onChange={(e) =>
//                                 setSearch(e.target.value)
//                             }
//                             className="w-full bg-[#111827] border border-[#D4AF37]/10 focus:border-[#D4AF37] outline-none px-6 py-4 rounded-full text-white pl-14"
//                         />
//                         <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
//                     </div>

//                 </div>
//                 {/* Loading */}
//                 {
//                     loading ? (
//                         <div className="flex items-center justify-center py-32">
//                             <div className="w-14 h-14 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
//                         </div>
//                     ) : (
//                         <>
//                             {/* Products Grid */}
//                             <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
//                                 {
//                                     filteredProducts.length > 0 ? (
//                                         filteredProducts.map((product) => (
//                                             <ProductCard
//                                                 key={product._id}
//                                                 product={product}
//                                             />
//                                         ))
//                                     ) : (
//                                         <div className="col-span-full text-center py-20">
//                                             <h2 className="text-3xl font-bold text-white">
//                                                 No Products Found
//                                             </h2>
//                                             <p className="text-gray-400 mt-4">
//                                                 Try searching with another keyword.
//                                             </p>
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                         </>
//                     )
//                 }
//             </section>
//         </div>
//     );
// };

// export default Products;

/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { FaSearch, FaTimes } from "react-icons/fa";
import api from "../services/api";

const CATEGORIES = [
    "All",
    "Home Safes",
    "Office Vaults",
    "Jewelry Safes",
    "Digital Lockers",
    "Fireproof Safes",
];

// ── Skeleton Card ──────────────────────────────────────────
const SkeletonCard = () => (
    <div className="bg-white border border-[#e8e2d6] rounded-2xl overflow-hidden animate-pulse">
        <div className="h-[200px] bg-[#f0ebe2]" />
        <div className="p-4 space-y-3">
            <div className="h-3 bg-[#e8e2d6] rounded-full w-3/4" />
            <div className="h-2.5 bg-[#e8e2d6] rounded-full w-full" />
            <div className="h-2.5 bg-[#e8e2d6] rounded-full w-2/3" />
            <div className="flex gap-2 mt-4">
                <div className="flex-1 h-9 bg-[#e8e2d6] rounded-xl" />
                <div className="flex-1 h-9 bg-[#e8e2d6] rounded-xl" />
            </div>
        </div>
    </div>
);

// ── Main ───────────────────────────────────────────────────
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const getProducts = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("/products/all");
            setProducts(data.products.filter((p) => p.available));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { getProducts(); }, []);

    const filtered = products.filter((p) => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchCat = category === "All" || p.category === category;
        return matchSearch && matchCat;
    });

    return (
        <div className="bg-[#f8f6f0] min-h-screen text-[#0f1623] pt-10">
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                {/* ── Heading ── */}
                <div className="text-center mb-10">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#B8941F] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full mb-4">
                        Our Collection
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1623]">
                        Premium{" "}
                        <span className="text-[#D4AF37]">Products</span>
                    </h1>
                    <p className="text-[#718096] mt-4 text-base max-w-2xl mx-auto leading-relaxed">
                        Explore our premium collection of modern safes,
                        digital lockers, office vaults, and advanced security solutions.
                    </p>
                </div>

                {/* ── Search ── */}
                <div className="max-w-xl mx-auto mb-8">
                    <div className="relative">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8941F] text-sm" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white border border-[#e8e2d6] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/10 outline-none px-5 py-3.5 pl-11 rounded-xl text-[#0f1623] text-sm placeholder:text-[#9ca3af] transition-all duration-200 shadow-sm"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#B8941F] transition-colors"
                            >
                                <FaTimes className="text-sm" />
                            </button>
                        )}
                    </div>
                </div>

                {/* ── Category Filter ── */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${category === cat
                                ? "bg-[#D4AF37] text-[#0f1623] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20"
                                : "bg-white text-[#6b7280] border-[#e8e2d6] hover:border-[#D4AF37]/40 hover:text-[#B8941F]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Results count ── */}
                {!loading && (
                    <p className="text-[#9ca3af] text-sm mb-6 text-center">
                        {filtered.length > 0
                            ? `Showing ${filtered.length} product${filtered.length !== 1 ? "s" : ""}`
                            : ""}
                    </p>
                )}

                {/* ── Loading Skeletons ── */}
                {loading ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <SkeletonCard key={i} />)}
                    </div>

                ) : filtered.length > 0 ? (

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filtered.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>

                ) : (

                    <div className="text-center py-20 bg-white border border-[#e8e2d6] rounded-3xl">
                        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                            <FaSearch className="text-[#D4AF37] text-lg" />
                        </div>
                        <h2 className="text-xl font-bold text-[#0f1623]">No Products Found</h2>
                        <p className="text-[#9ca3af] mt-2 text-sm">
                            Try searching with another keyword or category.
                        </p>
                        <button
                            onClick={() => { setSearch(""); setCategory("All"); }}
                            className="mt-5 px-5 py-2.5 bg-[#D4AF37] text-[#0f1623] rounded-xl text-sm font-semibold hover:brightness-105 transition-all"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

            </section>
        </div>
    );
};

export default Products;    