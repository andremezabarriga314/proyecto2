import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import LoginError from './pages/LoginError';
import VentanaPrincipal from "./pages/VentanaPrincipal";
import Categorias from "./pages/Categorias";
import Accesorios from "./pages/Accesorios";
import ConfirmacionDeCompra from "./pages/ConfirmacionDeCompra";
import DatosDeFacturacion from "./pages/DatosDeFacturacion";
import Deporte from "./pages/Deporte";
import ProcesoDePago from "./pages/ProcesoDePago";
import EspecificacionProducto from "./pages/EspecificacionProducto";
import GeneroShooter from "./pages/GeneroShooter";
import Generos from "./pages/Generos";
import GenerosCarreras from "./pages/GenerosCarreras";
import ListaDeseos from "./pages/ListaDeseos";
import Ofertas from "./pages/Ofertas";
import PCGaming from "./pages/PCGaming";
import ProcesoEntrega from "./pages/ProcesoEntrega";
import VisualizacionProducto from "./pages/VisualizacionProducto";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-error" element={<LoginError />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/ventana-principal" element={<VentanaPrincipal />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/confirmacion-compra" element={<ConfirmacionDeCompra />} />
        <Route path="/datos-facturacion" element={<DatosDeFacturacion />} />
        <Route path="/deporte" element={<Deporte />} />
        <Route path="/proceso-pago" element={<ProcesoDePago />} />
        <Route path="/producto/:id" element={<EspecificacionProducto />} />
        <Route path="/genero-shooter" element={<GeneroShooter />} />
        <Route path="/generos" element={<Generos />} />
        <Route path="/genero-carreras" element={<GenerosCarreras />} />
        <Route path="/lista-deseos" element={<ListaDeseos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/pc-gaming" element={<PCGaming />} />
        <Route path="/proceso-entrega" element={<ProcesoEntrega />} />
        <Route path="/visualizacion-producto/:id" element={<VisualizacionProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
