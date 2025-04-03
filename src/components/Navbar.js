import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      className="px-3"
      style={{
        width: "100%",
        zIndex: 1000, // Ensures navbar stays on top
        padding: "15px 0", // Adds space inside navbar
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-warning"
          style={{ fontSize: "1.5rem", padding: "10px 0" }} // Adjusts brand size
        >
          CAR RENTAL LAGOS
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <FaBars className="text-white" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={() => setExpanded(false)} 
              style={{ margin: "0 15px", fontSize: "1.2rem" }} // Adds spacing between items
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={() => setExpanded(false)} 
              style={{ margin: "0 15px", fontSize: "1.2rem" }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              onClick={() => setExpanded(false)} 
              style={{ margin: "0 15px", fontSize: "1.2rem" }}
            >
              Our Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/book-a-car" 
              onClick={() => setExpanded(false)} 
              style={{ margin: "0 15px", fontSize: "1.2rem" }}
            >
              Book a Car
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;