const mueblesOficina = [
  {
    id: 1,
    nombre: "Mesa de Reunión Rectangular",
    categoria: "mesas",
    material: "madera",
    precio: 4500,
    cantidad: 10,
    foto: "https://compumuebles.com/cdn/shop/products/J01K03IF062_Mesa_de_Juntas_F_700x700.jpg?v=1595261933",
  },

  {
    id: 2,
    nombre: "Escritorio Ejecutivo",
    categoria: "escritorios",
    material: "madera",
    precio: 7500,
    cantidad: 8,
    foto: "https://mueblescuevastorres.com/wp-content/uploads/2019/10/escritorio-ejecutivo-cubierta-oval-en-l-con-cajonera.jpg",
  },

  {
    id: 3,
    nombre: "Silla Ergonómica de Oficina",
    categoria: "sillas",
    material: "tela y metal",
    precio: 3200,
    cantidad: 15,
    foto: "https://www.sillasparaoficina.top/wp-content/uploads/2020/10/silla-korea-presidente01.jpg",
  },

  {
    id: 4,
    nombre: "Estantería Modular",
    categoria: "estanterías",
    material: "metal",
    precio: 2800,
    cantidad: 20,
    foto: "https://www.idfdesign.es/imagenes/estanterias/socrate-librero-estanterias-3.jpg",
  },

  {
    id: 5,
    nombre: "Mesa Redonda para Conferencias",
    categoria: "mesas",
    material: "madera y metal",
    precio: 5000,
    cantidad: 14,
    foto: "https://i.pinimg.com/550x/92/9f/48/929f489e55f976fbae9f37ac8e197ac9.jpg",
  },

  {
    id: 6,
    nombre: "Escritorio en L",
    categoria: "escritorios",
    material: "madera y vidrio",
    precio: 8500,
    cantidad: 12,
    foto: "https://estilooficina.com/wp-content/uploads/2018/06/escritorio-de-oficina.jpg.webp",
  },

  {
    id: 7,
    nombre: "Silla Ejecutiva con Reposabrazos",
    categoria: "sillas",
    material: "cuero y metal",
    precio: 4000,
    cantidad: 4,
    foto: "https://xtech-frontend.s3.amazonaws.com/media/img/Fotos-Detalle-AM160XTK01-1.jpg",
  },

  {
    id: 8,
    nombre: "Estantería de Pared",
    categoria: "estanterías",
    material: "madera",
    precio: 2200,
    cantidad: 11,
    foto: "https://images.sodimac.com/v3/assets/blt2f8082df109cfbfb/blt4b10368ced4e84dd/64da4c51992f3c8197868a10/LND-GC-674-SHOW-estanterias-grandes-modernas-casa-mb.jpg",
  },

  {
    id: 9,
    nombre: "Mesa de Oficina Minimalista",
    categoria: "mesas",
    material: "madera y acero",
    precio: 4200,
    cantidad: 2,
    foto: "https://i.pinimg.com/474x/71/8b/da/718bdae4bfc238ec818576f5fab36025.jpg",
  },

  {
    id: 10,
    nombre: "Escritorio Ajustable",
    categoria: "escritorios",
    material: "madera y metal",
    precio: 6700,
    cantidad: 13,
    foto: "https://m.media-amazon.com/images/I/61uyjKS3rpL._AC_SL1500_.jpg",
  },

  {
    id: 11,
    nombre: "Silla Giratoria Clásica",
    categoria: "sillas",
    material: "tela y plástico",
    precio: 2800,
    cantidad: 8,
    foto: "https://m.media-amazon.com/images/I/712gU5FzT7L._AC_SL1500_.jpg",
  },

  {
    id: 12,
    nombre: "Estantería para Archivos",
    categoria: "estanterías",
    material: "metal",
    precio: 3500,
    cantidad: 6,
    foto: "https://www.ofitipo.com/modules/dbblog/views/img/post/estanterias-de-celdas-1400x900.jpg",
  },

  {
    id: 13,
    nombre: "Mesa Auxiliar de Oficina",
    categoria: "mesas",
    material: "madera",
    precio: 1800,
    cantidad: 14,
    foto: "https://industriascruz.co/wp-content/uploads/2022/02/mueble-auxiliar-para-oficina-industrias-cruz.jpg",
  },

  {
    id: 14,
    nombre: "Escritorio de Pie",
    categoria: "escritorios",
    material: "madera y aluminio",
    precio: 9200,
    cantidad: 20,
    foto: "https://www.newrospine.com.mx/wp-content/uploads/2022/11/escritorio_para_trabajar_de_pie_1.jpg",
  },

  {
    id: 15,
    nombre: "Silla de Visita",
    categoria: "sillas",
    material: "cuero y metal",
    precio: 2500,
    cantidad: 25,
    foto: "https://dimusa.mx/wp-content/uploads/2021/01/Silla-de-Visita-Modelo-3109.jpg",
  },

  {
    id: 16,
    nombre: "Estantería Esquinera",
    categoria: "estanterías",
    material: "madera",
    precio: 2400,
    cantidad: 17,
    foto: "https://www.ikea.com/co/es/images/products/froesjoen-estante-esquinero-negro__1253925_pe924354_s5.jpg?f=s",
  },

  {
    id: 17,
    nombre: "Mesa de Trabajo Industrial",
    categoria: "mesas",
    material: "metal y madera",
    precio: 5900,
    cantidad: 9,
    foto: "https://tienda.jepmobiliari.com/wp-content/uploads/2020/07/escritorio-home-office-home-casa-hogar-industrial-a-120-1.jpg",
  },

  {
    id: 18,
    nombre: "Escritorio Compacto",
    categoria: "escritorios",
    material: "madera",
    precio: 5500,
    cantidad: 4,
    foto: "https://www.expose.com.co/sites/default/files/escritorio_para_oficina_con_dos_estantes_y_dos_cajones.jpg.jpg",
  },

  {
    id: 19,
    nombre: "Silla Plegable",
    categoria: "sillas",
    material: "plástico y metal",
    precio: 1300,
    cantidad: 12,
    foto: "https://m.media-amazon.com/images/I/51g0ZQI97jL._AC_SL1080_.jpg",
  },

  {
    id: 20,
    nombre: "Estantería Alta",
    categoria: "estanterías",
    material: "metal",
    precio: 3000,
    cantidad: 45,
    foto: "https://www.oficinasmontiel.com/63932-large_default/estanteria-de-oficina-alta-de-kunna.jpg",
  },

  {
    id: 21,
    nombre: "Mesa con Cajones",
    categoria: "mesas",
    material: "madera",
    precio: 3900,
    cantidad: 23,
    foto: "https://img.freepik.com/vector-premium/mesa-madera-oficina-cajones-sobre-fondo-blanco-aislado_394307-2793.jpg",
  },

  {
    id: 22,
    nombre: "Escritorio Moderno",
    categoria: "escritorios",
    material: "madera y metal",
    precio: 7200,
    cantidad: 22,
    foto: "https://estilooficina.com/wp-content/uploads/2021/09/escritorio-moderno-de-oficina.jpg.webp",
  },

  {
    id: 23,
    nombre: "Silla de Recepción",
    categoria: "sillas",
    material: "tela y plástico",
    precio: 2700,
    cantidad: 23,
    foto: "https://plazavea.vteximg.com.br/arquivos/ids/303490-512-512/image-fb6c8e0c65a94fb5a6f10d286ad824bf.jpg",
  },

  {
    id: 24,
    nombre: "Estantería de Almacenamiento",
    categoria: "estanterías",
    material: "metal",
    precio: 3200,
    cantidad: 24,
    foto: "https://www.ballarol.com/wp-content/uploads/2024/07/almacenamiento-oficinas-modernas.jpg",
  },

  {
    id: 25,
    nombre: "Mesa de Trabajo con Ruedas",
    categoria: "mesas",
    material: "madera y acero",
    precio: 5100,
    cantidad: 25,
    foto: "https://spacio.es/wp-content/uploads/2022/02/MESA-4-5.jpg",
  },

  {
    id: 26,
    nombre: "Escritorio Minimalista",
    categoria: "escritorios",
    material: "madera",
    precio: 6200,
    cantidad: 26,
    foto: "https://ekonomodo.com/45875-large_default/escritorio-moderno-minimalista-duna-blanco.jpg",
  },

  {
    id: 27,
    nombre: "Silla Acolchonada",
    categoria: "sillas",
    material: "tela y madera",
    precio: 3800,
    cantidad: 27,
    foto: "https://ve.epaenlinea.com/media/catalog/product/cache/9de02ba98484dc90d74f47a4b2fb992a/4/e/4e55a8d7-5b04-427c-a085-e40923d4d51d.jpg",
  },

  {
    id: 28,
    nombre: "Estantería Abierta",
    categoria: "estanterías",
    material: "madera",
    precio: 2600,
    cantidad: 28,
    foto: "https://www.ofitipo.com/modules/dbblog/views/img/post/estanterias-de-celdas-1400x900.jpg",
  },

  {
    id: 29,
    nombre: "Mesa de Conferencias Grande",
    categoria: "mesas",
    material: "madera",
    precio: 8000,
    cantidad: 29,
    foto: "https://m.media-amazon.com/images/I/81BYbfTJSUL._AC_SL1500_.jpg",
  },

  {
    id: 30,
    nombre: "Escritorio de Esquina",
    categoria: "escritorios",
    material: "madera y metal",
    precio: 8700,
    cantidad: 30,
    foto: "https://m.media-amazon.com/images/I/71eP7OmGQ+L._AC_SL1500_.jpg",
  },

  {
    id: 31,
    nombre: "Silla Alta para Barra",
    categoria: "sillas",
    material: "madera y metal",
    precio: 2400,
    cantidad: 31,
    foto: "https://muebleri.co/wp-content/uploads/2018/04/Butaco-Karen-Frontal-1.jpg",
  },

  {
    id: 32,
    nombre: "Estantería con Puertas",
    categoria: "estanterías",
    material: "madera",
    precio: 4000,
    cantidad: 32,
    foto: "https://estilooficina.com/wp-content/uploads/2018/05/estante_p_b.jpg.webp",
  },

  {
    id: 33,
    nombre: "Mesa Plegable",
    categoria: "mesas",
    material: "plástico y metal",
    precio: 2200,
    cantidad: 33,
    foto: "https://avs.com.co/wp-content/uploads/2023/09/mesa-plegable-adultos-portada.jpg",
  },

  {
    id: 34,
    nombre: "Escritorio con Cajones",
    categoria: "escritorios",
    material: "madera",
    precio: 7200,
    cantidad: 34,
    foto: "https://industriascruzmr.com/wp-content/uploads/2021/10/escritorio-operativo-gris-.jpeg",
  },

  {
    id: 35,
    nombre: "Silla Baja para Escritorio",
    categoria: "sillas",
    material: "plástico y metal",
    precio: 1800,
    cantidad: 35,
    foto: "https://carulla.vtexassets.com/arquivos/ids/10428708/silla-para-oficina-escritorio-baja-negra.jpg?v=638106971784930000",
  },

  {
    id: 36,
    nombre: "Estantería de Oficina Clásica",
    categoria: "estanterías",
    material: "madera",
    precio: 3100,
    cantidad: 36,
    foto: "https://i.pinimg.com/736x/11/d7/2b/11d72b4a50ad6d4b98e9641ded4d948c.jpg",
  },

  {
    id: 37,
    nombre: "Mesa de Reunión Ovalada",
    categoria: "mesas",
    material: "madera",
    precio: 6900,
    cantidad: 37,
    foto: "https://lambdatres.com/wp-content/uploads/2022/04/mesa-reunion-ovalada.jpg",
  },

  {
    id: 38,
    nombre: "Escritorio Industrial",
    categoria: "escritorios",
    material: "madera y metal",
    precio: 9400,
    cantidad: 38,
    foto: "https://homik.co/wp-content/uploads/D_623167-MCO74884664292_032024-F.jpg",
  },

  {
    id: 39,
    nombre: "Silla Ejecutiva Premium",
    categoria: "sillas",
    material: "cuero y metal",
    precio: 5200,
    cantidad: 339,
    foto: "https://www.modernismo.cl/wp-content/uploads/2024/05/Silla_oficina_Benessere_Negra_LadoB_Low.jpg",
  },
  {
    id: 40,
    nombre: "Estantería de Piso",
    categoria: "estanterías",
    material: "madera y metal",
    precio: 2700,
    cantidad: 40,
    foto: "https://m.media-amazon.com/images/I/61omOgR6GrL._AC_UF894,1000_QL80_.jpg",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  function validarCampos() {
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const direccion = document.getElementById("direccion").value;
    const tipoEntrega = document.querySelector(
      'input[name="tipo-entrega"]:checked'
    );

    if (nombre.length === 0 || nombre.length > 20) {
      alert(
        "El nombre no puede estar vacío y debe tener un máximo de 20 caracteres."
      );
      return false;
    }

    if (!/^\d+$/.test(precio) || parseFloat(precio) <= 0) {
      alert("El precio debe ser un número positivo en pesos colombianos.");
      return false;
    }

    if (parseInt(cantidad) < 1 || parseInt(cantidad) > 20) {
      alert("La cantidad debe ser un número entre 1 y 20 productos.");
      return false;
    }

    if (direccion.length === 0) {
      alert("Por favor, ingresa la dirección de envío.");
      return false;
    }

    if (!tipoEntrega) {
      alert("Por favor, selecciona un tipo de entrega.");
      return false;
    }

    return true;
  }

  document
    .getElementById("iniciar-compra")
    .addEventListener("click", function (event) {
      event.preventDefault();

      if (validarCampos()) {
        window.location.href = "vista2.html";
      }
    });

  document
    .getElementById("limpiar-campos")
    .addEventListener("click", function () {
      document.getElementById("nombre").value = "";
      document.getElementById("precio").value = "";
      document.getElementById("cantidad").value = "";
      document.getElementById("direccion").value = "";
      // Desmarcar radio buttons
      const radios = document.querySelectorAll('input[name="tipo-entrega"]');
      radios.forEach((radio) => (radio.checked = false));
    });
});

