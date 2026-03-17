function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

function saveOrders(orders) {
    localStorage.setItem("orders", JSON.stringify(orders));
}

const cartContainer = document.getElementById("cart-items");
const totalContainer = document.getElementById("cart-total");

function displayCart() {
    const cart = getCart();
    const products = getProducts();
    const clearBtn = document.getElementById("clear-cart-btn");

    if (cart.length === 0) {
        clearBtn.classList.add("hidden");
    } else {
        clearBtn.classList.remove("hidden");
    }

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = `
<p class="text-center text-gray-500">
Winkelwagen is leeg
</p>
`;
        totalContainer.innerHTML = "";
        return;
    }

    const counts = {};
    cart.forEach(id => {
        counts[id] = (counts[id] || 0) + 1;
    });

    let total = 0;

    Object.keys(counts).forEach(id => {
        const product = products.find(p => p.id == id);
        if (!product) return;
        const qty = counts[id];
        const subtotal = product.price * qty;
        total += subtotal;

        const div = document.createElement("div");
        div.className = "grid grid-cols-4 items-center bg-white p-4 rounded shadow";
        div.innerHTML = `
<div class="font-semibold">${product.name}</div>
<div class="flex items-center gap-3">
<button onclick="decrease(${id})">-</button>
<span>${qty}</span>
<button onclick="increase(${id})">+</button>
</div>
<div>€${product.price.toFixed(2)}</div>
<div>€${subtotal.toFixed(2)}</div>
`;
        cartContainer.appendChild(div);
    });

    totalContainer.innerHTML = `Totaal: €${total.toFixed(2)}`;
}

function increase(id) {
    const cart = getCart();
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function decrease(id) {
    let cart = getCart();
    const index = cart.indexOf(parseInt(id));
    if (index > -1) {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    window.location.reload();
}

document.getElementById("checkout-btn").addEventListener("click", function () {
    const cart = getCart();
    if (cart.length === 0) return;
    const products = getProducts();
    let total = 0;
    cart.forEach(id => {
        const product = products.find(p => p.id == id);
        if (product) {
            total += product.price;
        }
    });

    let orders = getOrders();
    orders.push({
        id: orders.length,
        total: total.toFixed(2),
        date: new Date().toLocaleString(),
    });
    saveOrders(orders);
    localStorage.setItem("cart", JSON.stringify([]));

    document.body.innerHTML = `
<div class="bg-[#f7ede2] flex items-center justify-center h-screen text-center">
<div>
<h1 class="text-3xl font-bold mb-4 p-20">
Dankjewel voor je bestelling!
</h1>
<button onclick="window.location.href='index.html'"
class="border border-black px-6 py-3 hover:bg-[#ffa200] font-semibold"
>
Terug naar home
</button>
</div>
</div>
`;
});

displayCart();