import "../styles/Footer.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaLink,
  FaMobileAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <FaMapMarkerAlt /> Desa Sukamaju
            </h3>
            <p>Jalan Raya No. 123</p>
            <p>Kecamatan Bukit Jaya, Provinsi Jawa</p>
            <p>Kode Pos: 12345</p>
          </div>

          <div className="footer-section">
            <h3>
              <FaPhone /> Hubungi Kami
            </h3>
            <p>Telepon: (0274) 123-456</p>
            <p>Email: info@desakamaju.id</p>
            <p>WhatsApp: +62 812-3456-7890</p>
          </div>

          <div className="footer-section">
            <h3>
              <FaLink /> Link Penting
            </h3>
            <ul>
              <li>
                <a href="#home">Beranda</a>
              </li>
              <li>
                <a href="#about">Tentang Kami</a>
              </li>
              <li>
                <a href="#gallery">Galeri</a>
              </li>
              <li>
                <a href="#contact">Kontak</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>
              <FaMobileAlt /> Media Sosial
            </h3>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="X/Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Desa Sukamaju. Semua hak cipta dilindungi.</p>
          <p>
            Dibangun dengan <FaHeart className="heart" /> untuk kemajuan bersama
          </p>
        </div>
      </div>
    </footer>
  );
}
