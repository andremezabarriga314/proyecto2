import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlackHoleFX({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2600);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      
      {/* 🌌 Galaxia de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#12002b,black_70%)]" />

      {/* 🌀 Disco de acreción */}
      <div className="absolute w-[420px] h-[420px] rounded-full 
        bg-[conic-gradient(from_0deg,#7f00ff,#00e5ff,#7f00ff)]
        blur-xl opacity-70 animate-spin-slow">
      </div>

      {/* 🕳️ Agujero negro */}
      <div className="absolute w-52 h-52 rounded-full bg-black 
        shadow-[0_0_120px_60px_rgba(140,0,255,0.6)] 
        animate-blackhole-pulse">
      </div>

      {/* 🌠 Distorsión espacial */}
      <div className="absolute inset-0 animate-warp opacity-40 
        bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)]
        [background-size:18px_18px]">
      </div>

      {/* Texto */}
      <p className="absolute bottom-20 text-purple-300 text-lg tracking-widest animate-fadeOut">
        entrando al núcleo…
      </p>
    </div>
  );
}

function Home() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) setToken(storedToken);
  }, []);

  return (
    <>
      {loading && <BlackHoleFX onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

          {/* 🌌 Fondo galáctico realista */}
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,#1a0033,#000_70%)]" />

          {/* Contenido */}
          <div className="relative z-10 p-12 text-center 
            bg-black/40 backdrop-blur-2xl 
            rounded-3xl border border-purple-500/30
            shadow-[0_0_40px_10px_rgba(160,0,255,0.4)]
            animate-fadeIn">

            <h1 className="text-5xl font-extrabold text-purple-300 drop-shadow-[0_0_15px_#b300ff]">
              Overkill Arena
            </h1>

            {token ? (
              <>
                <p className="mt-6 text-green-400 text-xl">
                  Acceso confirmado al núcleo
                </p>
                <button
                  onClick={() => {
                    localStorage.removeItem("authToken");
                    setToken(null);
                  }}
                  className="mt-6 px-8 py-3 bg-red-600/80 hover:bg-red-700 
                    rounded-xl font-bold transition shadow-lg">
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <p className="mt-6 text-red-400 text-xl">
                  No autorizado
                </p>
                <Link
                  to="/login"
                  className="inline-block mt-6 px-8 py-3 
                    bg-blue-600/80 hover:bg-blue-800 
                    rounded-xl font-bold transition shadow-lg">
                  Ingresar
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
