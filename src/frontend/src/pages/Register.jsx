import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Función para convertir errores técnicos en mensajes amigables
  const getFriendlyErrorMessage = (errorMessage) => {
    const errorMap = {
      "Error al registrar usuario": "No pudimos crear tu cuenta. Por favor, inténtalo de nuevo.",
      "Unique constraint failed": "Ya existe una cuenta con ese correo electrónico. ¿Quieres iniciar sesión?",
      "duplicate key": "Ya existe una cuenta con ese correo electrónico. ¿Quieres iniciar sesión?",
      "email_key": "Ya existe una cuenta con ese correo electrónico. ¿Quieres iniciar sesión?",
      "Failed to fetch": "No pudimos conectar con el servidor. Verifica tu conexión a internet.",
      "NetworkError": "Error de conexión. Por favor, verifica tu internet e inténtalo de nuevo.",
      "Password": "La contraseña debe tener al menos 6 caracteres.",
      "Invalid email": "Por favor, ingresa un correo electrónico válido.",
    };

    // Buscar coincidencia exacta o parcial
    for (const [key, value] of Object.entries(errorMap)) {
      if (errorMessage.includes(key)) {
        return value;
      }
    }

    // Mensaje genérico si no hay coincidencia
    return "Ocurrió un error al crear tu cuenta. Por favor, inténtalo de nuevo.";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Error al registrar usuario");

      localStorage.setItem("authToken", data.data?.token || "dummy-token");
      navigate("/login-success");
    } catch (err) {
      setError(getFriendlyErrorMessage(err.message));
    }
  };

  // Fondo galáctico con estrellas chocando
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const STAR_COUNT = 100;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        color: ["#00f", "#0ff", "#ff6600"][Math.floor(Math.random() * 3)],
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.95)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar posición de estrellas y colisiones
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;

        // Rebote con bordes
        if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

        // Colisiones entre estrellas
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s2.x - s.x;
          const dy = s2.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < s.radius + s2.radius) {
            const tempVx = s.vx;
            const tempVy = s.vy;
            s.vx = s2.vx;
            s.vy = s2.vy;
            s2.vx = tempVx;
            s2.vy = tempVy;
          }
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = s.color;
        ctx.fill();
      }

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

      <div className="relative z-10 w-full max-w-md p-10 bg-gray-900/90 border-2 border-orange-600 rounded-2xl shadow-[0_0_30px_rgba(255,165,0,0.7)]">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">Crear una cuenta</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-orange-600 placeholder-orange-300 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-orange-600 placeholder-orange-300 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-orange-600 placeholder-orange-300 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button className="w-full py-2 rounded-lg bg-orange-700 hover:bg-blue-600 font-bold text-white shadow-lg transition-all duration-300">
            Registrarse
          </button>
        </form>

        <p className="text-center mt-4 text-orange-300">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="font-bold hover:text-blue-400">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
