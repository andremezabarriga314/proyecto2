import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

function PCGaming() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: "https://www.bulltechstore.com/wp-content/smush-webp/2024/08/PC-Gamer-4060-Gaming-Rush-Super.jpg.webp",
      title: "PC Gamer RTX 4060",
      price: "1299",
    },
    {
      id: 2,
      image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-5800x-og.jpg",
      title: "PC Ryzen 7 5800X",
      price: "1499",
    },
    {
      id: 3,
      image: "https://media.falabella.com/falabellaPE/120630780_01/w=800,h=800,fit=pad",
      title: "PC Intel i7 13700K",
      price: "1699",
    },
    {
      id: 4,
      image: "https://media.falabella.com/falabellaPE/148492974_01/w=800,h=800,fit=pad",
      title: "PC RGB Ultra",
      price: "1899",
    },
    // --- Nuevas imágenes añadidas ---
    {
      id: 5,
      image: "https://media.falabella.com/falabellaPE/148488770_01/w=1500,h=1500,fit=pad",
      title: "Monitor Gamer Curvo", // Título de ejemplo
      price: "499", // Precio de ejemplo
    },
    {
      id: 6,
      image: "https://media.falabella.com/falabellaPE/145433765_01/w=1500,h=1500,fit=pad",
      title: "Laptop Gaming Potente", // Título de ejemplo
      price: "2199", // Precio de ejemplo
    },
    {
      id: 7,
      image: "https://media.falabella.com/falabellaPE/141777763_01/w=1500,h=1500,fit=pad",
      title: "Silla Gamer Ergonómica", // Título de ejemplo
      price: "299", // Precio de ejemplo
    },
    {
      id: 8,
      image: "https://rayotec.pe/wp-content/uploads/2025/11/PC-INTEL-7-TOP.jpg",
      title: "PC Intel i7 High-End", // Título de ejemplo
      price: "2500", // Precio de ejemplo
    },
    {
      id: 9,
      image: "https://rayotec.pe/wp-content/uploads/2025/11/M27Q2-ICE.png",
      title: "Monitor 27 QHD Gaming", // Título de ejemplo
      price: "550", // Precio de ejemplo
    },
    // --- Faltan 7 productos aquí (id 10 a id 16) ---
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] 
                 text-white font-sans relative overflow-hidden"
    >
      {/* Efecto de fondo con neón */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7209b7_0%,transparent_70%)] opacity-30 blur-3xl animate-pulse"></div>

      <Header />

      <div className="pt-28 pb-20 px-8 relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-14 text-[#4cc9f0] tracking-wider drop-shadow-[0_0_8px_#4cc9f0]">
          💻 Equipos Gamer 🔥
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onClick={() => navigate(`/detalle/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PCGaming;