function addProduct() {
    const name = document.getElementById("name").value.trim();
    const price = document.getElementById("price").value;
    const image = document.getElementById("image-url").value.trim();

    if (name === "") {
        alert("Naam is verplicht");
        return;
    }

    if (price === "" || Number.isNaN(parseFloat(price))) {
        alert("Prijs moet een nummer zijn");
        return;
    }

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.push({
        id: products.length,
        name: name,
        price: parseFloat(price),
        image: image,
    });

    localStorage.setItem("products", JSON.stringify(products));

    window.location.href = "admin.html";
}
const addButton = document.getElementById("add-btn")


addButton.addEventListener("click", function() {
    addProduct()
})
