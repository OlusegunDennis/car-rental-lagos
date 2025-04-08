import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Nigeria's complementary colors
const navyBlue = "#1A237E";
const lightNavy = "#3949AB";
const white = "#FFFFFF";
const goldAccent = "#D4AF37"; // Gold accent for jaguar logo

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Services", path: "/services" }
  ];

  const getNavItemStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? white : "rgba(255, 255, 255, 0.85)",
      fontWeight: isActive ? "600" : "500",
      position: "relative",
      textDecoration: "none",
      fontSize: "1.05rem",
      padding: "0.5rem 1rem",
      transition: "all 0.3s ease",
      borderRadius: "6px",
      background: isActive ? "rgba(255, 255, 255, 0.15)" : "transparent",
    };
  };

  return (
    <nav
      style={{
        position: "relative", // Changed from fixed to relative to prevent overlap
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1rem 0",
        transition: "all 0.3s ease",
        background: scrolled
          ? `linear-gradient(90deg, ${navyBlue} 0%, ${lightNavy} 100%)`
          : navyBlue,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}>
            {/* Jaguar Leaping Cat Logo */}
            <svg
              width={isMobile ? "45" : "60"}
              height={isMobile ? "30" : "40"}
              viewBox="0 0 800 409"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginRight: "12px",
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))"
              }}
            >
              <path
                d="M143.9,68.3c0,0-7.3,2.4-10.9,8.4c-4.1,6.9-1.7,17.9-1.7,17.9s15.9-9.3,14.3-22.1C145.3,67.6,143.9,68.3,143.9,68.3z"
                fill={goldAccent}
              />
              <path
                d="M177,108.7c14.4-4.1,31-5.1,31-5.1s-9.8-9.3-27.7-9.8c-17.9-0.6-29.3,4.9-29.3,4.9S162.6,112.8,177,108.7z"
                fill={goldAccent}
              />
              <path
                d="M146.7,135.5c0,0,11.4-3.2,8.1-18.4c-2.6-12.1-13-20.9-28.3-19.8c-15.4,1-18.7,8.1-18.7,8.1s10.1,3.6,15.6,11.7C129,125.2,132.7,142.2,146.7,135.5z"
                fill={goldAccent}
              />
              <path
                d="M203.4,129.6c0,0-11.1-8.1-28.4-3.8c-17.3,4.3-27.5,20.5-27.5,20.5s20.5,5.9,36.1-0.3C199.2,139.8,203.4,129.6,203.4,129.6z"
                fill={goldAccent}
              />
              <path
                d="M178.1,176.7c12-24.3,32.9-38.3,32.9-38.3s-23.4-12.2-45.6,4.2c-22.2,16.4-20.5,40-20.5,40S166.1,201,178.1,176.7z"
                fill={goldAccent}
              />
              <path
                d="M745.9,182.2c0,0-25.5-28.8-59.4-22.7c-34,6.1-72.6,37.9-72.6,37.9s35.4,31.9,73.5,27.9C725.5,221.3,745.9,182.2,745.9,182.2z"
                fill={goldAccent}
              />
              <path
                d="M590.2,165.8c0,0-36.4-25.5-66.5-24.9c-30.1,0.6-46.8,15.9-46.8,15.9s13.7,16.8,40.7,21.2C544.6,182.3,573.1,171.5,590.2,165.8z"
                fill={goldAccent}
              />
              <path
                d="M451.5,152.2c0,0-53.6-14.9-80-7.6c-26.5,7.3-42.7,20.1-42.7,20.1s27.9,19.2,55.7,16.4C412.3,178.4,431.6,158.6,451.5,152.2z"
                fill={goldAccent}
              />
              <path
                d="M304.9,146.1c0,0-27.9-10.4-42.4-6.4c-14.6,4-21.8,15.2-21.8,15.2s10.4,14.6,28.3,13.7C287,167.9,296.6,151.3,304.9,146.1z"
                fill={goldAccent}
              />
              <path
                d="M212.5,181.9c0,0,17.4-29.5,55.7-42.1c38.2-12.6,84.7-4.6,84.7-4.6s-15.8,15.8-0.3,35.5c15.5,19.8,61.4,19.2,61.4,19.2s-11.6,11.3-1.2,27.1c10.4,15.8,45.3,27.1,45.3,27.1s-18,25.8,1.2,44.1c19.2,18.3,50.5,16.1,50.5,16.1s-15.5,31-2.7,55.1c12.8,24,50.5,28.9,50.5,28.9s16.7-30.7,52.9-51.4c36.1-20.7,77.5-21.3,77.5-21.3s-4.6-15.5-26.1-25.3c-21.6-9.8-55.1-10.7-55.1-10.7s14.9-22.5-6.1-44.7c-21-22.2-48.7-12.2-48.7-12.2s4.9-26.8-15.8-40.9c-20.7-14-45-0.3-45-0.3s10.7-27.7-12.5-44.4c-23.1-16.7-59.3-5.2-59.3-5.2s-1.2-15.8-33.4-30.7c-32.2-14.9-75.5,4.3-75.5,4.3s-14.3-25.5-51.7-29.5c-37.3-4-75.2,9.2-75.2,9.2s-5.5,43.2,49.3,96.7C296.9,225.5,212.5,181.9,212.5,181.9z"
                fill={goldAccent}
              />
              <path
                d="M789.9,229.2c-3-7-17-38.2-45.3-65c-28.2-26.8-71.1-43.6-98.4-50.5c-18.6-4.7-40.9-9.1-63.7-12.2c-22.8-3.1-46.1-4.9-64.1-5.2c-40.5-0.8-82.9,7.6-82.9,7.6s-116-41.6-216.5-23.8c-48.7,8.6-100.9,26.9-142.4,65.8c-49.2,46.1-66.2,108.7-66.2,108.7s12.5-5.2,27.1-9.5c14.7-4.3,31.6-7.9,37.4-7.9c0,0-12.8,7.9-27.4,21.9c-14.6,14-31,34.3-31,34.3s51.7-35.5,111.1-39.8c59.3-4.3,126.6,12.8,130.9,14c0,0-24.9,5.5-51.1,18.3C181.1,279,150.1,309.4,141,335c-9.1,25.5-9.1,50.5-9.1,50.5s23.4-32.2,86.9-49.9c63.5-17.7,166.9-6.7,166.9-6.7s-64.7,9.2-119.4,43.8c-54.8,34.6-99.7,93.9-99.7,93.9s89.3-57.5,163.3-77.3c74-19.8,132.7-18.3,132.7-18.3s-68.4,32.2-95.5,59.6c-27.1,27.4-13.1,18-13.1,18s27.7-22.2,81.4-30.7c53.6-8.5,133.3,5.8,133.3,5.8s-94.8,40.7-115.6,62.6c0,0,34.6-12.2,79-19.5c44.4-7.3,98.8-9.5,98.8-9.5s-5.8,12.5-26.8,9.8c-21-2.7-57.2,5.2-57.2,5.2s34.3,4,79-0.9c44.7-4.9,99.7-21.9,99.7-21.9s-0.6,6.7-17.4,13.1c-16.8,6.4-49.9,13.1-49.9,13.1s49.3-3.7,103.6-28.6c54.4-24.9,114.1-72.6,114.1-72.6s-22.5,3.4-45.6,0.9c-23.1-2.4-46.8-10.7-46.8-10.7s36.1-6.1,64.1-14c28-7.9,48.1-18.3,48.1-18.3S794.5,240.5,789.9,229.2z M787.1,239.6c-0.8,7.5-4.5,15.6-4.5,15.6s-15.6,8.8-44.2,16.8c-28.6,8-64.9,13.3-64.9,13.3s24.9,9.3,47.6,11.2c22.6,1.9,43.9-0.9,43.9-0.9s-54,44.2-108.9,69.2c-54.9,25-105.1,28.7-105.1,28.7s33.8-7.1,50-13c16.2-5.9,16.4-11.9,16.4-11.9s-55,17-99.9,22c-44.9,5-78.7,0.9-78.7,0.9s36.6-7.8,57-5.2c20.4,2.6,25.5-8.8,25.5-8.8s-53.5,2.3-98.1,9.7c-44.6,7.4-79.4,19.7-79.4,19.7c21.5-22.7,116.3-63.5,116.3-63.5s-79.7-14.4-133.5-5.7c-53.8,8.7-81.2,30.6-81.2,30.6s-12.8,8.5,12.2-17.3c25-25.8,93.7-58.4,93.7-58.4s-58.4-1.6-131.8,17.7c-73.5,19.3-162.1,75.9-162.1,75.9s44.9-58.2,99.1-92.1c54.2-33.9,118-42.5,118-42.5s-103.3-10.5-166.3,6.7c-63,17.2-86,48.5-86,48.5s0.5-23.9,9.1-48.4c8.6-24.5,39.1-54.2,64.9-66.8c25.8-12.6,50.2-17.7,50.2-17.7c-4.5-1.2-71.7-18-130.1-13.8c-58.4,4.2-109,38.9-109,38.9s16.3-19.7,30.6-33.3c14.4-13.6,26.9-21.1,26.9-21.1c-5.9,0-22.7,3.5-37.3,7.8c-14.5,4.3-26.7,9.3-26.7,9.3s17-61,65.4-106.1c41-38,92.6-56,140.7-64.4c99.5-17.5,214.5,23.4,214.5,23.4s41.9-8.2,81.8-7.4c17.8,0.3,40.8,2.1,63.3,5.1c22.5,3.1,44.6,7.4,63,12c27,6.8,69.4,23.3,97.2,49.7c27.8,26.3,41.7,57,44.6,63.8C791.8,224.2,787.9,232.1,787.1,239.6z"
                fill="white"
              />
            </svg>

            <h1
              style={{
                margin: 0,
                fontSize: isMobile ? "1.4rem" : "1.8rem",
                fontWeight: "800",
                color: white,
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
              }}
            >
              CAR RENTAL
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  background: "rgba(255, 255, 255, 0.15)",
                  padding: "0.1rem 0.5rem",
                  borderRadius: "4px",
                  marginLeft: "0.5rem",
                  fontSize: "0.85em",
                  fontWeight: "700",
                }}
              >
                NAIJA
              </span>
            </h1>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        {isMobile && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "transparent",
              border: "none",
              color: white,
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
              zIndex: 1001,
            }}
            aria-label="Toggle navigation"
          >
            <div
              style={{
                width: "24px",
                height: "2px",
                background: white,
                position: "relative",
                transform: expanded ? "rotate(45deg)" : "rotate(0)",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  background: white,
                  position: "absolute",
                  top: expanded ? "0" : "-8px",
                  left: "0",
                  opacity: expanded ? "0" : "1",
                  transition: "all 0.3s ease",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  background: white,
                  position: "absolute",
                  top: expanded ? "0" : "8px",
                  left: "0",
                  transform: expanded ? "rotate(90deg)" : "rotate(0)",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          </button>
        )}

        {/* Navigation Links - Desktop */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                style={getNavItemStyle(item.path)}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && expanded && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${navyBlue} 0%, ${lightNavy} 100%)`,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            gap: "1.5rem",
            opacity: expanded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                color: white,
                fontSize: "1.5rem",
                fontWeight: location.pathname === item.path ? "600" : "500",
                textDecoration: "none",
                padding: "0.7rem 1.5rem",
                borderRadius: "8px",
                width: "80%",
                textAlign: "center",
                background: location.pathname === item.path
                  ? "rgba(255, 255, 255, 0.15)"
                  : "transparent",
                transition: "all 0.3s ease",
              }}
              onClick={() => setExpanded(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;