import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="btn-up">
        <i className="fas fa-chevron-up"></i>
      </a>

      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-2 col-xl-3">
            <h4>Compañía</h4>
            <ul>
              <li>
                <a href="pages/conocenos.html">Conócenos</a>
              </li>
              <li>
                <a href="pages/conocenos.html">Escríbenos</a>
              </li>
              <li>
                <a href="">Regístrate aquí</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-4 col-lg-3 col-xl-3">
            <h4>Contáctanos</h4>
            <p>Dirección, calle, ciudad, país</p>
            <p>Tel: 99999999</p>
            <p>
              <a href="">correo@correo.cl</a>
            </p>
            <p>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </p>
          </div>

          <div className="col-sm-4 col-lg-3 col-xl-3">
            <h4>Horario</h4>
            <p>
              De Lunes a Sábado de: <br />
              09:00 hrs. a 19:00 hrs.
            </p>
          </div>

          <div className="col-sm-12 col-lg-4 col-xl-3">
            <h4>Newsletter</h4>
            <p>No te pierdas la oportunidad de recibir nuestras ofertas y noticias.</p>
            <form action="">
              <div className="position-relative">
                <input
                  className="form-control w-100 py-3 ps-4 pe-5"
                  type="email"
                  placeholder="Ingresa tu correo"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Suscribir
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
