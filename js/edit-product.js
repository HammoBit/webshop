const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let products = JSON.parse(localStorage.getItem("products")) || [];

document.getElementById("name").value = products[id].name;
document.getElementById("price").value = products[id].price;

function editProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const imageUrl = document.getElementById("image-url").value;

    if (name === "") {
        alert("Naam is verplicht");
        return;
    }

    if (price === "" || Number.isNaN(parseFloat(price))) {
        alert("Prijs moet een nummer zijn");
        return;
    }

    if (imageUrl === "") {
        alert("Voeg een afbeelding URL toe");
        return;
    }

    if (imageUrl) {
        products[id] = {
            id: parseInt(id),
            name: name,
            price: parseFloat(price),
            image: imageUrl,
        };
        localStorage.setItem("products", JSON.stringify(products));
        window.location.href = "admin.html";
        return;
    }

    products[id].name = name;
    products[id].price = parseFloat(price);
    localStorage.setItem("products", JSON.stringify(products));
    window.location.href = "admin.html";
}

const editButton = document.getElementById("edit-btn")


editButton.addEventListener("click", function() {
    editProduct()
})