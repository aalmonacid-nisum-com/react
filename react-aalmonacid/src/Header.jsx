import React from 'react';

function Header() {
  return (
      
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-md navbar-dark bg-header">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <a href="index.html" className="me-2">
              <img src="/src/assets/images/html/logo-empresa-blanco.svg" className="img-fluid" width="70" alt="Chef" />
            </a>
          </a>
          {/* Botón hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Menú principal */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/productos.html">
                  Tienda
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="pages/productos.html">
                      Pescados
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages/productos.html">
                      Mariscos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages/productos.html">
                      Postres
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pages/productos.html">
                      Congelados
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/productos.html">
                  Promociones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/recetas.html">
                  Recetas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/conocenos.html">
                  Conócenos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/contactanos.html">
                  Escríbenos
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="btn btn-primary py-2 px-4">
                  Regístrate aquí
                </a>
              </li>
            </ul>
            {/* Usuarios registrados */}
            <div className="nav-secondary d-flex">
              <a href="">
                <i className="fa-solid fa-user"></i>
                <br />
                Mi cuenta
              </a>
              <a href="">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
              <a href="">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
          </div>
          {/* Fin del menú principal */}
        </div>
        {/* Fin del container */}
      </nav>
    </header>
  );
}

export default Header;
