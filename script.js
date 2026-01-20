let cartItems = [
  {
    photo: "./img/sim-card-img.png",
    name: "Sim kortele",
    price: 2.0,
    quantity: 1,
  },
  {
    photo: "./img/iphone-img.png",
    name: "Telefonas",
    price: 1200.0,
    quantity: 1,
  },
  {
    photo: "./img/sd-card-img.jpg",
    name: "SD kortele (128 GB)",
    price: 35.0,
    quantity: 2,
  },
];

const container = document.getElementById("cards-container");

cartItems.forEach((item) => {
  const card = document.createElement("div");
  let totalPrice = item.price * item.quantity;
  card.className = "card";
  card.innerHTML = `
    <img src="${item.photo}"
    alt="Sd card"
    class="product-photo"
    />
    <h5>${item.name}</h5>
    <p>${item.price.toFixed(2)}€</p>
      <div class="counter flex-container">
             <button class="minus">−</button>
             <span class="value">1</span>
             <button class="plus">+</button>
          </div>
          <p class="total">${totalPrice.toFixed(2)}€</p>
          <img src="./img/trash-icon.png" alt="Trash icon" class="trash-icon" />
    `;

  const plusBtn = card.querySelector(".plus");
  const minusBtn = card.querySelector(".minus");
  const valueSpan = card.querySelector(".value");
  const totalSpan = card.querySelector(".total");

  plusBtn.addEventListener("click", function () {
    item.quantity = item.quantity + 1;

    valueSpan.textContent = item.quantity;
    totalSpan.textContent = (item.quantity * item.price).toFixed(2) + "€";
    updateCartTotal();
  });

  minusBtn.addEventListener("click", function () {
    if (item.quantity === 0) {
      return;
    }
    item.quantity = item.quantity - 1;

    valueSpan.textContent = item.quantity;
    totalSpan.textContent = (item.quantity * item.price).toFixed(2) + "€";
    updateCartTotal();
  });

  const trashBtn = card.querySelector(".trash-icon");

  trashBtn.addEventListener("click", function () {
    cartItems = cartItems.filter((cartItem) => cartItem !== item);
    card.remove();
    updateCartTotal();
  });

  container.appendChild(card);
});

const total = document.getElementById("order-total");

function updateCartTotal() {
  let cartTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    cartTotal = cartTotal + cartItems[i].price * cartItems[i].quantity;
    total.textContent = cartTotal.toFixed(2);
  }
}
