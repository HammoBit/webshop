const productContainer = document.getElementById("products");

function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartDot() {
    const cart = getCart();
    const dot = document.getElementById("cart-dot");
    if (!dot) return;
    if (cart.length > 0) {
        dot.classList.remove("hidden");
    } else {
        dot.classList.add("hidden");
    }
}

async function initProducts() {
    let products = getProducts();
    if (products.length === 0) {
        const res = await fetch("data/products.json");
        products = await res.json();
        saveProducts(products);
    }
}

function displayProducts() {
    const products = getProducts();
    productContainer.innerHTML = "";
    products.forEach((product) => {
        productContainer.innerHTML += `
<div class="bg-[#f7ede2] shadow p-4 text-center">
<img src="${product.image}" class="w-full h-48 object-cover" alt="${product.name}">
<h2 class="text-lg font-semibold mt-2">${product.name}</h2>
<p class="mb-3">€${product.price}</p>
<button onclick="addToCart(${product.id})"
class="border border-black w-full py-2 hover:bg-[#ffa200]">
Voeg toe aan winkelwagen
</button>
</div>
`;
    });
}

function showAlert(message) {
    const alert = document.createElement("div");
    alert.className = `
bottom-5 left-5 fixed
bg-green-300
text-black
px-6 py-3
font-semibold
`;
    alert.innerText = message;
    document.body.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 2000);
}

function addToCart(id) {
    let cart = getCart();
    cart.push(id);
    saveCart(cart);
    updateCartDot();
    showAlert("Nieuw product toegevoegd aan winkelwagen");
}

initProducts().then(() => {
    displayProducts();
    updateCartDot();
});