let productosCargados = 0;
const productosPorPagina = 15;
let productos = mueblesOficina;

function mostrarProductos(productosParaMostrar) {
  const contenedorProductos = document.getElementById("productos");
  contenedorProductos.innerHTML = "";

  if (productosParaMostrar.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay productos disponibles con esos filtros.";
    contenedorProductos.appendChild(mensaje);
    return;
  }

  productosParaMostrar.forEach((producto) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");
    productoDiv.innerHTML = `
        <img src="${producto.foto}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>Precio: ${producto.precio} COP</p>
        <button onclick="verDetalle(${producto.id})">Ver Detalles</button>
      `;
    contenedorProductos.appendChild(productoDiv);
  });
}

window.onload = function () {
  mostrarProductos(productos);
};

function filtrarProductos() {
  const materialSeleccionado = document.getElementById("filtro-material").value;
  const cantidadMinima = parseInt(
    document.getElementById("filtro-cantidad").value
  );

  const productosFiltrados = productos.filter((producto) => {
    const coincideMaterial = materialSeleccionado
      ? producto.material === materialSeleccionado
      : true;
    const coincideCantidad = producto.cantidad > cantidadMinima;
    return coincideMaterial && coincideCantidad;
  });

  mostrarProductos(productosFiltrados);
}

function limpiarFiltros() {
  document.getElementById("filtro-material").value = "";
  document.getElementById("filtro-cantidad").value = 10;
  mostrarProductos(productos);
}

function verDetalle(productoId) {
  const producto = mueblesOficina.find((p) => p.id === productoId);
  const detalleProducto = document.getElementById("detalle-producto");

  detalleProducto.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img src="${producto.foto}" alt="${producto.nombre}" />
    <p>Material: ${producto.material}</p>
    <p>Precio: $${producto.precio}</p>
    <p>Cantidad disponible: ${producto.cantidad}</p>
  `;
}

function completarCompra() {
  window.location.href = "vista3.html";
}

function cancelarCompra() {
  window.location.href = "index.html";
}

function agregarAlCarrito() {
  const nombreProducto = document.querySelector(
    "#detalle-producto h3"
  ).innerText;
  const cantidad = document.getElementById("cantidad").value;

  const producto = mueblesOficina.find((p) => p.nombre === nombreProducto);
  if (!producto) return;

  const productoCarrito = {
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: parseInt(cantidad),
  };

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const index = carrito.findIndex((item) => item.id === productoCarrito.id);
  if (index !== -1) {
    carrito[index].cantidad += productoCarrito.cantidad;
  } else {
    carrito.push(productoCarrito);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  const mensajeExito = document.getElementById("mensaje-exito");
  mensajeExito.style.display = "block";
  mensajeExito.innerHTML = `${productoCarrito.nombre} agregado al carrito.`;
  setTimeout(() => {
    mensajeExito.style.display = "none";
  }, 2000);

  actualizarResumenCompra();
}

function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoLista = document.getElementById("carritoLista");

  carritoLista.innerHTML = "";

  if (carrito.length === 0) {
    carritoLista.innerHTML =
      "<tr><td colspan='5'>El carrito está vacío.</td></tr>";
    return;
  }

  carrito.forEach((item, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.cantidad}</td>
      <td>$${item.precio}</td>
      <td>$${(item.precio * item.cantidad).toFixed(2)}</td>
      <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
    `;
    carritoLista.appendChild(fila);
  });
}

function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.splice(index, 1);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
});
document.getElementById("formTarjeta").addEventListener("submit", (e) => {
  e.preventDefault();
});

function toggleCVV() {
  const cvvInput = document.getElementById("cvv");
  cvvInput.type = cvvInput.type === "password" ? "text" : "password";
}

function limpiarCampos() {
  document.getElementById("numeroTarjeta").value = "";
  document.getElementById("nombreTitular").value = "";
  document.getElementById("fechaExpiracion").value = "";
  document.getElementById("cvv").value = "";
  document.getElementById("paisEmision").selectedIndex = 0;
  document.getElementById("tipoTarjeta").selectedIndex = 0;
}

let compraEnProgreso = false;

function validarYCompletarCompra() {
  if (compraEnProgreso) {
    alert("Hay una compra en progreso, por favor espere.");
    return;
  }

  const numeroTarjeta = document.getElementById("numeroTarjeta").value;
  const nombreTitular = document.getElementById("nombreTitular").value;
  const fechaExpiracion = document.getElementById("fechaExpiracion").value;
  const cvv = document.getElementById("cvv").value;
  const paisEmision = document.getElementById("paisEmision").value;
  const tipoTarjeta = document.getElementById("tipoTarjeta").value;

  if (
    !numeroTarjeta ||
    !nombreTitular ||
    !fechaExpiracion ||
    !cvv ||
    !paisEmision ||
    !tipoTarjeta
  ) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  compraEnProgreso = true;
  document.getElementById("confirmarCompraBtn").disabled = true;

  const tiempoPromesa = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;

  const validarCompra = new Promise((resolve, reject) => {
    setTimeout(() => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const totalProductos = carrito.reduce(
        (acc, item) => acc + item.cantidad,
        0
      );
      const presupuestoMax = 70000000000;

      let subtotal = carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
      );
      if (totalProductos > 20) {
        reject("Error: La cantidad de productos supera el límite permitido.");
      } else if (subtotal > presupuestoMax) {
        reject("Error: El total de la compra excede el presupuesto permitido.");
      } else if (!numeroTarjeta.match(/^\d{16}$/)) {
        reject("Error: El número de tarjeta es inválido.");
      } else if (!fechaExpiracion.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
        reject("Error: La fecha de expiración no es válida.");
      } else if (!cvv.match(/^\d{3}$/)) {
        reject("Error: El código de seguridad (CVV) no es válido.");
      } else {
        resolve("Pago realizado con éxito.");
      }
    }, tiempoPromesa);
  });

  validarCompra
    .then((mensajeExito) => {
      alert(mensajeExito);
      window.location.href = "pagina_inicial.html";
    })
    .catch((mensajeError) => {
      alert(mensajeError);
      document.getElementById("confirmarCompraBtn").disabled = false;
      compraEnProgreso = false;
    });
}

function actualizarResumenCompra() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  let totalProductos = 0;
  let subtotal = 0;

  carrito.forEach((item) => {
    totalProductos += item.cantidad;
    subtotal += item.precio * item.cantidad;
  });

  const cargoDomicilio = subtotal < 50 ? 15.0 : 0;

  const totalCompra = subtotal + cargoDomicilio;

  console.log("Total Productos:", totalProductos);
  console.log("Subtotal:", subtotal);
  console.log("Cargo Domicilio:", cargoDomicilio);
  console.log("Total Compra:", totalCompra);

  document.getElementById("totalProductos").textContent = totalProductos;
  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("cargoDomicilio").textContent =
    cargoDomicilio.toFixed(2);
  document.getElementById("totalCompra").textContent = totalCompra.toFixed(2);
}
