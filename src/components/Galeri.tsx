import { useState } from "react";
import "../styles/Galeri.css";
import { FaTimes } from "react-icons/fa";

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: "Pemandangan Desa Pagi Hari", category: "Alam" },
    { id: 2, title: "Panen Raya Padi", category: "Pertanian" },
    { id: 3, title: "Upacara Adat Setahun Sekali", category: "Budaya" },
    { id: 4, title: "Pasar Tradisional Desa", category: "Kegiatan" },
    { id: 5, title: "Gedung Sekolah Desa", category: "Fasilitas" },
    { id: 6, title: "Lapangan Olahraga Desa", category: "Fasilitas" },
    { id: 7, title: "Jalan Utama Desa", category: "Infrastruktur" },
    { id: 8, title: "Rumah Adat Sukamaju", category: "Budaya" },
  ];

  return (
    <section className="galeri" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Galeri Desa</h2>
          <p>Momen-momen indah dari kehidupan desa kami</p>
        </div>

        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="gallery-image-placeholder">
                {" "}
                <span className="image-number">{image.id}</span>
              </div>
              <div className="gallery-info">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <div className="modal-image">
                <span>Foto #{selectedImage}</span>
              </div>
              <h3>{images[selectedImage - 1]?.title}</h3>
              <p>{images[selectedImage - 1]?.category}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
