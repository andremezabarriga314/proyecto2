import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Generos() {
  const navigate = useNavigate();

  return (
    <div style={styles.body}>
      <Header />

      <div style={styles.container}>

        {/* TITULO PRINCIPAL */}
        <h1 style={styles.titulo}>🎮 Videojuegos 🎮</h1>
        <p style={styles.subtexto}>Descubre las reseñas y testimonios de nuestros clientes</p>

        {/* CONTACTO */}
        <div style={styles.contacto}>
          <span>Contacto</span>
          <strong style={{ marginLeft: 8 }}>912875340</strong>
        </div>

        <hr style={styles.divisor} />

        {/* MÁS JUGADOS */}
        <h2 style={styles.seccionTitulo}>Más jugados</h2>

        <div style={styles.masJugados}>
          <img
            src="https://images.igdb.com/igdb/image/upload/t_cover_big/co67bv.png"
            style={styles.juegoImg}
            alt="Call of Duty"
          />
          <img
            src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1x3r.png"
            style={styles.juegoImg}
            alt="Assassin's Creed"
          />
        </div>

        {/* EXPLORA POR GÉNERO */}
        <h2 style={styles.seccionTitulo}>Explora por Género</h2>

        <div style={styles.generosGrid}>

          <div style={styles.generoCard} onClick={() => navigate("/producto/1")}>
            <div style={styles.iconCircle}>
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebcc4a6f-b16d-43d7-9a1d-e26fd3b2e571"
                alt="Accion"
                style={styles.iconImg}
              />
            </div>
            <h3 style={styles.generoTitle}>Acción</h3>
            <p style={styles.generoDesc}>Aventuras emocionantes</p>
            <span style={styles.generoGames}>3 juegos</span>
          </div>

          <div style={styles.generoCard} onClick={() => navigate("/producto/2")}>
            <div style={styles.iconCircle}>
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c949f3ee-c2f1-408d-9f45-05de91e40b95"
                alt="FPS"
                style={styles.iconImg}
              />
            </div>
            <h3 style={styles.generoTitle}>FPS</h3>
            <p style={styles.generoDesc}>Disparos en primera persona</p>
            <span style={styles.generoGames}>4 juegos</span>
          </div>

          <div style={styles.generoCard} onClick={() => navigate("/producto/3")}>
            <div style={styles.iconCircle}>
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/658de80b-968e-4c84-a090-f1134fbb1612"
                alt="Deportes"
                style={styles.iconImg}
              />
            </div>
            <h3 style={styles.generoTitle}>Deportes</h3>
            <p style={styles.generoDesc}>Deportes populares</p>
            <span style={styles.generoGames}>1 juego</span>
          </div>

          <div style={styles.generoCard} onClick={() => navigate("/producto/4")}>
            <div style={styles.iconCircle}>
              <img
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0b0f448-5ece-4c9e-b4ba-7017eb44b416"
                alt="Carreras"
                style={styles.iconImg}
              />
            </div>
            <h3 style={styles.generoTitle}>Carreras</h3>
            <p style={styles.generoDesc}>Velocidad y competición</p>
            <span style={styles.generoGames}>2 juegos</span>
          </div>

          {/* Sección adicional: Terror */}
          <div style={styles.generoCard} onClick={() => navigate("/producto/8")}>
            <div style={styles.iconCircle}>
              <img
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/co6p7b.png"
                alt="Terror"
                style={styles.iconImg}
              />
            </div>
            <h3 style={styles.generoTitle}>Terror</h3>
            <p style={styles.generoDesc}>Experiencia intensa y oscura</p>
            <span style={styles.generoGames}>5 juegos</span>
          </div>
        </div>

        {/* ELIGE TU CONSOLA */}
        <h2 style={styles.seccionTitulo}>ELIGE TU CONSOLA</h2>

        <div style={styles.consolasContainer}>

          <div style={styles.cardConsola}>
            <img
              src="https://images.igdb.com/igdb/image/upload/t_cover_big/co6p7b.png"
              alt="Resident Evil"
              style={styles.consolaImg}
            />
            <button style={styles.btnVerMas} onClick={() => navigate("/producto/9")}>
              Ver más
            </button>
          </div>

          <div style={styles.cardConsola}>
            <img
              src="https://cdn2.unrealengine.com/ps5-console-hero-image-1920x1080-449a01c3b71c.jpg"
              alt="PS5"
              style={styles.consolaImg}
            />
            <button style={styles.btnVerMas} onClick={() => navigate("/producto/5")}>
              Ver más
            </button>
          </div>

          <div style={styles.cardConsola}>
            <img
              src="https://compass-ssl.xbox.com/assets/a6/fc/a6fc3601-b097-4c56-8cf4-35056e0e76f3.jpg?n=XBX-CMP-Hero-1084_2020_1920x1080.jpg"
              alt="Xbox"
              style={styles.consolaImg}
            />
            <button style={styles.btnVerMas} onClick={() => navigate("/producto/6")}>
              Ver más
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Estilos en JS (mantienen la estética neon verde) */
const styles = {
  body: {
    background: "#000",
    color: "#00ff88",
    fontFamily: "'Orbitron', sans-serif",
    minHeight: "100vh",
  },
  container: {
    maxWidth: 1400,
    margin: "0 auto",
    textAlign: "center",
    paddingBottom: 60,
  },
  titulo: {
    marginTop: 40,
    fontSize: 42,
    textShadow: "0 0 12px #18FF69",
  },
  subtexto: {
    fontSize: 14,
    marginBottom: 12,
    color: "#9BFABF",
  },
  contacto: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
    padding: "8px 12px",
    border: "2px solid #00ff88",
    borderRadius: 8,
    fontSize: 14,
  },
  divisor: {
    width: "80%",
    height: 1,
    background: "#00ff88",
    margin: "28px auto",
    border: "none",
  },
  seccionTitulo: {
    marginTop: 36,
    fontSize: 26,
    color: "#E4FFE7",
  },
  masJugados: {
    display: "flex",
    justifyContent: "center",
    gap: 40,
    marginTop: 12,
  },
  juegoImg: {
    width: 200,
    height: 300,
    objectFit: "cover",
    border: "2px solid #00ff88",
    borderRadius: 12,
  },
  generosGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 260px)",
    gap: 20,
    justifyContent: "center",
    marginTop: 18,
  },
  generoCard: {
    background: "rgba(0,255,70,0.07)",
    border: "2px solid #00ff88",
    padding: 18,
    borderRadius: 12,
    cursor: "pointer",
    transition: "transform .16s ease, box-shadow .16s ease",
    boxShadow: "0 0 8px rgba(0,255,136,0.06)",
  },
  iconCircle: {
    width: 54,
    height: 54,
    borderRadius: 999,
    background: "#000",
    border: "1px solid #00ff88",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px",
  },
  iconImg: {
    width: 28,
    height: 28,
    objectFit: "contain",
  },
  generoTitle: {
    margin: 0,
    fontSize: 18,
    color: "#fff",
  },
  generoDesc: {
    margin: "6px 0 0",
    color: "#C17AFF",
    fontSize: 12,
  },
  generoGames: {
    marginTop: 8,
    display: "block",
    color: "#18FF69",
    fontSize: 12,
  },
  consolasContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 36,
    marginTop: 20,
    flexWrap: "wrap",
  },
  cardConsola: {
    width: 250,
    border: "2px solid #00ff88",
    borderRadius: 10,
    padding: 10,
    background: "#050505",
  },
  consolaImg: {
    width: "100%",
    height: 360,
    objectFit: "cover",
    borderRadius: 8,
  },
  btnVerMas: {
    marginTop: 10,
    padding: "10px 18px",
    border: "none",
    borderRadius: 6,
    background: "#ccff00",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Generos;
