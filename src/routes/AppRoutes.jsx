/* eslint-disable no-unused-vars */

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/about" element={<About />} />

      {/* Products */}
      <Route path="/products" element={<Products />} />

      {/* Product Details */}
      <Route path="/product/:id" element={<ProductDetails />} />

      {/* Testimonials */}
      <Route
        path="/testimonials"
        element={<Testimonials />}
      />

      {/* Contact */}
      <Route path="/contact" element={<Contact />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;