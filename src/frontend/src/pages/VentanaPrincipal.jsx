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
              className="bg-black py-2.5 px-[43px] border-2 border-solid border-[#00C850] text-[#00FF00] text-xl font-bold hover:bg-[#00C850] hover:text-black transition-all"
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
            {/* Imagen izquierda */}
            <img
              src="https://thumbs.readings.com.au/u9diI-hmUw1vThxoynhWtG_vpqw=/0x500/https://readings-v4-production.s3.amazonaws.com/assets/527/bd9/d2f/527bd9d2faf684fca03c52fe2dbc296a1d694288/978150674604320250115-2-o8yoxx.jpg" // Pon aquí tu URL de imagen
              alt="Imagen lateral izquierda"
              className="w-[270px] h-[470px] rounded-lg object-cover"
            />

            {/* Texto central */}
            <div className="flex-1 px-16">
              <h3 className="text-white text-2xl font-bold mb-4">
                "Donde el poder del juego nunca se detiene"
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Explora el arsenal definitivo: videojuegos extremos, tecnología
                letal y ofertas diseñadas para verdaderos gamers.
              </p>
            </div>

            {/* Imagen derecha */}
            <img
              src="https://media.es.wired.com/photos/64664f32a566376ee967bc31/16:9/w_1280,c_limit/MortalKombat1.jpg" // Pon aquí tu URL de imagen
              alt="Imagen lateral derecha"
              className="w-[400px] h-[450px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-3 gap-[129px] mb-14 px-8">
          {/* Card 1 */}
          <div
            className="bg-[#000000CC] py-[22px] px-[1px] rounded-[14px] border border-solid border-[#00C8504D] flex flex-col items-center"
            style={{
              boxShadow: "0px 0px 30px #00FF001A",
            }}
          >
            <img
              src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/KHQRTCILZAVT1654115190478.jpg" // Pon aquí tu URL de imagen
              alt="Imagen Card 1"
              className="w-[350px] h-[250px] mb-5 object-cover"
            />
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#000000CC] py-[23px] px-[1px] rounded-[14px] border border-solid border-[#00C8504D] flex flex-col items-center"
            style={{
              boxShadow: "0px 0px 30px #00FF001A",
            }}
          >
            <img
              src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/851850/capsule_616x353.jpg?t=1769139697" // Pon aquí tu URL de imagen
              alt="Imagen Card 2"
              className="w-[350px] h-[250px] mb-[18px] object-cover"
            />
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#000000CC] py-[22px] px-[1px] rounded-[14px] border border-solid border-[#00C8504D] flex flex-col items-center"
            style={{
              boxShadow: "0px 0px 30px #00FF001A",
            }}
          >
            <img
              src="https://i.3djuegos.com/juegos/18541/resident_evil_4_remake/fotos/ficha/resident_evil_4_remake-5789986.jpg" // Pon aquí tu URL de imagen
              alt="Imagen Card 3"
              className="w-[350px] h-[250px] mb-5 object-cover"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-[71px]">
          <Link
            to="/generos"
            className="bg-black w-[248px] py-2.5 px-[17px] flex items-center gap-4 rounded-lg border border-solid border-[#05DF72] hover:bg-[#05DF72] hover:text-black transition-all"
            style={{
              boxShadow: "0px 0px 5px #00FF001A",
            }}
          >
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
