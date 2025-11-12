import React from 'react';

function ProductCard({ image, title, price, onClick }) {
  // Este es el JSX que renderiza la tarjeta del producto usando TailwindCSS.
  return (
    <div
      className="bg-[#1f1d36] rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-transform duration-300 cursor-pointer border border-[#4cc9f0] hover:border-[#7209b7]"
      onClick={onClick}
    >
      
      {/* Imagen del producto */}
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      
      <div className="p-5">
        {/* Título */}
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        
        {/* Precio */}
        <p className="text-2xl font-extrabold text-[#4cc9f0]">${price}</p>
        
        {/* Botón de Detalles */}
        <button className="mt-4 w-full bg-[#7209b7] hover:bg-[#5e0797] text-white font-bold py-2 px-4 rounded transition duration-300">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}

export default ProductCard;