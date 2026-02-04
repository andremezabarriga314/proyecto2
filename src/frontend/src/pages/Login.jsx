import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Función para convertir errores técnicos en mensajes amigables
  const getFriendlyErrorMessage = (errorMessage) => {
    const errorMap = {
      "Email no encontrado": "No encontramos una cuenta con ese correo electrónico. ¿Quieres crear una cuenta?",
      "Contraseña incorrecta": "La contraseña que ingresaste es incorrecta. Por favor, inténtalo de nuevo.",
      "Este usuario se registró con Google. Por favor, inicia sesión con Google.":
        "Esta cuenta fue creada con Google. Por favor, usa el botón 'Iniciar sesión con Google'.",
      "Failed to fetch": "No pudimos conectar con el servidor. Verifica tu conexión a internet.",
      "NetworkError": "Error de conexión. Por favor, verifica tu internet e inténtalo de nuevo.",
    };

    // Buscar coincidencia exacta o parcial
    for (const [key, value] of Object.entries(errorMap)) {
      if (errorMessage.includes(key)) {
        return value;
      }
    }

    // Mensaje genérico si no hay coincidencia
    return "Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Error al iniciar sesión");

      localStorage.setItem("authToken", data.data.token);
      navigate("/login-success");
    } catch (err) {
      setError(getFriendlyErrorMessage(err.message));
    }
  };

  // Fondo galáctico masculino
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const STAR_COUNT = 200;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 1 - 0.5,
        vy: Math.random() * 1 - 0.5,
        color: ["#00f", "#0ff", "#ff6600"][Math.floor(Math.random() * 3)],
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.9)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = s.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-white">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>

      <div className="relative z-10 w-full max-w-md p-10 bg-gray-900/90 border-2 border-blue-600 rounded-2xl shadow-[0_0_30px_rgba(0,128,255,0.7)]">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-blue-600 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-blue-600 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button className="w-full py-2 rounded-lg bg-blue-700 hover:bg-orange-600 font-bold text-white shadow-lg transition-all duration-300">
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center mt-4 text-blue-300">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="font-bold hover:text-orange-400">
            Regístrate
          </Link>
        </p>

        <div className="mt-6 flex items-center justify-center space-x-2">
          <span className="text-gray-400">O</span>
        </div>

        <a
          href={GOOGLE_AUTH_URL}
          className="mt-4 w-full inline-block text-center py-2 font-medium text-white bg-blue-600 hover:bg-orange-500 rounded-lg shadow-md"
        >
          Iniciar sesión con Google
        </a>
      </div>
    </div>
  );
}

export default Login;
