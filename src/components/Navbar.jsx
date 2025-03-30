import { formatCurrency } from "../Utils/formatCurrency.js";
import "./Navbar.css";
import { useState } from "react";


function Navbar({ total }) {
  const [token, setToken] = useState(false); // Esto puede quedar si sigues manejando sesión

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Nombre de la pizzería */}
        <a className="navbar-brand fw-bold text-light" href="#">
          Pizzería Mamma Mia!
        </a>

        {/* Menú de navegación condicional */}
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light">🔓 Profile</button>
              <button
                className="btn btn-outline-light"
                onClick={() => setToken(false)}
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-light"
                onClick={() => setToken(true)}
              >
                🔑 Login
              </button>
              <button className="btn btn-outline-light">🔐 Register</button>
            </>
          )}
        </div>

        {/* Sección de total alineada a la derecha */}
        <div className="ms-auto">
          <button className="btn btn-outline-info">
            🛒 Total: {formatCurrency(total)}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
