import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rentalPickupDate: "",
    rentalReturnDate: "",
    vehicleDesired: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateDates = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    if (formData.rentalPickupDate < today || formData.rentalReturnDate < today) {
      setError("Please select a future date for both rental pickup and return.");
      return false;
    }

    if (formData.rentalReturnDate < formData.rentalPickupDate) {
      setError("Rental return date must be after the rental pickup date.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    // Validate dates before submission
    if (!validateDates()) {
      setLoading(false);
      return;
    }

    fetch("https://formspree.io/f/xovejwqp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
      })
      .then(() => {
        alert("Message sent successfully! If you don’t get a response, please call or WhatsApp 📞 09012345678, 08198765432.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          rentalPickupDate: "",
          rentalReturnDate: "",
          vehicleDesired: "",
          message: "",
        }); // Clear form after submission
      })
      .catch(() => setError("Server down, please call 📞 +2348069943108 or +2349032054555"))
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Book Now</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "auto", gap: "12px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        
        <div style={{ position: "relative" }}>
          <input
            type="date"
            name="rentalPickupDate"
            placeholder="Rental Pickup Date"
            value={formData.rentalPickupDate}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              paddingLeft: "30px", // Space for the calendar icon
            }}
            min={new Date().toISOString().split("T")[0]} // Disable past dates in the date picker
          />
          <span
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px",
              color: "#ccc",
            }}
          >
            📅
          </span>
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="date"
            name="rentalReturnDate"
            placeholder="Rental Return Date"
            value={formData.rentalReturnDate}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              paddingLeft: "30px", // Space for the calendar icon
            }}
            min={new Date().toISOString().split("T")[0]} // Disable past dates in the date picker
          />
          <span
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px",
              color: "#ccc",
            }}
          >
            📅
          </span>
        </div>

        <input
          type="text"
          name="vehicleDesired"
          placeholder="Desired Vehicle"
          value={formData.vehicleDesired}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", height: "120px" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px",
            backgroundColor: loading ? "#ccc" : "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;