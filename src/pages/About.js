import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ color: "#ff6600", marginBottom: "15px" }}>About Us</h2>
      <p style={{ maxWidth: "800px", lineHeight: "1.6", fontSize: "18px" }}>
        Welcome to <strong>CAR RENTAL LAGOS</strong>, your trusted car rental service.
        We provide <strong>SELF DRIVE,</strong> <strong>CHAUFFEUR SERVICES,</strong> and <strong>AIRPORT DROP OFF</strong>
        at unbeatable rates. Our fleet consists of well-maintained and
        luxurious vehicles to meet your transportation needs.
      </p>

      <p style={{ maxWidth: "800px", lineHeight: "1.6", fontSize: "18px" }}>
        At Car Rental Lagos, customer satisfaction is our top priority. We ensure a smooth
        booking process, flexible rental options, and exceptional customer service.
      </p>

      <p style={{ fontWeight: "bold", marginTop: "20px", fontSize: "20px" }}>
        Your journey starts with us. Rent a car today!
      </p>
    </div>
  );
};

export default About;