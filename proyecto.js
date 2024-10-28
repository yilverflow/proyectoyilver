document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const product = document.getElementById("product").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);

    if (product && quantity > 0) {
      const productItem = document.createElement("div");
      productItem.className = "producto-item";
      productItem.textContent = `${product} - Cantidad: ${quantity}`;
      document.querySelector(".scroll-productos").appendChild(productItem);

      document.getElementById("product").value = "";
      document.getElementById("quantity").value = "";
    }
  });

function comprarProducto() {
  const productName = "Producto Seleccionado"; // Obtén el nombre del producto que se muestra en detalles
  const carrito = document.querySelector(".productos-carrito");

  const productInCart = document.createElement("div");
  productInCart.className = "producto-carrito";
  productInCart.textContent = `${productName} - Cantidad: 1`;
  carrito.appendChild(productInCart);
}

document
  .getElementById("pagoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (validarTarjeta(cardNumber, expiry, cvv)) {
      alert("Compra validada con éxito!");
    } else {
      alert("Error en la validación de la tarjeta. Revisa los datos.");
    }
  });

function validarTarjeta(cardNumber, expiry, cvv) {
  const cardPattern = /^\d{16}$/; // 16 dígitos
  const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/AA
  const cvvPattern = /^\d{3}$/; // 3 dígitos

  const isCardValid = cardPattern.test(cardNumber);
  const isExpiryValid = expiryPattern.test(expiry);
  const isCvvValid = cvvPattern.test(cvv);

  return isCardValid && isExpiryValid && isCvvValid;
}
