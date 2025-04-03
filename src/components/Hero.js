import React, { useEffect, useState, useMemo } from "react"; 
import { Link } from "react-router-dom";

const Hero = () => {
  // ✅ Use useMemo to prevent re-creation of colors array
  const colors = useMemo(() => ["red", "orange", "yellow", "green", "blue", "indigo", "violet"], []);

  const [currentColor, setCurrentColor] = useState(colors[0]);

  // ✅ No more unnecessary re-renders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 500);

    return () => clearInterval(interval);
  }, [colors]); // `colors` is now stable

  return (
    <div
      className="hero"
      style={{
        backgroundColor: "orange",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "20px",
        width: "100vw",
        maxWidth: "100%",
        boxSizing: "border-box",
        margin: "0",
        paddingTop: "0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Blinking Rainbow Text */}
      <h1
        className="fw-bold"
        style={{
          marginBottom: "10px",
          maxWidth: "90%",
          transition: "color 0.5s ease-in-out",
          color: currentColor,
          willChange: "color",
          letterSpacing: "1px", // Space between letters
          lineHeight: "1.5", // Space between lines
        }}
      >
        WELCOME TO CAR RENTAL LAGOS
      </h1>

      {/* Service Description */}
      <p
        style={{
          fontSize: "18px",
          maxWidth: "90%",
          marginBottom: "20px",
          color: "#001F3F",
          fontWeight: "bold",
          letterSpacing: "1px", // Space between letters
          lineHeight: "1.5", // Space between lines
        }}
      >
        <strong>WE PROVIDE SELF DRIVE, CHAUFFEUR SERVICES, AND AIRPORT DROP OFF AT UNBEATABLE RATES</strong>
      </p>

      {/* Book a Car Button */}
      <Link
        to="/book-a-car"
        style={{
          backgroundColor: "navy",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "18px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "0.3s ease-in-out",
          marginBottom: "20px",
          maxWidth: "90%",
          textAlign: "center",
          display: "inline-block",
        }}
      >
        Book a Car
      </Link>

      {/* Contact Information */}
      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          maxWidth: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Clickable Phone Numbers */}
        <div style={{ margin: "5px 0" }}>
          <a
            href="tel:+2348069943108"
            style={{
              color: "#4B0082",
              textDecoration: "none",
              fontWeight: "bold",
              letterSpacing: "1px", // Space between letters
              lineHeight: "1.5", // Space between lines
            }}
          >
            📞 +2348069943108
          </a>
        </div>
        <div style={{ margin: "5px 0" }}>
          <a
            href="tel:+2349032054555"
            style={{
              color: "#4B0082",
              textDecoration: "none",
              fontWeight: "bold",
              letterSpacing: "1px", // Space between letters
              lineHeight: "1.5", // Space between lines
            }}
          >
            📞 +2349032054555
          </a>
        </div>

        {/* Clickable Email */}
        <a
          href="mailto:carrentallagos007@gmail.com"
          style={{
            margin: "5px 0",
            color: "#4B0082",
            textDecoration: "none",
            fontWeight: "bold",
            letterSpacing: "1px", // Space between letters
            lineHeight: "1.5", // Space between lines
          }}
        >
          ✉️ carrentallagos007@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Hero;