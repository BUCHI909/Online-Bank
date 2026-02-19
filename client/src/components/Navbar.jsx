import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo & Slogan */}
      <div className="logo-container">
        <h1 className="logo">
          Genesis <span className="logo-icon"><FaUniversity /></span> Bank
        </h1>
        <p className="slogan">The origin and beginning of wealth & income</p>
      </div>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); navigate("/"); }}>Home</a>
        <a onClick={() => { document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Features</a>
        <a onClick={() => { document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}>Testimonials</a>
        <a onClick={() => { navigate("/login"); setMenuOpen(false); }}>Login</a>
        <a className="nav-btn" onClick={() => { navigate("/register"); setMenuOpen(false); }}>
          Open Account
        </a>
      </div>

      {/* Hamburger */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
