let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({item, price});
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    totalPrice = 0;
    cart.forEach((product, index) => {
        totalPrice += product.price;
        cartItems.innerHTML += `<li>${product.item} - ${product.price} Ft <button onclick="removeFromCart(${index})">Eltávolítás</button></li>`;
    });
    totalPriceElement.textContent = totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}
