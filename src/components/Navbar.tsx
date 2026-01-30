import { useState } from "react";
import "../styles/Navbar.css";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">
            <FaHome />
          </span>
          Desa Sukamaju
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Beranda
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              Tentang
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
              Galeri
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
