import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Accesorios() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-8 py-10">

        {/* Encabezado */}
        <h1 className="text-[#05DF72] text-3xl font-bold mb-6 text-center">
          🎯 Accesorios 🎯
        </h1>
        <p className="text-center text-[#7AF1A7] mb-10">
          Controles, auriculares y accesorios gaming
        </p>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Producto 1 */}
          <div className="bg-[#000000E3] rounded-[14px] border border-[#00C8504D] p-4 text-[#B8F7CF]">
            <img
              src="https://m.media-amazon.com/images/I/71pfvlQYWeL.jpg"
              alt="Auriculares Asus TUF Gaming"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold mt-3 text-white">Asus TUF Gaming H3</h2>
            <p className="text-sm text-[#7AF1A7]">Auriculares multiplataforma con micrófono</p>
            <p className="text-[#05DF72] text-lg font-bold mt-2">s/241.99</p>
            <button
              className="mt-4 w-full text-black font-bold text-sm py-2 rounded-lg border border-[#05DF72]"
              style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
              onClick={() => navigate("/producto/1")}
            >
              🔥 AGREGAR AL CARRITO 🔥
            </button>
          </div>

          {/* Producto 2 */}
          <div className="bg-[#000000E3] rounded-[14px] border border-[#00C8504D] p-4 text-[#B8F7CF]">
            <img
              src="https://gamersecuador.store/wp-content/uploads/2022/12/PS5_camo_web1_n.png"
              alt="Control PS5 DualSense"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold mt-3 text-white">Control PS5 DualSense</h2>
            <p className="text-sm text-[#7AF1A7]">Inalámbrico con vibración háptica</p>
            <p className="text-[#05DF72] text-lg font-bold mt-2">s/299.99</p>
            <button
              className="mt-4 w-full text-black font-bold text-sm py-2 rounded-lg border border-[#05DF72]"
              style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
              onClick={() => navigate("/producto/2")}
            >
              🔥 AGREGAR AL CARRITO 🔥
            </button>
          </div>

          {/* Producto 3 */}
          <div className="bg-[#000000E3] rounded-[14px] border border-[#00C8504D] p-4 text-[#B8F7CF]">
            <img
              src="https://rayotec.pe/wp-content/uploads/2023/10/SHIVA-WHITE.jpg"
              alt="teclado dragon"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold mt-3 text-white">teclado mecanico</h2>
            <p className="text-sm text-[#7AF1A7]">Series X/S, Bluetooth</p>
            <p className="text-[#05DF72] text-lg font-bold mt-2">s/279.99</p>
            <button
              className="mt-4 w-full text-black font-bold text-sm py-2 rounded-lg border border-[#05DF72]"
              style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
              onClick={() => navigate("/producto/3")}
            >
              🔥 AGREGAR AL CARRITO 🔥
            </button>
          </div>

          {/* Producto 4 */}
          <div className="bg-[#000000E3] rounded-[14px] border border-[#00C8504D] p-4 text-[#B8F7CF]">
            <img
              src="https://www.impacto.com.pe/storage/products/lg/173842861020218.webp"
              alt="Teclado Redragon RGB"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold mt-3 text-white"></h2>
            <p className="text-sm text-[#7AF1A7]">Monitor ASUS 24plg</p>
            <p className="text-[#05DF72] text-lg font-bold mt-2">s/1994.99</p>
            <button
              className="mt-4 w-full text-black font-bold text-sm py-2 rounded-lg border border-[#05DF72]"
              style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
              onClick={() => navigate("/producto/4")}
            >
              🔥 AGREGAR AL CARRITO 🔥
            </button>
          </div>

          {/* Producto 5 */}
          <div className="bg-[#000000E3] rounded-[14px] border border-[#00C8504D] p-4 text-[#B8F7CF]">
            <img
              src="https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4914/PMP20000400347/full_image-1.jpeg"
              alt="Mouse Logitech G203"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold mt-3 text-white">Mouse Logitech G203 Lightsync</h2>
            <p className="text-sm text-[#7AF1A7]">RGB, 8000 DPI, ergonómico</p>
            <p className="text-[#05DF72] text-lg font-bold mt-2">s/89.99</p>
            <button
              className="mt-4 w-full text-black font-bold text-sm py-2 rounded-lg border border-[#05DF72]"
              style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
              onClick={() => navigate("/producto/5")}
            >
              🔥 AGREGAR AL CARRITO 🔥
            </button>
          </div>

          {/* Producto 6 */}
          <div className="bg-[#000000E3] rounded-[14px] border border-[#00C8504D] p-4 text-[#B8F7CF]">
            <img
              src="https://tech.com.sv/wp-content/uploads/2021/10/HX-MICQC-BK-1.png"
              alt="Micrófono HyperX QuadCast"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold mt-3 text-white">Micrófono HyperX QuadCast</h2>
            <p className="text-sm text-[#7AF1A7]">USB, condensador, RGB</p>
            <p className="text-[#05DF72] text-lg font-bold mt-2">s/449.99</p>
            <button
              className="mt-4 w-full text-black font-bold text-sm py-2 rounded-lg border border-[#05DF72]"
              style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
              onClick={() => navigate("/producto/6")}
            >
              🔥 AGREGAR AL CARRITO 🔥
            </button>
          </div>

          {/* Producto 7 */}
          <div className="bg-[#000000E3] rounded-[14px] border border-[#00C8504D] p-4 text-[#B8F7CF]">
            <img
              src="https://www.dreiztgamer.com/cdn/shop/files/MPG205147_3_a3653afc-f1eb-42e0-92b6-cf1ac71d2ed8.jpg?v=1701712970&width=1100"
              alt="Mousepad RGB XL"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="font-bold mt-3 text-white">Mousepad RGB XL Gamer</h2>
            <p className="text-sm text-[#7AF1A7]">Grande, base antideslizante, iluminación LED</p>
            <p className="text-[#05DF72] text-lg font-bold mt-2">s/59.99</p>
            <button
              className="mt-4 w-full text-black font-bold text-sm py-2 rounded-lg border border-[#05DF72]"
              style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
              onClick={() => navigate("/producto/7")}
            >
              🔥 AGREGAR AL CARRITO 🔥
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Accesorios;
