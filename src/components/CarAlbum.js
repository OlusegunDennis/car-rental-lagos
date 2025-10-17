import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Nigeria's color scheme (matching with navbar and hero)
const nigeriaGreen = "#008751";
// const darkGreen = "#006740";
const navyBlue = "#1A237E";
const white = "#FFFFFF";
const goldAccent = "#D4AF37";

const carImages = {
  "toyota-granvia-2023": [
    "/ToyotaGranvia/CarAlbum/toyota-granvia-1.jpg",
    "/ToyotaGranvia/CarAlbum/toyota-granvia-2.jpg",
    "/ToyotaGranvia/CarAlbum/toyota-granvia-3.jpg",
    "/ToyotaGranvia/CarAlbum/toyota-granvia-4.jpg",
  ],
  "land-cruiser-prado-2018": [
    "/LandCruiserPrado/CarAlbum/land-cruiser-prado-1.jpg",
    "/LandCruiserPrado/CarAlbum/land-cruiser-prado-2.jpg",
    "/LandCruiserPrado/CarAlbum/land-cruiser-prado-3.jpg",
  ],
  "lexus-lx-570-2020": [
    "/LexusLx570/CarAlbum/lexus-lx-570-1.jpg",
    "/LexusLx570/CarAlbum/lexus-lx-570-2.jpg",
    "/LexusLx570/CarAlbum/lexus-lx-570-3.jpg",
    "/LexusLx570/CarAlbum/lexus-lx-570-4.jpg",
  ],
  "hilux-revolution-2020": [
    "/HiluxRevolution/CarAlbum/hilux-revolution-1.jpg",
    "/HiluxRevolution/CarAlbum/hilux-revolution-2.jpg",
    "/HiluxRevolution/CarAlbum/hilux-revolution-3.jpg",
  ],
  "toyota-highlander-2016": [
    "/ToyotaHighlander/CarAlbum/toyota-highlander-1.jpg",
    "/ToyotaHighlander/CarAlbum/toyota-highlander-2.jpg",
    "/ToyotaHighlander/CarAlbum/toyota-highlander-3.jpg",
    "/ToyotaHighlander/CarAlbum/toyota-highlander-4.jpg",
  ],
  "toyota-venza-2010": [
    "/ToyotaVenza/CarAlbum/toyota-venza-1.jpg",
    "/ToyotaVenza/CarAlbum/toyota-venza-2.jpg",
    "/ToyotaVenza/CarAlbum/toyota-venza-3.jpg",
    "/ToyotaVenza/CarAlbum/toyota-venza-4.jpg",
  ],
  "toyota-highlander-2012": [
    "/ToyotaHighlander2012/CarAlbum/toyota-highlander-2012-1.jpg",
    "/ToyotaHighlander2012/CarAlbum/toyota-highlander-2012-2.jpg",
  ],
  "toyota-4runner-2016": [
    "/Toyota4runner/CarAlbum/toyota-4runner-1.jpg",
    "/Toyota4runner/CarAlbum/toyota-4runner-2.jpg",
    "/Toyota4runner/CarAlbum/toyota-4runner-3.jpg",
  ],
};

