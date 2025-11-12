import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [token, setToken] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const particles = [];

    const STAR_COUNT = 100;
    const GALAXY_RADIUS = 50;

    // Inicializar estrellas
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: Math.random() * 1 + 0.5, // caida
        radius: Math.random() * 2 + 1,
        color: ["#fff","#f0f","#0ff","#ff0"][Math.floor(Math.random()*4)]
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.8)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar estrellas
      stars.forEach((s, i) => {
        s.y += s.vy;
        if (s.y > canvas.height) {
          s.y = -10;
          s.x = Math.random() * canvas.width;
        }

        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2);
        ctx.fill();

        // Detectar "colisiones" cercanas para galaxias
        for (let j = i+1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s.x - s2.x;
          const dy = s.y - s2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < GALAXY_RADIUS) {
            particles.push({
              x: (s.x + s2.x)/2,
              y: (s.y + s2.y)/2,
              radius: Math.random()*3+2,
              color: ["#ff0","#0ff","#f0f","#fff"][Math.floor(Math.random()*4)],
              vx: (Math.random()-0.5)*2,
              vy: (Math.random()-0.5)*2,
              life: 30
            });
          }
        }
      });

      // Dibujar partículas de choque/galaxias
      for (let i = particles.length-1; i >=0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.radius *= 0.95;
        p.life -= 1;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
        ctx.fill();
        if (p.life <= 0 || p.radius < 0.5) particles.splice(i, 1);
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <div className="relative z-10 p-8 text-center bg-black/60 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-4xl font-extrabold mb-4">Bienvenido a Overkill Arena 🌌</h1>
        {token && (
          <>
            <p className="text-green-400 text-2xl">Has iniciado sesión exitosamente</p>
            <button
              onClick={handleLogout}
              className="px-6 py-3 mt-4 bg-red-600 hover:bg-red-800 rounded-lg font-bold transition-colors duration-300"
            >
              Cerrar Sesión
            </button>
          </>
        )}
        {!token && (
          <>
            <p className="text-red-400 text-2xl">Parece que no has iniciado sesión</p>
            <Link
              to="/login"
              className="inline-block px-6 py-3 mt-4 bg-blue-500 hover:bg-blue-700 rounded-lg font-bold transition-colors duration-300"
            >
              Ir a Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
