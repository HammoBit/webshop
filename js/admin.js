if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "admin-login.html";
}


const productsTable = document.getElementById("products-table");
const ordersTable = document.getElementById("orders-table");

const productsTab = document.getElementById("products-tab");
const ordersTab = document.getElementById("orders-tab");

const productsPage = document.getElementById("products-page");
const ordersPage = document.getElementById("orders-page");


function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}


function displayProducts() {
    let products = getProducts();
    productsTable.innerHTML = "";

    products.forEach(product => {
        productsTable.innerHTML += `
        <tr class="border-b text-center">
            <td class="p-2">${product.id}</td>
            <td class="p-2">${product.name}</td>
            <td class="p-2">€${product.price}</td>
            <td class="p-2">
                <img src="${product.image}" class="w-16 h-16 object-cover mx-auto" alt="${product.name}">
            </td>
            <td class="p-2 space-x-3">
                <a href="edit-product.html?id=${product.id}" class="text-blue-500 font-semibold">Edit</a>
                <button onclick="removeProduct(${product.id})" class="text-red-500 font-semibold">Remove</button>
            </td>
        </tr>
        `;
    });
}

function removeProduct(id) {
    let products = getProducts();
    products = products.filter(p => p.id != id);
    saveProducts(products);
    displayProducts();
}

function displayOrders() {
    let orders = getOrders();
    ordersTable.innerHTML = "";

    if (orders.length === 0) {
        ordersTable.innerHTML = `
        <tr>
            <td colspan="3" class="p-4 text-center text-gray-500">Geen bestellingen</td>
        </tr>`;
        return;
    }

    orders.forEach(order => {
        ordersTable.innerHTML += `
        <tr class="border-b text-center">
            <td class="p-2">${order.id}</td>
            <td class="p-2">€${order.total}</td>
            <td class="p-2">${order.date}</td>
        </tr>`;
    });
}


function resetProducts() {
    fetch("data/products.json")
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("products", JSON.stringify(data));
            displayProducts();
        });
}


productsTab.addEventListener("click", () => {
    productsPage.classList.remove("hidden");
    ordersPage.classList.add("hidden");

    productsTab.classList.add("bg-[#ffa200]", "text-black");
    ordersTab.classList.remove("bg-[#ffa200]", "text-black");
});

ordersTab.addEventListener("click", () => {
    ordersPage.classList.remove("hidden");
    productsPage.classList.add("hidden");

    ordersTab.classList.add("bg-[#ffa200]", "text-black");
    productsTab.classList.remove("bg-[#ffa200]", "text-black");
});


displayProducts();
displayOrders();