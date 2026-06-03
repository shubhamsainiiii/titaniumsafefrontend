/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);

  }, []);

  // Loader
  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>

      {/* Scroll Top */}
      <ScrollToTop />

      <div className="bg-[#0F172A] min-h-screen overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <AppRoutes />

        {/* Footer */}
        <Footer />

      </div>

    </BrowserRouter>
  );
};

export default App;