import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const CheckIcon = () => (
  <svg className="w-16 h-16 mx-auto text-green-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ErrorIcon = () => (
  <svg className="w-16 h-16 mx-auto text-red-500 animate-ping" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function LoginSuccess() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let receivedToken = null;
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get('token');

    if (tokenFromUrl) {
      receivedToken = tokenFromUrl;
      localStorage.setItem('authToken', receivedToken);
    } else {
      const tokenFromStorage = localStorage.getItem('authToken');
      if (tokenFromStorage) receivedToken = tokenFromStorage;
    }

    if (receivedToken) setToken(receivedToken);
    else console.error("LoginSuccess.jsx: No se recibió ningún token");

    const timer = setTimeout(() => setLoading(false), 1500);
    const redirectTimer = setTimeout(() => navigate('/ventana-principal'), 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-800 text-white">
        <ClipLoader color="#ffffff" loading={loading} size={60} />
        <p className="mt-4 text-lg font-semibold">Verificando autenticación...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-800 px-4">
      <div className="w-full max-w-md p-8 space-y-6 text-center bg-black/70 rounded-2xl shadow-2xl border-2 border-pink-500 transform transition-all duration-500 ease-in-out">
        {token ? (
          <>
            <CheckIcon />
            <h1 className="text-3xl font-extrabold text-green-400">¡Bienvenido!</h1>
            <p className="text-green-200">Tu inicio de sesión ha sido exitoso.</p>
            <p className="text-sm text-green-300 pt-4">
              Serás redirigido a la página principal en unos instantes...
            </p>
          </>
        ) : (
          <>
            <ErrorIcon />
            <h1 className="text-3xl font-extrabold text-red-500">Algo salió mal</h1>
            <p className="text-red-300">
              No pudimos verificar tu identidad. Por favor,{' '}
              <a href="/login" className="font-bold text-pink-400 hover:text-pink-600 underline">
                inténtalo de nuevo
              </a>.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSuccess;
