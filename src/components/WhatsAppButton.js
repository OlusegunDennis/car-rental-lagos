import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber1 = "+2348106691891"; // First WhatsApp number
  const phoneNumber2 = "+2348069943108"; // Second WhatsApp number

  return (
    <div>
      {/* First WhatsApp Button (Only Icon) */}
      <a
        href={`https://wa.me/${phoneNumber1}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "100px",
          left: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "12px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          zIndex: "1000",
          width: "50px",
          height: "50px",
        }}
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Second WhatsApp Button (Only Icon) */}
      <a
        href={`https://wa.me/${phoneNumber2}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "160px",
          left: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "12px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          zIndex: "1000",
          width: "50px",
          height: "50px",
        }}
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsAppButton;