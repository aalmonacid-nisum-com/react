import React, { useState, useEffect } from 'react';

const HomeProductos = () => {
  const [productos, setProductos] = useState({
    productosPromociones: [],
    productosCongelados: [],
    productosMariscos: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/productos.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data from JSON:', data);
        setProductos(data);
      } catch (error) {
        console.error('Error fetching data from JSON:', error);
      }
    };

    fetchData();
  }, []);

  const renderProductos = (productosArray) => {
    return productosArray.map((producto, index) => (
      <div key={index} className="col-lg-6">
        <a href={producto.enlace}>
          <div className="d-flex align-items-center">
            <img className="img-fluid rounded" src={producto.imagen} alt={producto.titulo} />
            <div className="w-100 d-flex flex-column text-start ps-4">
              <h3 className="d-flex justify-content-between border-bottom pb-2">
                <div>{producto.titulo}</div>
                <small className="price">{producto.precio}</small>
              </h3>
              <div className="text">{producto.detalle}</div>
            </div>
          </div>
        </a>
      </div>
    ));
  };

  return (
    <section className="home-productos mt-4 mb-5">
      <div className="container">
        <div className="tab-content">
          <div id="promociones" className="tab-pane fade show active">
            {productos.productosPromociones.length === 0 ? (
              <p>Cargando productos...</p>
            ) : (
              <div className="row g-4 productos-container-promociones">
                {renderProductos(productos.productosPromociones)}
              </div>
            )}
          </div>

          <div id="congelados" className="tab-pane fade show">
            {productos.productosCongelados.length === 0 ? (
              <p>Cargando productos...</p>
            ) : (
              <div className="row g-4 productos-container-congelados">
                {renderProductos(productos.productosCongelados)}
              </div>
            )}
          </div>

          <div id="mariscos" className="tab-pane fade show">
            {productos.productosMariscos.length === 0 ? (
              <p>Cargando productos...</p>
            ) : (
              <div className="row g-4 productos-container-mariscos">
                {renderProductos(productos.productosMariscos)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProductos;
