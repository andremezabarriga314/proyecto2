import { Link } from "react-router-dom";
import Header from "../components/Header";

function Categorias() {
  const categories = [
    {
      id: 1,
      title: "🎯 VIDEOJUEGOS ÉPICOS",
      description: "Lanzamientos brutales y clásicos letales",
      products: 10,
      badge: "⚡ POPULAR ⚡",
      badgeColor: "bg-[#00C95033] border-[#05DF72] text-[#BAF351]",
      gradient: "linear-gradient(180deg, #00C850, #99E500)",
      route: "/generos",
    },
    {
      id: 2,
      title: "⚡ ACCESORIOS EXTREMOS",
      description: "Controles • Auriculares • Gear Pro",
      products: 7,
      badge: null,
      gradient: "linear-gradient(180deg, #00A63D, #00BC7C)",
      route: "/accesorios",
    },
    {
      id: 3,
      title: "🎮 CONSOLAS LETALES",
      description: "PlayStation • Xbox • Nintendo Switch",
      products: 6,
      badge: "⚡ POPULAR ⚡",
      badgeColor: "bg-[#00C95033] border-[#05DF72] text-[#BAF351]",
      gradient: "linear-gradient(180deg, #00A63D, #7CCE00)",
      route: "/generos",
    },
    {
      id: 4,
      title: "💻 PC GAMING OVERKILL",
      description: "Componentes militares y periféricos elite",
      products: 7,
      badge: "🔥 NUEVO 🔥",
      badgeColor: "bg-[#FB2C3633] border-[#FF6366] text-[#FFA1A2]",
      gradient: "linear-gradient(180deg, #00C850, #7CCE00)",
      route: "/pc-gaming",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020202] via-[#0a0f0a] to-[#050505] text-white">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-12 py-14">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 text-center md:text-left">
          <div>
            <h2 className="text-[#05DF72] text-4xl font-extrabold mb-2 drop-shadow-[0_0_6px_#05DF72]">
              🎯 Videojuegos 🎯
            </h2>
            <p className="text-[#B8F7CF] text-lg opacity-80">
              Descubre los últimos lanzamientos y clásicos eternos
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-4 mt-6 md:mt-0">
            <button
              className="bg-[#111] w-[150px] py-3 rounded-lg border border-[#05DF72] text-[#05DF72] font-semibold hover:bg-[#05DF72] hover:text-black transition-all shadow-[0_0_10px_#05DF72]"
            >
              💀 VER TODO 💀
            </button>
            <Link
              to="/ventana-principal"
              className="bg-[#111] w-[180px] py-3 rounded-lg border border-[#05DF72] text-[#05DF72] font-semibold hover:bg-[#05DF72] hover:text-black transition-all shadow-[0_0_10px_#05DF72] text-center"
            >
              ⚡ VOLVER AL HQ ⚡
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className="rounded-xl border border-[#05DF7240] overflow-hidden hover:border-[#05DF72] bg-[#0d0d0d] hover:shadow-[0_0_20px_#05DF72] transition-all"
            >
              <div
                className="h-[180px] flex items-center justify-center text-center"
                style={{ background: category.gradient }}
              >
                <h4 className="text-2xl font-bold text-black drop-shadow-[0_0_6px_#fff]">
                  {category.title}
                </h4>
              </div>

              <div className="p-5">
                {category.badge && (
                  <div
                    className={`inline-block px-3 py-1 mb-3 text-xs font-bold border rounded-lg ${category.badgeColor}`}
                  >
                    {category.badge}
                  </div>
                )}
                <p className="text-[#C17AFF] text-sm mb-3">
                  {category.description}
                </p>
                <div className="flex justify-between items-center text-[#BAF351]">
                  <span>{category.products} productos</span>
                  <span className="hover:underline cursor-pointer">
                    Ver todo →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tags Section */}
        <div className="text-center">
          <h3 className="text-[#C17AFF] text-xl font-semibold mb-5">
            ⚡ Etiquetas Populares ⚡
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["🎮 ACCIÓN", "/generos"],
              ["🏎️ CARRERAS", "/genero-carreras"],
              ["⚔️ RPG", "/generos"],
              ["🔫 FPS", "/genero-shooter"],
              ["👾 2024", "/generos"],
              ["🏆 OFERTAS", "/ofertas"],
              ["💀 MULTIJUGADOR", "/generos"],
              ["🎯 AVENTURA", "/generos"],
              ["🔥 DEPORTES", "/deporte"],
              ["⚡ INDIE", "/generos"],
            ].map(([label, link]) => (
              <Link
                key={label}
                to={link}
                className="px-4 py-2 rounded-lg border border-[#C17AFF66] text-[#C17AFF] text-sm hover:bg-[#C17AFF22] transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Categorias;
