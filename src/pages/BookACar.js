import React from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook

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
  },
];

const BookACar = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleImageClick = (carName) => {
    navigate(`/car-album/${carName}`); // ✅ Navigate using car name
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Available Cars for Rent</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {cars.map((car) => (
          <div
            key={car.id}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={car.image}
              alt={car.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
              }}
              onClick={() => handleImageClick(car.name)}
            />
            
            <p style={{ fontSize: "14px", color: "#888", marginTop: "5px" }}>
              📷 <i>Tap image to view more</i>
            </p>

            <h3>{car.name}</h3>
            <p style={{ fontWeight: "bold" }}>{car.price}</p>
            <p style={{ fontStyle: "italic", color: "#555" }}>{car.description}</p>
            <button
              onClick={() => navigate("/contact-us")}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#ff6600",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
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

export default BookACar;