import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si hay token en localStorage
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header
      className="flex items-center justify-between py-3 px-16 border-b-2 border-[#00C8504D]"
      style={{
        background: "linear-gradient(180deg, #000000, #101727, #000000)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="w-[41px] py-2 px-[9px] rounded-[10px] border border-solid border-[#05DF72]"
          style={{
            background: "linear-gradient(180deg, #00A63D, #7CCE00)",
          }}
        >
          <div className="w-6 h-6 rounded-[10px] bg-[#05DF72]" />
        </div>
        <div>
          <h1 className="text-[#05DF72] text-xl font-bold">
            💀 OVERKILL ARENA 💀
          </h1>
          <p className="text-[#B8F7CF] text-xs">⚡ GAMING EXTREMO ⚡</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-7">
        <div className="relative w-[232px]">
          <input
            type="text"
            placeholder="🎯 BUSCAR ARSENAL LETAL..."
            className="w-full bg-[#000000CC] h-9 px-3 rounded-lg border border-solid border-[#00C8504D] text-[#05DF72] text-sm placeholder-[#05DF72] focus:outline-none focus:ring-2 focus:ring-[#05DF72]"
            style={{
              boxShadow: "0px 0px 5px #00FF001A",
            }}
          />
        </div>
        <button
          className="w-[30px] h-[30px] p-[7px] rounded-lg border border-solid border-[#05DF72] flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #00A63D, #7CCE00)",
          }}
        >
          <div className="w-4 h-4 bg-white rounded" />
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Icons */}
        <button
          className="bg-[#FFFFFF00] w-11 h-11 p-3.5 rounded-lg border border-solid border-[#00C8504D] flex items-center justify-center"
          style={{
            boxShadow: "0px 0px 5px #00FF001A",
          }}
        >
          <div className="w-4 h-4 bg-[#05DF72] rounded" />
        </button>

        <div className="w-11 h-11 bg-[#05DF72] rounded-full" />

        <button
          className="bg-[#FFFFFF00] w-11 h-11 p-3.5 rounded-lg border border-solid border-[#00C8504D] flex items-center justify-center"
          style={{
            boxShadow: "0px 0px 5px #00FF001A",
          }}
        >
          <div className="w-4 h-4 bg-[#05DF72] rounded" />
        </button>

        <button
          className="bg-[#FFFFFF00] w-11 h-11 p-3.5 rounded-lg border border-solid border-[#00C8504D] flex items-center justify-center"
          style={{
            boxShadow: "0px 0px 5px #00FF001A",
          }}
        >
          <div className="w-4 h-4 bg-[#05DF72] rounded" />
        </button>

        {/* Conditional Auth Buttons */}
        {isAuthenticated ? (
          // Si está autenticado, mostrar LOGOUT
          <button
            onClick={handleLogout}
            className="bg-black px-[18px] py-3 rounded-lg border border-solid border-[#00C85080] text-[#05DF72] text-sm font-bold hover:bg-[#05DF72] hover:text-black transition-all"
            style={{
              boxShadow: "0px 0px 5px #00FF001A",
            }}
          >
            ⚡ LOGOUT ⚡
          </button>
        ) : (
          // Si NO está autenticado, mostrar LOGIN y REGISTER
          <>
            <Link
              to="/login"
              className="bg-black px-[18px] py-3 rounded-lg border border-solid border-[#00C85080] text-[#05DF72] text-sm font-bold hover:bg-[#05DF72] hover:text-black transition-all text-center"
              style={{
                boxShadow: "0px 0px 5px #00FF001A",
              }}
            >
              ⚡ LOGIN ⚡
            </Link>

            <Link
              to="/register"
              className="px-[13px] py-3 rounded-lg border border-solid border-[#05DF72] text-black text-sm font-bold"
              style={{
                background: "linear-gradient(180deg, #00A63D, #7CCE00)",
              }}
            >
              💀 REGISTER 💀
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
