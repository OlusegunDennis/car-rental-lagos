import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

// Nigeria's official flag colors
const nigeriaGreen = "#008751";
const white = "#FFFFFF";
const darkGreen = "#006740";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Animation on mount
    setIsVisible(true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const phoneNumbers = [
    { number: "+2348069943108" },
    { number: "+2348106691891" }
  ];

  const email = "info1@carrentalnaija.com";

  return (
    <div
      ref={heroRef}
      className="hero-container"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        minHeight: "calc(100vh - 140px)", // Adjust this based on navbar/footer height
        background: `linear-gradient(135deg, ${nigeriaGreen} 0%, ${darkGreen} 100%)`,
        color: white,
        paddingTop: isMobile ? "5rem" : "6rem", // space for navbar
        paddingBottom: isMobile ? "5rem" : "6rem", // space for footer
        paddingLeft: isMobile ? "1rem" : "5rem",
        paddingRight: isMobile ? "1rem" : "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Background Effects */}
      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        height: "120px",
        background: "rgba(255, 255, 255, 0.15)",
        top: "50%",
        transform: "translateY(-50%) skewY(-3deg)",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        right: isMobile ? "-150px" : "-100px",
        top: "10%",
        width: isMobile ? "300px" : "400px",
        height: isMobile ? "300px" : "400px",
        background: "rgba(255, 255, 255, 0.07)",
        borderRadius: "50%",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        left: isMobile ? "-100px" : "-50px",
        bottom: "5%",
        width: isMobile ? "200px" : "300px",
        height: isMobile ? "200px" : "300px",
        background: "rgba(255, 255, 255, 0.07)",
        borderRadius: "50%",
        zIndex: 0
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
      }}>
        <h1 style={{
          fontSize: isMobile ? "2.5rem" : "4.2rem",
          fontWeight: "800",
          marginBottom: "1.5rem",
          color: white,
          lineHeight: "1.2",
        }}>
          Premium Car Rentals<br />
          <span style={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: "600" }}>Across Nigeria</span>
        </h1>

        <p style={{
          fontSize: isMobile ? "1.1rem" : "1.3rem",
          marginBottom: "2.5rem",
          color: "rgba(255, 255, 255, 0.9)",
          maxWidth: "700px",
        }}>
          Experience the luxury and comfort of CarRentalNaija's premium car fleet.
          We offer the best rates and exceptional service across all major cities in Nigeria.
        </p>

        {/* Contact Section */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          padding: "1.5rem",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          maxWidth: isMobile ? "100%" : "450px",
          marginBottom: "2rem"
        }}>
          <h3 style={{ margin: 0, color: white }}>Contact Us Directly</h3>
          {phoneNumbers.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.number}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                color: white,
                textDecoration: "none",
                padding: "0.6rem 0.8rem",
                borderRadius: "8px",
                fontWeight: "500",
                fontSize: "1.05rem",
                background: "rgba(255, 255, 255, 0.05)",
                transition: "all 0.3s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              📞 <span>{phone.number}</span>
            </a>
          ))}
          <a
            href={`mailto:${email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              color: white,
              textDecoration: "none",
              padding: "0.6rem 0.8rem",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "1.05rem",
              background: "rgba(255, 255, 255, 0.05)",
              transition: "all 0.3s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.transform = "translateX(5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            ✉️ <span>{email}</span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "1rem"
        }}>
          <Link to="/book-a-car"
            style={{
              background: white,
              color: nigeriaGreen,
              padding: "1rem 2rem",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "1.1rem",
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
            }}
          >
            View Our Fleet →
          </Link>

          <Link to="/contact-us"
            style={{
              background: "transparent",
              color: white,
              padding: "1rem 2rem",
              borderRadius: "50px",
              border: `2px solid rgba(255, 255, 255, 0.6)`,
              fontWeight: "600",
              fontSize: "1.1rem",
              textDecoration: "none",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = white;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;