const CarAlbum = () => {
  const { carName } = useParams();
  const formattedCarName = carName?.toLowerCase().replace(/ /g, "-") || "";
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;

  const images = carImages[formattedCarName] || [];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If car images exist, set the first one as selected
  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(0);
    }
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [formattedCarName, images.length]);

  // Get car name display text
  const displayCarName = formattedCarName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
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
        background: `linear-gradient(135deg, ${navyBlue}10 0%, ${white} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background design elements */}
      <div style={{
        position: "absolute",
        top: "-50px",
        right: "-100px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: `linear-gradient(45deg, ${navyBlue}10, ${navyBlue}05)`,
        zIndex: 0,
      }} />

      <div style={{
        position: "absolute",
        bottom: "-80px",
        left: "-80px",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: `linear-gradient(45deg, ${nigeriaGreen}10, ${nigeriaGreen}05)`,
        zIndex: 0,
      }} />

      <div className="container" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Header section */}
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
            {displayCarName}
          </h1>

          <div style={{
            width: "80px",
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
            Experience the luxury and performance of our premium {displayCarName}.
            Browse through our gallery to see all angles of this exceptional vehicle.
          </p>
        </div>

        {/* Main content */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "30px",
          alignItems: "flex-start",
          justifyContent: "center",
        }}>
          {/* Main large image */}
          <div style={{
            flex: isMobile ? "1 1 100%" : "2 1 0",
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          }}>
            {isLoading ? (
              <div style={{
                height: "400px",
                background: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  border: `3px solid ${navyBlue}20`,
                  borderTop: `3px solid ${goldAccent}`,
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}>
                  <style>{`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
                </div>
              </div>
            ) : images.length > 0 ? (
              <img
                src={images[selectedImage]}
                alt={`${displayCarName} ${selectedImage + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.5s ease",
                  transform: isLoading ? "scale(0.98)" : "scale(1)",
                }}
              />
            ) : (
              <div style={{
                padding: "50px 20px",
                background: "#f8f8f8",
                borderRadius: "12px",
                textAlign: "center",
              }}>
                <p style={{
                  color: "#d32f2f",
                  fontSize: "1.1rem",
                  marginBottom: "15px",
                }}>
                  No images found for {displayCarName}
                </p>
                <button style={{
                  background: navyBlue,
                  color: white,
                  border: "none",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}>
                  Go Back
                </button>
              </div>
            )}
          </div>

          {/* Thumbnails and car details */}
          <div style={{
            flex: isMobile ? "1 1 100%" : "1 1 0",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            {/* Thumbnails */}
            {images.length > 0 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
                gap: "10px",
                marginBottom: "20px",
              }}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    style={{
                      cursor: "pointer",
                      borderRadius: "8px",
                      overflow: "hidden",
                      position: "relative",
                      aspectRatio: "1",
                      border: index === selectedImage ? `2px solid ${goldAccent}` : "2px solid transparent",
                      transform: index === selectedImage ? "scale(1.05)" : "scale(1)",
                      transition: "all 0.3s ease",
                      boxShadow: index === selectedImage ? "0 4px 15px rgba(0, 0, 0, 0.15)" : "0 2px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={image}
                      alt={`${displayCarName} thumbnail ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: index === selectedImage ? "1" : "0.7",
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Car details card */}
            {images.length > 0 && (
              <div style={{
                background: white,
                borderRadius: "12px",
                padding: "25px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                border: `1px solid ${navyBlue}10`,
              }}>
                <h3 style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: navyBlue,
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={goldAccent}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: "10px" }}
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                  Vehicle Specifications
                </h3>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px 25px",
                  fontSize: "0.95rem",
                }}>
                  <div style={{ color: "#555" }}>
                    <strong style={{ color: navyBlue }}>Model:</strong> {displayCarName.split(" ")[0]}
                  </div>
                  <div style={{ color: "#555" }}>
                    <strong style={{ color: navyBlue }}>Year:</strong> {displayCarName.match(/\d{4}/) ? displayCarName.match(/\d{4}/)[0] : "N/A"}
                  </div>
                  <div style={{ color: "#555" }}>
                    <strong style={{ color: navyBlue }}>Color:</strong> Available in multiple colors
                  </div>
                  <div style={{ color: "#555" }}>
                    <strong style={{ color: navyBlue }}>Transmission:</strong> Automatic
                  </div>
                  <div style={{ color: "#555" }}>
                    <strong style={{ color: navyBlue }}>Fuel Type:</strong> Petrol
                  </div>
                  <div style={{ color: "#555" }}>
                    <strong style={{ color: navyBlue }}>Seats:</strong> 5-8
                  </div>
                </div>

                <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
                  {/* <button style={{
                    flex: "1",
                    background: navyBlue,
                    color: white,
                    border: "none",
                    padding: "12px 15px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    fontSize: "0.95rem",
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
                      width="18"
                      height="18"
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
                  </button> */}
                  <button style={{
                    flex: "1",
                    background: "transparent",
                    color: navyBlue,
                    border: `2px solid ${navyBlue}`,
                    padding: "12px 15px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    fontSize: "0.95rem",
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
                    {/* <svg
                      width="18"
                      height="18"
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
                    </svg> */}
                    {/* <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}> */}
                    <button
  onClick={() => window.history.back()}
  style={{
    background: "#1a237e", // ← Replace this with your actual navyBlue value
    color: "white",
    padding: "15px 80px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
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
    <polyline points="15 18 9 12 15 6" />
  </svg>
  Go Back
</button>

  {/* <button
    onClick={() => window.location.href = "/contact"} // or use useNavigate from react-router-dom
    style={{
      background: goldAccent,
      color: "#fff",
      padding: "10px 25px",
      borderRadius: "25px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    Book Now
  </button> */}
{/* </div> */}

                    {/* Back */}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAlbum;