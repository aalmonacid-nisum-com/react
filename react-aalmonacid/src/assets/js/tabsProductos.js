// script.js

// Contenedores de productos en HTML
const productsContainerPromociones = document.querySelector('.productos-container-promociones');
const productsContainerCongelados = document.querySelector('.productos-container-congelados');
const productsContainerMariscos = document.querySelector('.productos-container-mariscos');

// Función para cargar productos en tabs
function cargarProductosTabs(productos, container) {
  productos.forEach(producto => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('col-lg-6');

    // Se crea el contenido de la columna con bootstrap
    productDiv.innerHTML = `
      <a href="${producto.enlace}">
        <div class="d-flex align-items-center">
          <img class="img-fluid rounded" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="w-100 d-flex flex-column text-start ps-4">
            <h3 class="d-flex justify-content-between border-bottom pb-2">
              <div>${producto.titulo}</div>
              <small class="price">${producto.precio}</small>
            </h3>
            <div class="text">${producto.detalle}</div>
          </div>
        </div>
      </a>
    `;

    container.appendChild(productDiv);
  });
}

// Función para cargar datos desde el archivo JSON
async function cargarDatosDesdeJSON() {
  try {
    // Hacer una solicitud para obtener el archivo JSON
    const response = await fetch('productos.json');
    const data = await response.json();

    // Cargar productos en los contenedores
    cargarProductosTabs(data.productosPromociones, productsContainerPromociones);
    cargarProductosTabs(data.productosCongelados, productsContainerCongelados);
    cargarProductosTabs(data.productosMariscos, productsContainerMariscos);
  } catch (error) {
    console.error('Error al cargar datos desde el archivo JSON:', error);
  }
}

// Llamar a la función para cargar datos desde el archivo JSON
cargarDatosDesdeJSON();
