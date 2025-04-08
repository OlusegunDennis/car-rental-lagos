import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook

// Nigeria's color scheme (matching with navbar and hero)
const nigeriaGreen = "#008751";
// const darkGreen = "#006740";
const navyBlue = "#1A237E";
const lightNavy = "#3949AB";
const white = "#FFFFFF";
const goldAccent = "#D4AF37";

const cars = [
  {
    id: 1,
    name: "Toyota Granvia 2023",
    image: "/ToyotaGranvia/toyota-granvia.jpg",
    price: "500,000/day",
    description: "A luxurious masterpiece! This Toyota Granvia boasts a sleek design, premium leather interior, and top-tier comfort for an executive ride. Whether for a VIP event or a special occasion, this vehicle guarantees style and elegance.",
    albumRoutes: [
      "/ToyotaGranvia/CarAlbum/toyota-granvia-1.jpg",
      "/ToyotaGranvia/CarAlbum/toyota-granvia-2.jpg",
      "/ToyotaGranvia/CarAlbum/toyota-granvia-3.jpg",
      "/ToyotaGranvia/CarAlbum/toyota-granvia-4.jpg",
    ],
    features: ["Leather Seats", "Spacious Interior", "Executive Comfort", "Premium Sound System"]
  },
  {
    id: 2,
    name: "Land Cruiser Prado 2018",
    image: "/LandCruiserPrado/land-cruiser-prado.jpg",
    price: "250,000/day",
    description: "A smooth blend of power and class! The Land Cruiser Prado offers fuel efficiency, a commanding presence, and superior off-road performance. Perfect for both city rides and adventurous trips.",
    albumRoutes: [
      "/LandCruiserPrado/CarAlbum/land-cruiser-prado-1.jpg",
      "/LandCruiserPrado/CarAlbum/land-cruiser-prado-2.jpg",
      "/LandCruiserPrado/CarAlbum/land-cruiser-prado-3.jpg",
    ],
    features: ["4WD", "Off-road Capability", "Fuel Efficient", "Commanding Presence"]
  },
  {
    id: 3,
    name: "Lexus LX-570 2020",
    image: "/LexusLx570/lexus-lx-570.jpg",
    price: "250,000/day",
    description: "Luxury at its peak! The Lexus LX-570 is the epitome of sophistication, comfort, and powerful performance. Its spacious cabin and smooth handling make every trip a premium experience.",
    albumRoutes: [
      "/LexusLx570/CarAlbum/lexus-lx-570-1.jpg",
      "/LexusLx570/CarAlbum/lexus-lx-570-2.jpg",
      "/LexusLx570/CarAlbum/lexus-lx-570-3.jpg",
      "/LexusLx570/CarAlbum/lexus-lx-570-4.jpg",
    ],
    features: ["Premium Interior", "Powerful V8 Engine", "Advanced Safety", "Smooth Handling"]
  },
  {
    id: 4,
    name: "Hilux Revolution 2020",
    image: "/HiluxRevolution/hilux-revolution.jpg",
    price: "150,000/day",
    description: "A beast built for all terrains! The Hilux Revolution is your go-to for rugged durability, off-road capabilities, and security escort services. Whether for business or adventure, this truck delivers.",
    albumRoutes: [
      "/HiluxRevolution/CarAlbum/hilux-revolution-1.jpg",
      "/HiluxRevolution/CarAlbum/hilux-revolution-2.jpg",
      "/HiluxRevolution/CarAlbum/hilux-revolution-3.jpg",
    ],
    features: ["All-terrain Capability", "Rugged Durability", "Powerful Engine", "Security Features"]
  },
  {
    id: 5,
    name: "Toyota Highlander 2016",
    image: "/ToyotaHighlander/toyota-highlander.jpg",
    price: "120,000/day",
    description: "A perfect mix of power and elegance! The Toyota Highlander offers smooth driving, high safety ratings, and a spacious cabin. Ideal for both city cruising and long road trips.",
    albumRoutes: [
      "/ToyotaHighlander/CarAlbum/toyota-highlander-1.jpg",
      "/ToyotaHighlander/CarAlbum/toyota-highlander-2.jpg",
      "/ToyotaHighlander/CarAlbum/toyota-highlander-3.jpg",
      "/ToyotaHighlander/CarAlbum/toyota-highlander-4.jpg",
    ],
    features: ["Spacious Cabin", "High Safety Ratings", "Smooth Driving", "Fuel Efficient"]
  },
  {
    id: 6,
    name: "Toyota Venza 2010",
    image: "/ToyotaVenza/toyota-venza.jpg",
    price: "80,000/day",
    description: "Drive in comfort and class! The Toyota Venza delivers effortless handling, luxurious seating, and a smooth, quiet ride. A perfect car for those who love style and comfort.",
    albumRoutes: [
      "/ToyotaVenza/CarAlbum/toyota-venza-1.jpg",
      "/ToyotaVenza/CarAlbum/toyota-venza-2.jpg",
      "/ToyotaVenza/CarAlbum/toyota-venza-3.jpg",
      "/ToyotaVenza/CarAlbum/toyota-venza-4.jpg",
    ],
    features: ["Luxurious Seating", "Quiet Ride", "Effortless Handling", "Stylish Design"]
  },
  {
    id: 7,
    name: "Toyota Highlander 2012",
    image: "/ToyotaHighlander2012/toyota-highlander-2012.jpg",
    price: "90,000/day",
    description: "A reliable choice for family and adventure! With spacious seating, strong performance, and top safety features, this Highlander is great for both daily commutes and family road trips.",
    albumRoutes: [
      "/ToyotaHighlander2012/CarAlbum/toyota-highlander-2012-1.jpg",
      "/ToyotaHighlander2012/CarAlbum/toyota-highlander-2012-2.jpg",
    ],
    features: ["Family Friendly", "Strong Performance", "Top Safety Features", "Spacious Seating"]
  },
  {
    id: 8,
    name: "Toyota 4Runner 2016",
    image: "/Toyota4runner/toyota-4runner.jpg",
    price: "100,000/day",
    description: "Unstoppable on any terrain! The Toyota 4Runner is the ultimate off-road warrior, offering rugged durability, powerful performance, and a bold presence on the road.",
    albumRoutes: [
      "/Toyota4runner/CarAlbum/toyota-4runner-1.jpg",
      "/Toyota4runner/CarAlbum/toyota-4runner-2.jpg",
      "/Toyota4runner/CarAlbum/toyota-4runner-3.jpg",
    ],
    features: ["Off-road Warrior", "Rugged Durability", "Bold Presence", "Powerful Performance"]
  },
];

