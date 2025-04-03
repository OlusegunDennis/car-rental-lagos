import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer
      style={{
        backgroundColor: "navy",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
        position: "relative",
        bottom: "0",
        width: "100%",
      }}
    >
      <div>
        <a href="https://web.facebook.com/profile.php?id=61573983099983" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} style={{ margin: "0 10px", color: "white" }} />
        </a>
        <a href="https://www.instagram.com/carrentallagos007" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} style={{ margin: "0 10px", color: "white" }} />
        </a>
        <a href="https://www.tiktok.com/@carrentallagos" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={24} style={{ margin: "0 10px", color: "white" }} />
        </a>
      </div>
      <p className="mt-2">© 2020-{currentYear} Car Rental Lagos. All Rights Reserved.</p> {/* Dynamic year */}
    </footer>
  );
};

export default Footer;