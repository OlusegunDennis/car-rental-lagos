import React from "react";

const About = () => {
  // Nigeria's official colors
  const primaryGreen = "#038751";
  const secondaryGreen = "#026b40";
  const white = "#FFFFFF";

  return (
    <div
      style={{
        padding: "40px 20px",
        backgroundColor: white,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: primaryGreen,
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        About Us
      </h2>

      <div
        style={{
          background: `linear-gradient(to right, ${primaryGreen} 50%, ${secondaryGreen})`,
          padding: "30px",
          maxWidth: "900px",
          width: "100%",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          style={{
            color: "#333",
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          Welcome to <strong>CAR RENTAL NAIJA</strong>, your trusted car rental service. We provide{" "}
          <strong>SELF DRIVE,</strong> <strong>CHAUFFEUR SERVICES,</strong> and{" "}
          <strong>AIRPORT DROP OFF</strong> at unbeatable rates. Our fleet consists of well-maintained and luxurious vehicles to meet your transportation needs.
        </p>

        <p
          style={{
            color: "#333",
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "30px",
            fontWeight: "500",
          }}
        >
          At Car Rental Lagos, customer satisfaction is our top priority. We ensure a smooth booking process, flexible rental options, and exceptional customer service.
        </p>

        <p
  style={{
    color: "#fff", // White color for better visibility on the dark background
    fontWeight: "700",
    fontSize: "22px", // Slightly larger font size for emphasis
    marginTop: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    backgroundColor: primaryGreen, // Green background to make the text pop
    padding: "10px 20px", // Added padding for better legibility
    borderRadius: "5px", // Rounded corners for the background
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for emphasis
  }}
>
  Your journey starts with us. Rent a car today!
</p>
      </div>
    </div>
  );
};

export default About;