const BookACar = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredCar, setHoveredCar] = useState(null);
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageClick = (carName) => {
    navigate(`/car-album/${carName}`); // Navigate using car name
  };

  // Jaguar logo SVG - simplified version for smaller display
  const JaguarLogoSmall = () => (
    <svg
      width="30"
      height="20"
      viewBox="0 0 800 409"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        marginRight: "8px",
        verticalAlign: "middle",
      }}
    >
      <path
        d="M212.5,181.9c0,0,17.4-29.5,55.7-42.1c38.2-12.6,84.7-4.6,84.7-4.6s-15.8,15.8-0.3,35.5c15.5,19.8,61.4,19.2,61.4,19.2s-11.6,11.3-1.2,27.1c10.4,15.8,45.3,27.1,45.3,27.1s-18,25.8,1.2,44.1c19.2,18.3,50.5,16.1,50.5,16.1s-15.5,31-2.7,55.1c12.8,24,50.5,28.9,50.5,28.9s16.7-30.7,52.9-51.4c36.1-20.7,77.5-21.3,77.5-21.3s-4.6-15.5-26.1-25.3c-21.6-9.8-55.1-10.7-55.1-10.7s14.9-22.5-6.1-44.7c-21-22.2-48.7-12.2-48.7-12.2s4.9-26.8-15.8-40.9c-20.7-14-45-0.3-45-0.3s10.7-27.7-12.5-44.4c-23.1-16.7-59.3-5.2-59.3-5.2s-1.2-15.8-33.4-30.7c-32.2-14.9-75.5,4.3-75.5,4.3s-14.3-25.5-51.7-29.5c-37.3-4-75.2,9.2-75.2,9.2s-5.5,43.2,49.3,96.7C296.9,225.5,212.5,181.9,212.5,181.9z"
        fill={goldAccent}
      />
    </svg>
  );

  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "calc(100vh - 120px)",
        background: `linear-gradient(135deg, ${navyBlue}08 0%, ${white} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background design elements */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-150px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: `linear-gradient(45deg, ${navyBlue}08, ${navyBlue}03)`,
        zIndex: 0,
      }} />

      <div style={{
        position: "absolute",
        bottom: "-120px",
        left: "-100px",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: `linear-gradient(45deg, ${nigeriaGreen}08, ${nigeriaGreen}03)`,
        zIndex: 0,
      }} />

      <div className="container" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Header */}
        <div style={{
          marginBottom: "40px",
          textAlign: "center",
        }}>
          <h1 style={{
            fontSize: isMobile ? "2rem" : "2.8rem",
            fontWeight: "700",
            color: navyBlue,
            marginBottom: "10px",
            position: "relative",
            display: "inline-block",
          }}>
            <JaguarLogoSmall />
            Premium Fleet Selection
          </h1>

          <div style={{
            width: "100px",
            height: "4px",
            background: `linear-gradient(90deg, ${goldAccent}, ${navyBlue})`,
            margin: "10px auto 25px",
            borderRadius: "2px",
          }} />

          <p style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Experience luxury and comfort with our premium car selection. Each vehicle is meticulously maintained and ready to elevate your journey across Nigeria.
          </p>
        </div>

        {/* Car grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : windowWidth < 1200
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)",
          gap: "30px",
          marginTop: "30px",
        }}>
          {cars.map((car) => (
            <div
              key={car.id}
              style={{
                background: white,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s ease",
                transform: hoveredCar === car.id ? "translateY(-5px)" : "translateY(0)",
                border: `1px solid ${navyBlue}10`,
              }}
              onMouseEnter={() => setHoveredCar(car.id)}
              onMouseLeave={() => setHoveredCar(null)}
            >
              {/* Image container */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "12px",
                  margin: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(car.name)}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: goldAccent,
                    color: navyBlue,
                    padding: "8px 12px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    zIndex: 2,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  ₦{car.price}
                </div>
                <img
                  src={car.image}
                  alt={car.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    transition: "transform 0.5s ease",
                    transform: hoveredCar === car.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                {/* Overlay with view album text */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "12px",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: white,
                    textAlign: "center",
                    fontSize: "0.9rem",
                    opacity: hoveredCar === car.id ? "1" : "0",
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: "8px" }}
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  Click to View Album
                </div>
              </div>

              {/* Car details */}
              <div style={{ padding: "15px 20px 20px" }}>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                  color: navyBlue,
                }}>
                  {car.name}
                </h3>

                {/* Features list */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "15px",
                }}>
                  {car.features?.map((feature, index) => (
                    <span
                      key={index}
                      style={{
                        background: `${navyBlue}10`,
                        color: navyBlue,
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <p style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: "1.5",
                  marginBottom: "20px",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                  {car.description}
                </p>

                {/* Buttons */}
                <div style={{
                  display: "flex",
                  gap: "10px",
                }}>
                  <button
                    onClick={() => navigate("/contact-us")}
                    style={{
                      flex: "1",
                      background: navyBlue,
                      color: white,
                      border: "none",
                      padding: "12px 15px",
                      borderRadius: "30px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 12px rgba(26, 35, 126, 0.2)",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = lightNavy;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(26, 35, 126, 0.3)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = navyBlue;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(26, 35, 126, 0.2)";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "8px" }}
                    >
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                    Book Now
                  </button>

                  <button
                    onClick={() => handleImageClick(car.name)}
                    style={{
                      flex: "1",
                      background: "transparent",
                      color: navyBlue,
                      border: `2px solid ${navyBlue}`,
                      padding: "12px 15px",
                      borderRadius: "30px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(26, 35, 126, 0.05)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginRight: "8px" }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookACar;