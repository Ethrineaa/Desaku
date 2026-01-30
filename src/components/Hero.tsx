import "../styles/Hero.css";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Selamat Datang di Desa Sukamaju</h1>
        <p className="hero-subtitle">
          Nikmati keindahan alam dan keramahan masyarakat lokal
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">Jelajahi Sekarang</button>
          <button className="btn btn-secondary">Pelajari Lebih Lanjut</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>5000+</h3>
            <p>Penduduk</p>
          </div>
          <div className="stat">
            <h3>150+</h3>
            <p>Hektar Lahan</p>
          </div>
          <div className="stat">
            <h3>25+</h3>
            <p>Tahun Berdiri</p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>
          <FaArrowDown /> Scroll untuk info lebih
        </span>
      </div>
    </section>
  );
}
