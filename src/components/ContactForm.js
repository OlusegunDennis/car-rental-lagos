import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Main container that holds both form and image
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 20px 20px;  // Adjusted padding to reduce space
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a, #2c2c2c);

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
`;

// Vehicle image container
const VehicleImageContainer = styled.div`
  position: relative;
  width: 100%;
  order: 1;

  @media (min-width: 1024px) {
    flex: 1;
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &::before {
    content: "";
    display: block;
    padding-top: 75%; /* Aspect ratio for mobile */

    @media (min-width: 1024px) {
      padding-top: 0;
    }
  }
`;

const VehicleImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/image/gwagon.jpg'); /* Make sure the path is correct */
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1023px) {
    opacity: 0.2;
    z-index: -1;
    border-radius: 0;
    position: fixed;
  }
`;

// Form section
const FormSection = styled.div`
  flex: 1;
  order: 2;
  position: relative;
  z-index: 1;
  margin-top: -30px;  // Adjusted margin to bring the form up

  @media (min-width: 1024px) {
    order: 1;
    max-width: 500px;
  }
`;

const FormTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #ffffff;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    margin: 15px auto 0;
    background: linear-gradient(90deg, #ff8a00, #ff5e03);
    border-radius: 4px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.6), transparent);
    animation: ${shimmer} 3s infinite linear;
  }
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #fff;
  font-size: 14px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: rgba(255, 140, 0, 0.5);
    box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &[type="date"] {
    appearance: none;

    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
      opacity: 0.7;
    }
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: rgba(255, 140, 0, 0.5);
    box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const DateGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledButton = styled.button`
  padding: 16px;
  background: ${props => props.disabled ? '#555' : 'linear-gradient(135deg, #ff8a00, #ff5e03)'};
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.disabled ? 'none' : '0 4px 15px rgba(255, 94, 3, 0.3)'};

  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(255, 94, 3, 0.4);
  }

  &:not(:disabled):active {
    transform: translateY(1px);
  }
`;

const SuccessMessage = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: rgba(76, 175, 80, 0.2);
  color: #4ce99d;
  border-radius: 8px;
  animation: ${fadeIn} 0.5s ease-in-out;
  text-align: center;
  border-left: 3px solid #4ce99d;
  backdrop-filter: blur(5px);
`;

const ErrorMessage = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: rgba(244, 67, 54, 0.2);
  color: #ff6b6b;
  border-radius: 8px;
  text-align: center;
  border-left: 3px solid #ff6b6b;
  backdrop-filter: blur(5px);
`;

const BrandLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 140, 0, 0.6);

  &::before {
    content: "SR";
    font-size: 30px;
    font-weight: bold;
    color: #ff8a00;
  }
`;

const CarRentalForm = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rentalDate: "",
    returnDate: "",
    message: "",
    carType: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setError(null);

    // Fake delay to simulate submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        rentalDate: "",
        returnDate: "",
        message: "",
        carType: "",
      });
      setError("An error occurred during submission. Please try again.");
    }, 3000);
  };

  return (
    <FormContainer>
      <VehicleImageContainer>
        <VehicleImage />
      </VehicleImageContainer>

      <FormSection>
        <BrandLogo />
        <FormTitle>Book Your Car Now</FormTitle>
        <StyledForm ref={formRef} action="https://formspree.io/f/mdkepzep" method="POST">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {isSubmitted && (
            <SuccessMessage>
              <p>Successfully Submitted. If you don't get a response immediately, please call or WhatsApp:</p>
              <p>+2348069943108</p>
              <p>+2348032054555</p>
            </SuccessMessage>
          )}

          {/* Form Fields */}
          <InputGroup>
            <InputLabel htmlFor="name">Full Name</InputLabel>
            <StyledInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </InputGroup>

          <InputGroup>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </InputGroup>

          <InputGroup>
            <InputLabel htmlFor="phone">Phone Number</InputLabel>
            <StyledInput
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </InputGroup>

          <DateGroup>
            <InputGroup>
              <InputLabel htmlFor="rentalDate">Rental Date</InputLabel>
              <StyledInput
                type="date"
                id="rentalDate"
                name="rentalDate"
                value={formData.rentalDate}
                onChange={handleChange}
                min={today}
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel htmlFor="returnDate">Return Date</InputLabel>
              <StyledInput
                type="date"
                id="returnDate"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                min={today}
                required
              />
            </InputGroup>
          </DateGroup>

          <InputGroup>
            <InputLabel htmlFor="carType">Car Type</InputLabel>
            <StyledInput
              type="text"
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              placeholder="Enter car type"
              required
            />
          </InputGroup>

          <InputGroup>
            <InputLabel htmlFor="message">Message</InputLabel>
            <StyledTextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional details or request"
            />
          </InputGroup>

          <StyledButton type="submit" disabled={isSubmitted}>
            {isSubmitted ? "Submitting..." : "Submit"}
          </StyledButton>
        </StyledForm>
      </FormSection>
    </FormContainer>
  );
};

export default CarRentalForm;