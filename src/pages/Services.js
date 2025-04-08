import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Self-Drive Car Rental",
    description: "Enjoy the freedom of driving yourself with our well-maintained vehicles available for rent.",
    icon: "🚗",
  },
  {
    id: 2,
    title: "Chauffeur Services",
    description: "Relax and let our professional drivers take you wherever you need to go in style and comfort.",
    icon: "🧑‍✈️",
  },
  {
    id: 3,
    title: "Airport Drop-Off",
    description: "We provide reliable airport transfers to ensure you reach your destination on time.",
    icon: "✈️",
  },
  {
    id: 4,
    title: "Luxury Car Hire",
    description: "Make a statement with our high-end luxury cars, perfect for special occasions.",
    icon: "🏎️",
  },
  {
    id: 5,
    title: "Interstate Travel",
    description: "Travel beyond borders with ease and comfort. Whether it's business or leisure, we offer reliable interstate travel options.",
    icon: "🛣️",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/book-now");
  };

  return (
    <div
      style={{
        padding: "50px 20px",
        backgroundColor: "#111",
        minHeight: "100vh",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
        color: "#fff",
        background: "linear-gradient(45deg, #038751, #026b40)",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          fontSize: "3rem",
          fontWeight: "700",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#fff",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        Our Premium Services
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: "scale(1)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <div
              style={{
                fontSize: "60px",
                marginBottom: "20px",
                color: "#038751", // Nigeria green color
              }}
            >
              {service.icon}
            </div>
            <h3
              style={{
                fontSize: "1.75rem",
                marginBottom: "15px",
                color: "#2C3E50",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                color: "#7F8C8D",
                lineHeight: "1.6",
                fontSize: "1.1rem",
                fontWeight: "300",
                marginBottom: "25px",
              }}
            >
              {service.description}
            </p>
            <button
              onClick={handleBookNowClick}
              style={{
                padding: "12px 25px",
                background: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                fontSize: "1.2rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0px 12px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;