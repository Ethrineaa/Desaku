import "../styles/ProfilDesa.css";
import { GiWheat } from "react-icons/gi";
import {
  FaPaintBrush,
  FaHospital,
  FaBook,
  FaRoad,
  FaMountain,
  FaCamera,
} from "react-icons/fa";

export default function ProfilDesa() {
  const features = [
    {
      icon: <GiWheat className="feature-icon" />,
      title: "Pertanian Organik",
      description:
        "Produksi pertanian berkualitas tinggi dengan metode organik yang berkelanjutan",
    },
    {
      icon: <FaPaintBrush className="feature-icon" />,
      title: "Budaya Lokal",
      description:
        "Kekayaan budaya dan tradisi yang masih terjaga dengan baik hingga saat ini",
    },
    {
      icon: <FaHospital className="feature-icon" />,
      title: "Fasilitas Kesehatan",
      description:
        "Pusat kesehatan masyarakat dengan tenaga medis profesional dan berpengalaman",
    },
    {
      icon: <FaBook className="feature-icon" />,
      title: "Pendidikan Berkualitas",
      description:
        "Sekolah-sekolah dengan kurikulum nasional dan guru-guru berdedikasi tinggi",
    },
    {
      icon: <FaRoad className="feature-icon" />,
      title: "Infrastruktur Baik",
      description:
        "Jalan yang terawat dan infrastruktur desa yang modern dan aman",
    },
    {
      icon: <FaMountain className="feature-icon" />,
      title: "Alam Asri",
      description:
        "Pemandangan alam yang indah dengan udara segar dan lingkungan yang nyaman",
    },
  ];

  return (
    <section className="profil-desa" id="about">
      <div className="container">
        <div className="section-header">
          <h2>Tentang Desa Sukamaju</h2>
          <p>Kenali lebih dekat keunggulan dan potensi desa kami</p>
        </div>

        <div className="profil-intro">
          <div className="profil-text">
            <h3>Desa Sukamaju - Rumah yang Penuh Makna</h3>
            <p>
              Desa Sukamaju adalah sebuah desa yang terletak di kaki gunung yang
              indah. Dengan populasi lebih dari 5000 jiwa, desa ini telah
              berkembang menjadi komunitas yang solid dan saling mendukung.
            </p>
            <p>
              Kami bangga dengan tradisi, nilai-nilai kegotongan royongan, dan
              komitmen kami untuk pembangunan berkelanjutan yang menguntungkan
              semua pihak.
            </p>
          </div>
          <div className="profil-image">
            <div className="image-placeholder">
              <FaCamera />
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
