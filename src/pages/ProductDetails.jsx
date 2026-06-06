/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    FaStar,
    FaWhatsapp,
    FaShieldAlt,
    FaSpinner,
    FaChevronLeft,
    FaChevronRight,
    FaRegStar,
    FaStarHalfAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import api from "../services/api";

// ── Star renderer ──────────────────────────────────────────────────────────
const Stars = ({ rating, size = "text-sm" }) =>
    [1, 2, 3, 4, 5].map((s) => {
        const Icon =
            rating >= s ? FaStar : rating >= s - 0.5 ? FaStarHalfAlt : FaRegStar;
        return (
            <Icon key={s} className={`${size} ${rating >= s - 0.5 ? "text-[#D4AF37]" : "text-gray-700"}`} />
        );
    });

// ── Spec tile ──────────────────────────────────────────────────────────────
const SpecTile = ({ label, value }) => (
    <div className="  border border-white/5 rounded-2xl px-4 py-3">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white text-sm font-medium truncate">{value}</p>
    </div>
);

// ── Main ───────────────────────────────────────────────────────────────────
const ProductDetails = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [latestReviews, setLatestReviews] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [avgRating, setAvgRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);

    const fetchProduct = async () => {
        try {
            const { data } = await api.get(`/products/single/${id}`);
            if (data.success) {
                setProduct(data.product);
                setSelectedImage(data.product.images?.[0] || "");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchReviews = async () => {
        try {
            const { data } = await api.get(`/reviews/product/${id}`);
            if (data.success) {
                const all = data.reviews;
                setTotalReviews(all.length);
                if (all.length > 0) {
                    setAvgRating(
                        (all.reduce((s, r) => s + r.rating, 0) / all.length).toFixed(1)
                    );
                }
                setLatestReviews(all.slice(0, 6));
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            await fetchProduct();
            await fetchReviews();
            setLoading(false);
        };
        load();
    }, [id]);

    const handleBuyNow = () => {
        const msg = `I want to buy this product: ${product.name}. Please share complete details.`;
        window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
    };

    const handleKnowMore = () => {
        const msg = `I want to know more about this product: ${product.name}. Please share complete details.`;
        window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
    };

    // ── Loading ──
    if (loading) {
        return (
            <div className="  min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <FaSpinner className="text-[#D4AF37] text-4xl animate-spin" />
                    <p className="text-gray-500 text-sm tracking-widest uppercase">
                        Loading product...
                    </p>
                </div>
            </div>
        );
    }

    // ── Not found ──
    if (!product) {
        return (
            <div className="  min-h-screen flex items-center justify-center text-center px-4">
                <div>
                    <p className="text-2xl font-bold text-white mb-2">Product Not Found</p>
                    <p className="text-gray-500 text-sm">
                        The product you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    const specs = [
        { label: "Material", value: product.material },
        { label: "Colour", value: product.colour },
        { label: "Closure", value: product.closureType },
        { label: "Dimensions", value: product.productDimensions },
        { label: "Water Resistance", value: product.waterResistanceLevel },
        { label: "Special Feature", value: product.specialFeature },
    ].filter((s) => s.value);

    // ── Render ──
    return (
        <div className="  min-h-screen text-white pt-28 overflow-hidden">
            <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

                {/* ══════════════════════════════════════════
                    Product Hero
                ══════════════════════════════════════════ */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* ── Left: Image Gallery ── */}
                    <motion.div
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Main image */}
                        <div className="relative bg-[#0f172a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.35 }}
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-160 object-fit"
                            />

                            {/* Availability overlay badge */}
                            <div
                                className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border backdrop-blur-sm ${product.available
                                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                                    : "bg-red-500/10 text-red-400 border-red-500/20"
                                    }`}
                            >
                                <span
                                    className={`w-1.5 h-1.5 rounded-full ${product.available ? "bg-green-400" : "bg-red-400"
                                        } animate-pulse`}
                                />
                                {product.available ? "In Stock" : "Out of Stock"}
                            </div>
                        </div>

                        {/* Thumbnails */}
                        {product.images?.length > 1 && (
                            <div className="grid grid-cols-5 gap-3 mt-4">
                                {product.images.map((img, i) => (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        key={i}
                                        onClick={() => setSelectedImage(img)}
                                        className={`rounded-xl overflow-hidden border-2 transition-all duration-300 focus:outline-none ${selectedImage === img
                                            ? "border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20"
                                            : "border-white/5 hover:border-white/20"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`thumb-${i}`}
                                            className="w-full h-30 object-cover bg-[#0f172a]"
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* ── Right: Details ── */}
                    <motion.div
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col"
                    >
                        {/* Category tag */}
                        {product.category && (
                            <span className="inline-flex w-fit items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold px-3 py-1.5 rounded-xl mb-4 tracking-widest uppercase">
                                <FaShieldAlt className="text-[10px]" />
                                {product.category}
                            </span>
                        )}

                        {/* Name */}
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                            {product.name}
                        </h1>

                        {/* Brand */}
                        {product.brandName && (
                            <p className="text-gray-500 mt-2 text-sm">
                                by{" "}
                                <span className="text-gray-300 font-medium">
                                    {product.brandName}
                                </span>
                            </p>
                        )}

                        {/* Rating row */}
                        <div className="flex items-center gap-3 mt-5">
                            <div className="flex items-center gap-0.5">
                                <Stars rating={parseFloat(avgRating)} />
                            </div>
                            {avgRating > 0 ? (
                                <span className="flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold px-2.5 py-1 rounded-lg">
                                    {avgRating}
                                    <span className="text-[#D4AF37]/60">
                                        · {totalReviews} review{totalReviews !== 1 ? "s" : ""}
                                    </span>
                                </span>
                            ) : (
                                <span className="text-gray-600 text-xs">No reviews yet</span>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/5 my-6" />

                        {/* Price */}
                        <div className="flex items-end gap-2">
                            <span className="text-5xl font-bold text-[#D4AF37]">
                                ₹{product.price?.toLocaleString("en-IN")}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mt-6 text-base">
                            {product.description}
                        </p>

                        {/* Specs grid */}
                        {specs.length > 0 && (
                            <div className="mt-6 grid grid-cols-2 gap-2.5">
                                {specs.map((s) => (
                                    <SpecTile key={s.label} {...s} />
                                ))}
                            </div>
                        )}

                        {/* Divider */}
                        <div className="h-px bg-white/5 my-8" />

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={handleBuyNow}
                                className="flex-1 bg-[#D4AF37] text-[#0F172A] py-4 rounded-2xl font-bold flex items-center justify-center gap-2.5 text-sm cursor-pointer hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20"
                            >
                                <FaWhatsapp className="text-base" />
                                Buy Now on WhatsApp
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={handleKnowMore}
                                className="flex-1 bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-semibold hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 text-sm cursor-pointer"
                            >
                                Know More
                            </motion.button>
                        </div>

                        {/* Trust badges */}
                        <div className="flex items-center gap-4 mt-6">
                            {["Premium Quality", "Secure Packaging", "Expert Support"].map((t) => (
                                <div key={t} className="flex items-center gap-1.5 text-gray-600 text-xs">
                                    <FaShieldAlt className="text-[#D4AF37]/40 text-[10px]" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ══════════════════════════════════════════
                    Reviews Section
                ══════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-28"
                >
                    {latestReviews.length > 0 && (
                        <>
                            {/* Section heading */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
                                <div>
                                    <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-2">
                                        Customer Feedback
                                    </p>
                                    <h2 className="text-4xl font-bold">
                                        What Customers{" "}
                                        <span className="text-[#D4AF37]">Say</span>
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2 bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-3">
                                    <div className="flex gap-0.5">
                                        <Stars rating={parseFloat(avgRating)} />
                                    </div>
                                    <span className="text-white font-bold">{avgRating}</span>
                                    <span className="text-gray-500 text-sm">
                                        / 5 · {totalReviews} reviews
                                    </span>
                                </div>
                            </div>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={16}
                                autoplay={{ delay: 2800, disableOnInteraction: false }}
                                loop={latestReviews.length >= 3}
                                modules={[Autoplay]}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                            >
                                {latestReviews.map((review) => (
                                    <SwiperSlide key={review._id}>
                                        <div className="h-full pb-2">
                                            <ReviewCard review={review} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )}

                    {/* ── Review Form ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mt-20"
                    >
                        {/* Heading */}
                        <div className="text-center mb-10">
                            <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-2">
                                Share Your Experience
                            </p>
                            <h2 className="text-3xl font-bold">
                                Write a{" "}
                                <span className="text-[#D4AF37]">Review</span>
                            </h2>
                        </div>

                        <div className="max-w-2xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-8 shadow-xl">
                            <ReviewForm
                                productId={product._id}
                                onReviewSubmit={fetchReviews}
                            />
                        </div>
                    </motion.div>
                </motion.div>

            </section>
        </div>
    );
};

export default ProductDetails;