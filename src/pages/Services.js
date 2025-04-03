import React from "react";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`

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
  const navigate = useNavigate(); // Use `useNavigate` hook for navigation

  // Function to handle the redirection to the "Book Now" page
  const handleBookNowClick = () => {
    navigate("/book-now"); // Redirect to the "Book Now" page
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          color: "#2C3E50",
          fontSize: "2.5rem",
          fontWeight: "bold",
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
              padding: "25px",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "20px",
                color: "#E74C3C",
              }}
            >
              {service.icon}
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "#2C3E50",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                color: "#7F8C8D",
                lineHeight: "1.6",
                fontSize: "1rem",
              }}
            >
              {service.description}
            </p>
            {/* Button to redirect to Book Now page */}
            <button
              onClick={handleBookNowClick} // On click, redirect to Book Now page
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
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