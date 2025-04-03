import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import BookACar from "./pages/BookACar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import About from "./pages/About";
import CarAlbum from "./components/CarAlbum";
import ContactForm from "./components/ContactForm";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton"; // ✅ Import Back to Top Button
import { useEffect } from "react";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Full screen height
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden", // Prevents horizontal scrolling
        }}
      >
        <Navbar />
        
        {/* Main content area that stretches to push footer down */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <Routes>
            <Route path="/" index element={<Hero />} />
            <Route path="/book-a-car" element={<BookACar />} />
            <Route path="/about" element={<About />} />
            <Route path="/car-album/:carName" element={<CarAlbum />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route path="/book-now" element={<ContactForm />} /> {/* ✅ Redirects "Book Now" to Contact Form */}
          </Routes>
        </div>

        <WhatsAppButton />
        <Footer />
        <ScrollToTopButton /> {/* ✅ Add Back to Top Button */}
      </div>
    </div>
  );
};

export default App;