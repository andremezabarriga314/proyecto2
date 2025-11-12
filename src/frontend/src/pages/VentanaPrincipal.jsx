import { Link } from "react-router-dom";
import Header from "../components/Header";

function VentanaPrincipal() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-8 py-10">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-[#05DF72] text-3xl font-bold mb-3">
            🎯 Videojuegos 🎯
          </h2>

          <div className="flex items-center justify-between">
            <p className="text-[#B8F7CF] text-2xl">
              Descubre las reseñas y opiniones de nuestros clientes
            </p>

            <Link
              to="/categorias"
              className="bg-black py-2.5 px-[43px] border-2 border-solid border-[#00C850]
                         text-[#00FF00] text-xl font-bold hover:bg-[#00C850] hover:text-black
                         transition-all"
            >
              VER TODO
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div
          className="rounded-2xl border border-solid border-[#00FF00] p-8 mb-12"
          style={{
            background: "linear-gradient(180deg, #000000, #101727, #000000)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Primera Imagen (PlayStation Store) */}
            <img 
              src="https://image.api.playstation.com/cdn/UP1018/CUSA03589_00/ezdXAsaNqjRSG19ujCjT1p1KqoI67wDO.png?w=440"
              alt="Logo de PlayStation Store"
              className="w-[209px] h-[278px] rounded-lg object-cover" 
            />

            <div className="flex-1 px-16">
              <h3 className="text-white text-2xl font-bold mb-4">
                "Donde el poder del juego nunca se detiene"
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Explora el arsenal definitivo: videojuegos extremos, tecnología
                letal y ofertas diseñadas para verdaderos gamers.
              </p>
            </div>

            {/* Segunda Imagen (Reemplazo del div de 266x281) */}
            <img 
              src="https://i.pinimg.com/originals/7e/e5/e3/7ee5e34f8415793b62e243d88430b042.jpg" 
              alt="Arte de personaje verde y azul" 
              className="w-[266px] h-[281px] rounded-lg object-cover" 
            />

          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-3 gap-[129px] mb-14 px-8">
          <div
            className="bg-[#000000CC] py-[22px] px-[1px] rounded-[14px] border border-solid border-[#00C8504D]
                       flex flex-col items-center"
            style={{ boxShadow: "0px 0px 30px #00FF001A" }}
          >
            <div className="w-12 h-12 bg-[#05DF72] rounded-full mb-[17px]" />
            <div className="w-[217px] h-[18px] bg-[#05DF72] rounded mb-5" />
            <div className="w-[169px] h-[45px] bg-gradient-to-r from-[#00A63D] to-[#7CCE00] rounded" />
          </div>

          <div
            className="bg-[#000000CC] py-[23px] px-[1px] rounded-[14px] border border-solid border-[#00C8504D]
                       flex flex-col items-center"
            style={{ boxShadow: "0px 0px 30px #00FF001A" }}
          >
            <div className="w-12 h-12 bg-[#05DF72] rounded-full mb-[17px]" />
            <div className="w-[225px] h-[18px] bg-[#05DF72] rounded mb-[18px]" />
            <div className="w-40 h-[45px] bg-gradient-to-r from-[#00A63D] to-[#7CCE00] rounded" />
          </div>

          <div
            className="bg-[#000000CC] py-[22px] px-[1px] rounded-[14px] border border-solid border-[#00C8504D]
                       flex flex-col items-center"
            style={{ boxShadow: "0px 0px 30px #00FF001A" }}
          >
            <div className="w-12 h-12 bg-[#05DF72] rounded-full mb-[17px]" />
            <div className="w-[194px] h-[18px] bg-[#05DF72] rounded mb-5" />
            <div className="w-[211px] h-[45px] bg-gradient-to-r from-[#00A63D] to-[#7CCE00] rounded" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-[71px]">
          <Link
            to="/generos"
            className="bg-black w-[248px] py-2.5 px-[17px] flex items-center gap-4 rounded-lg
                       border border-solid border-[#05DF72] hover:bg-[#05DF72] hover:text-black transition-all"
            style={{ boxShadow: "0px 0px 5px #00FF001A" }}
          >
            <div className="w-4 h-4 bg-[#05DF72] rounded" />
            <span className="text-[#05DF72] text-sm font-bold hover:text-black">
              EXPLORAR TIENDA
            </span>
          </Link>

          <Link
            to="/categorias"
            className="w-[276px] py-2.5 px-[17px] flex items-center gap-4 rounded-lg border border-solid border-[#05DF72]"
            style={{
              background: "linear-gradient(180deg, #00A63D, #7CCE00)",
            }}
          >
            <div className="w-4 h-4 bg-black rounded" />
            <span className="text-black text-sm font-bold">
              VER CATEGORÍAS
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default VentanaPrincipal;