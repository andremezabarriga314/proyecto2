import { Link } from 'react-router-dom';

function LoginError() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-red-900/90 p-10 rounded-2xl shadow-2xl text-center max-w-md">
        <h1 className="text-4xl font-extrabold text-red-500 mb-4 animate-pulse">
          Error de Autenticación
        </h1>
        <p className="text-red-200 mb-6">
          Hubo un problema al intentar iniciar sesión con Google. Por favor, inténtalo de nuevo.
        </p>
        <Link 
          to="/login" 
          className="px-6 py-3 bg-red-600 hover:bg-red-800 rounded-md font-bold text-white shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Volver a la página de inicio de sesión
        </Link>
      </div>
    </div>
  );
}

export default LoginError;
