import { Link, useNavigate } from "react-router-dom";

function Categorias() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const categories = [
    {
      id: 1,
      title: "🎯 VIDEOJUEGOS ÉPICOS",
      description: "Lanzamientos brutales y clásicos letales",
      products: 10,
      badge: "⚡ POPULAR ⚡",
      badgeColor: "bg-[#00C95033] border-[#05DF72] text-[#BAF351]",
      gradient: "linear-gradient(180deg, #00C850, #99E500)",
      image: "https://wallpapers.com/images/hd/epic-game-collage-7ci1bc5qu7izo36i.jpg",
    },
    {
      id: 2,
      title: "⚡ ACCESORIOS EXTREMOS",
      description: "Controles • Auriculares • Gear Pro",
      products: 7,
      badge: null,
      gradient: "linear-gradient(180deg, #00A63D, #00BC7C)",
      image: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2023/01/23/63ce981ba00d9.jpeg",
    },
    {
      id: 3,
      title: "🎮 CONSOLAS LETALES",
      description: "PlayStation • Xbox • Nintendo Switch",
      products: 6,
      badge: "⚡ POPULAR ⚡",
      badgeColor: "bg-[#00C95033] border-[#05DF72] text-[#BAF351]",
      gradient: "linear-gradient(180deg, #00A63D, #7CCE00)",
      image: "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(75):max_bytes(102400)/https://assets.iprofesional.com/assets/jpg/2020/02/490609.jpg",
    },
    {
      id: 4,
      title: "💻 PC GAMING OVERKILL",
      description: "Componentes militares y periféricos elite",
      products: 7,
      badge: "🔥 NUEVO 🔥",
      badgeColor: "bg-[#FB2C3633] border-[#FF6366] text-[#FFA1A2]",
      gradient: "linear-gradient(180deg, #00C850, #7CCE00)",
      image: "https://cdn.shopify.com/s/files/1/0098/7247/4167/files/pc_gaming_con_setup_de_luces_led.jpg?v=1630513725",
    },
  ];

  return (
    <div className="min-h-screen bg-black">

      {/* HEADER */}
      <header
        className="flex items-center justify-between py-4 px-[79px] border-b border-[#05DF7240]"
        style={{
          background: "linear-gradient(180deg, #000000, #0B1220, #000000)",
          boxShadow: "0 0 20px #05DF7215",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-[41px] py-2 px-[9px] rounded-[10px] border border-[#05DF72] shadow-[0_0_12px_#05DF7266]"
            style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
          >
            <div className="w-6 h-6 rounded-[10px] bg-[#05DF72] shadow-[0_0_8px_#05DF72]" />
          </div>

          <div>
            <h1 className="text-[#05DF72] text-xl font-bold drop-shadow-[0_0_6px_#05DF72]">
              💀 OVERKILL ARENA 💀
            </h1>
            <p className="text-[#B8F7CF] text-xs tracking-wide">⚡ GAMING EXTREMO ⚡</p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-[76px]">
          <div className="relative w-[240px]">
            <input
              type="text"
              placeholder="🎯 BUSCAR ARSENAL LETAL..."
              className="w-full bg-[#000000CC] h-10 px-3 rounded-lg border border-[#00C85055] text-[#05DF72] text-sm shadow-[0_0_8px_#05DF721A] placeholder-[#05DF72] focus:outline-none focus:ring-2 focus:ring-[#05DF72]"
            />
          </div>

          <button
            className="w-11 h-11 rounded-lg border border-[#05DF72] flex items-center justify-center shadow-[0_0_10px_#05DF7244] hover:scale-105 transition"
            style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
          >
            <div className="w-4 h-4 bg-white rounded shadow-[0_0_6px_white]" />
          </button>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((_, i) => (
            <button
              key={i}
              className="bg-transparent w-11 h-11 p-3.5 rounded-lg border border-[#00C8504D] flex items-center justify-center shadow-[0_0_10px_#05DF721A] hover:border-[#05DF72] hover:shadow-[0_0_12px_#05DF72] transition"
            >
              <div className="w-4 h-4 bg-[#05DF72] rounded shadow-[0_0_8px_#05DF72]" />
            </button>
          ))}

          <div className="w-11 h-11 bg-[#05DF72] rounded-full shadow-[0_0_15px_#05DF72]" />

          <button
            onClick={handleLogout}
            className="bg-black px-[18px] py-3 rounded-lg border border-[#05DF72] text-[#05DF72] text-sm font-bold hover:bg-[#05DF72] hover:text-black transition-all shadow-[0_0_10px_#05DF7222]"
          >
            ⚡ LOGOUT ⚡
          </button>

          <Link
            to="/register"
            className="px-[13px] py-3 rounded-lg border border-[#05DF72] text-black text-sm font-bold hover:brightness-110 transition shadow-[0_0_10px_#05DF7244]"
            style={{ background: "linear-gradient(180deg, #00A63D, #7CCE00)" }}
          >
            💀 REGISTER 💀
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="container mx-auto px-8 py-10">

        {/* TITLE */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[#05DF72] text-3xl font-bold drop-shadow-[0_0_8px_#05DF72]">🎯 Videojuegos 🎯</h2>
            <p className="text-[#B8F7CF] text-base">Descubre los últimos lanzamientos y clásicos eternos</p>
          </div>

          <div className="flex gap-3">
            <button className="bg-black w-[150px] py-3 rounded-lg border border-[#00C85080] text-[#05DF72] font-bold hover:bg-[#05DF72] hover:text-black shadow-[0_0_12px_#05DF721A] transition">
              💀 VER TODO 💀
            </button>

            <Link
              to="/ventana-principal"
              className="bg-black w-[170px] py-3 rounded-lg border border-[#00C85080] text-[#05DF72] font-bold text-center hover:bg-[#05DF72] hover:text-black shadow-[0_0_12px_#05DF721A] transition"
            >
              ⚡ VOLVER AL HQ ⚡
            </Link>
          </div>
        </div>

        {/* CATEGORY TITLE */}
        <div className="text-center mb-6">
          <h3 className="text-[#05DF72] text-3xl font-bold drop-shadow-[0_0_8px_#05DF72]">🎯 CATEGORÍAS DE DESTRUCCIÓN 🎯</h3>
          <p className="text-[#B8F7CF]">ENCUENTRA TU ARSENAL LETAL NAVEGANDO POR NUESTRAS CATEGORÍAS ESPECIALIZADAS</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-[#000000CC] rounded-[14px] border border-[#00C8504D] shadow-[0_0_30px_#05DF721A] hover:shadow-[0_0_40px_#05DF7233] overflow-hidden transition-all"
            >
              {/* IMAGE HEADER — AHORA AUTOMÁTICO */}
              <div
                className="relative p-3 flex items-center justify-center"
                style={{ background: category.gradient }}
              >
                {/* BADGE */}
                <div className="absolute top-3 left-3">
                  {category.badge && (
                    <button
                      className={`flex items-center px-2 py-1 rounded-lg border ${category.badgeColor} shadow-[0_0_8px_#05DF721A]`}
                    >
                      <div className="w-3 h-3 bg-current rounded-lg" />
                      <span className="text-xs font-bold ml-2">{category.badge}</span>
                    </button>
                  )}
                </div>

                {/* BUTTON */}
                <div className="absolute top-3 right-3">
                  <button className="bg-[#00000099] w-[41px] p-2 rounded-full border border-[#00C85080] shadow-[0_0_10px_#05DF7233] hover:scale-110 transition">
                    <div className="w-6 h-6 bg-white rounded-full shadow-[0_0_8px_white]" />
                  </button>
                </div>

                {/* IMAGE — COMPLETA, SIN CORTES */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-auto max-h-[260px] object-contain rounded-xl shadow-lg"
                  style={{ filter: "drop-shadow(0px 0px 12px #00ff00aa)" }}
                />
              </div>

              {/* INFO */}
              <div className="p-6">
                <h4 className="text-white font-bold mb-2">{category.title}</h4>
                <p className="text-[#D9B1FF] text-sm mb-3">{category.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-[#C17AFF] text-xs">{category.products} productos</span>
                  <button className="text-[#C17AFF] text-sm py-[9px] px-3 rounded-lg hover:bg-[#C17AFF]/20 hover:text-white transition-all">
                    Ver todo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TAGS */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-3 flex-wrap justify-center">
            {["🎮 ACCIÓN", "🏎️ CARRERAS", "⚔️ RPG"].map((t, i) => (
              <span key={i} className="px-[17px] py-2.5 rounded-lg border border-[#AC46FF4D] text-[#C17AFF] text-xs shadow-[0_0_10px_#AC46FF33]">
                {t}
              </span>
            ))}
          </div>

          <div className="text-[#C17AFF] text-base font-bold tracking-wide">ETIQUETAS POPULARES</div>

          <div className="flex gap-2 flex-wrap justify-center">
            {["🔫 FPS", "👾 2024", "🏆 OFERTAS", "💀 MULTIJUGADOR", "🎯 AVENTURA", "🔥 DEPORTES", "⚡ INDIE"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="px-[13px] py-[7px] rounded-lg border border-[#AC46FF4D] text-[#C17AFF] text-xs hover:bg-[#AC46FF33] transition-all shadow-[0_0_8px_#AC46FF22]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Categorias;
