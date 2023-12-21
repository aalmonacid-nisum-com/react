import Header from './Header';
import HomeProductos from './HomeProductos';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <div className="main">
      {/* carrusel */}
        <div id="carruselHome" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carruselHome" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carruselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/src/assets/images/fotos/foto-home.png" className="img-fluid" width="100%" alt="Quiénes somos" />
            <div className="container">
              <div className="carousel-caption text-start">
                <div className="text">
                  <h2>Quiénes somos</h2>
                  <p className="text">Seleccionamos productos de primera calidad y los llevamos a tu mesa al mejor precio.</p>
                  <p><a className="btn btn-lg btn-primary" href="pages/conocenos.html">Leer más</a></p>
                </div>
              </div>
            </div>
          </div>
          {/* Otros items del carrusel */}
          <div className="carousel-item">
            <img src="/src/assets/images/fotos/foto-home-02.png" className="img-fluid" width="100%" alt="Recetas" />
            <div className="container">
              <div className="carousel-caption text-start">
                <div className="text">
                  <h2>Recetas</h2>
                  <p className="text">Disfruta y sorprende con las más ricas y variadas recetas, junto a nuestra calidad y sabor premium.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Leer más</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carruselHome" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carruselHome" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* end carrusel */}

      <HomeProductos />

      <section className="home-valores mb-5">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Nuestros Pilares</h2>
          <h3 className="subtitle mb-4"><em>Nuestra principal ventaja es la calidad</em></h3>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-sm-6">
            <div className="home-pilares rounded pt-3">
              <div className="p-4">
                <i className="fa-solid fa-3x fa-heart mb-4"></i>
                <h5>Vida sana</h5>
                <p>Promovemos una vida saludable mediante el consumo de productos del mar.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="home-pilares rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-utensils mb-4"></i>
                <h5>Servicio</h5>
                <p>Elegimos los mejores productos de nuestro mar al trabajar con productores locales certificados.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="home-pilares rounded pt-3">
              <div className="p-4">
                <i className="fa-solid fa-3x fa-fish mb-4"></i>
                <h5>Sustentabilidad</h5>
                <p>Apoyamos a los productores locales que cumplan con las medidas medio ambientales.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="home-pilares rounded pt-3">
              <div className="p-4">
                <i className="fa-solid fa-3x fa-palette mb-4"></i>
                <h5>Variedad</h5>
                <p>Cuidamos de manera especial la cadena de frío de nuestros productos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ubicacion">
      <h3 className="text-center title mb-4">Nuestra ubicación</h3>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.3029759753153!2d-70.59199492395615!3d-33.41534459571576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf163116bda3%3A0x497a9bb0d8745f74!2sAlc%C3%A1ntara!5e0!3m2!1ses-419!2scl!4v1692722986957!5m2!1ses-419!2scl"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </section>

   

      </div>

      <Footer />
    </>
  );
}

export default App;
