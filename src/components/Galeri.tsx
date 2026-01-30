import { useState } from "react";
import "../styles/Galeri.css";
import { FaTimes } from "react-icons/fa";

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      title: "Pemandangan Desa Pagi Hari",
      category: "Alam",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
      title: "Panen Raya Padi",
      category: "Pertanian",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1200&q=80",
      title: "Upacara Adat Setahun Sekali",
      category: "Budaya",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      title: "Pasar Tradisional Desa",
      category: "Kegiatan",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
      title: "Gedung Sekolah Desa",
      category: "Fasilitas",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=80",
      title: "Lapangan Olahraga Desa",
      category: "Fasilitas",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80",
      title: "Jalan Utama Desa",
      category: "Infrastruktur",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
      title: "Rumah Adat Sukamaju",
      category: "Budaya",
    },
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
                <img src={image.src} alt={image.title} loading="lazy" />
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
                <img
                  src={images[selectedImage - 1]?.src}
                  alt={images[selectedImage - 1]?.title}
                  loading="lazy"
                />
              </div>
              ”<h3>{images[selectedImage - 1]?.title}</h3>
              <p>{images[selectedImage - 1]?.category}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
