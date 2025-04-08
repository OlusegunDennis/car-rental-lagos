import React, { useCallback, useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  // Define Nigeria's official colors (same as in Hero.js)
  const primaryGreen = "#038751"; // Nigeria's official green
  const secondaryGreen = "#026b40"; // Slightly darker shade
  const white = "#FFFFFF";

  // State for window width (for responsiveness)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive styles
  const isMobile = windowWidth <= 768;

  // Get icon size based on device
  const getIconSize = useCallback(() => {
    return isMobile ? 20 : 24;
  }, [isMobile]);

  // Get bottom text size based on device
  const getTextSize = useCallback(() => {
    return isMobile ? "12px" : "14px";
  }, [isMobile]);

  return (
    <footer
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        color: "#333",
        textAlign: "center",
        overflow: "hidden",
        padding: isMobile ? "20px 0 10px" : "30px 0 15px",
      }}
    >
      {/* Nigerian Flag-Inspired Background with Gradient Blends */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        display: "flex",
        flexDirection: "row",
      }}>
        {/* Left green section with gradient fade */}
        <div style={{
          flex: 1,
          background: `linear-gradient(to right, ${primaryGreen}, ${primaryGreen} 70%, rgba(255, 255, 255, 0.9))`,
        }} />

        {/* Middle white section with gradient fades on both sides */}
        <div style={{
          flex: 1,
          background: `linear-gradient(to right, rgba(255, 255, 255, 0.9), ${white} 30%, ${white} 70%, rgba(3, 135, 81, 0.9))`,
        }} />

        {/* Right green section with gradient fade */}
        <div style={{
          flex: 1,
          background: `linear-gradient(to right, rgba(3, 135, 81, 0.9), ${primaryGreen} 30%, ${primaryGreen})`,
        }} />
      </div>

      {/* Nigerian Pattern Overlay (subtle texture) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        opacity: 0.3,
        zIndex: -1,
      }} />

      {/* Top Border with Green-White-Green Pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: isMobile ? "3px" : "5px",
        display: "flex",
      }}>
        <div style={{ flex: 1, background: primaryGreen }} />
        <div style={{ flex: 1, background: white }} />
        <div style={{ flex: 1, background: primaryGreen }} />
      </div>

      {/* Social Media Icons Section */}
      <div style={{
        marginBottom: isMobile ? "15px" : "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? "15px" : "20px",
      }}>
        <a
          href="https://web.facebook.com/profile.php?id=61573983099983"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: isMobile ? "36px" : "40px",
            height: isMobile ? "36px" : "40px",
            borderRadius: "50%",
            background: primaryGreen,
            color: white,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) => {
            if (!isMobile) {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
            }
          }}
          onMouseOut={(e) => {
            if (!isMobile) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }
          }}
        >
          <FaFacebook size={getIconSize()} />
        </a>
        <a
          href="https://www.instagram.com/carrentallagos007"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: isMobile ? "36px" : "40px",
            height: isMobile ? "36px" : "40px",
            borderRadius: "50%",
            background: primaryGreen,
            color: white,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) => {
            if (!isMobile) {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
            }
          }}
          onMouseOut={(e) => {
            if (!isMobile) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }
          }}
        >
          <FaInstagram size={getIconSize()} />
        </a>
        <a
          href="https://www.tiktok.com/@carrentallagos"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: isMobile ? "36px" : "40px",
            height: isMobile ? "36px" : "40px",
            borderRadius: "50%",
            background: primaryGreen,
            color: white,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) => {
            if (!isMobile) {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
            }
          }}
          onMouseOut={(e) => {
            if (!isMobile) {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }
          }}
        >
          <FaTiktok size={getIconSize()} />
        </a>
      </div>

      {/* Copyright Information */}
      <p
        style={{
          fontSize: isMobile ? "14px" : "16px",
          fontWeight: "700", // Bold text for better visibility
          marginBottom: "10px",
          color: "#111", // Darker color for contrast
          position: "relative",
          zIndex: 1,
        }}
      >
        ©{currentYear} <strong>Car Rental Naija</strong>. All Rights Reserved.
      </p>

      {/* Footer Credit */}
      <p
        style={{
          fontSize: getTextSize(),
          fontWeight: "700", // Bold text for better visibility
          color: "#111", // Darker color for contrast
          marginTop: "5px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Website designed and maintained by{" "}
        <a
          href="https://www.linkedin.com/in/dennis-olusegun-/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#111",
            fontWeight: "800",
            textDecoration: "underline",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = primaryGreen;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#111";
          }}
        >
          Olusegun Dennis
        </a>
      </p>
    </footer>
  );
};

export default Footer;