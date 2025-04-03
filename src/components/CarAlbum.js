import React from "react";
import { useParams } from "react-router-dom";

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
  const formattedCarName = carName.toLowerCase().replace(/ /g, "-");

  const images = carImages[formattedCarName] || [];

  // Debugging log
  console.log("Formatted car name:", formattedCarName);
  console.log("Images found for this car:", images);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh", textAlign: "center" }}>
      <h2>{formattedCarName.replace(/-/g, " ").toUpperCase()}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
              src={image}
                alt={`Car ${index + 1}`}
                style={{ width: "100%", height: "auto", borderRadius: "10px", objectFit: "cover" }}
                onLoad={() => console.log("Image loaded:", image)} // Debugging
                onError={() => console.error("Error loading image:", image)} // Debugging
              />
            </div>
          ))
        ) : (
          <p style={{ color: "red" }}>No images found for {formattedCarName}</p>
        )}
      </div>
    </div>
  );
};

export default CarAlbum;