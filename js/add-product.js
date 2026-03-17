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

const file = document.getElementById("image-file") ? document.getElementById("image-file").files[0] : null;
let products = JSON.parse(localStorage.getItem("products")) || [];

if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        products.push({
            id: products.length,
            name: document.getElementById("name").value.trim(),
            price: parseFloat(document.getElementById("price").value),
            image: e.target.result,
        });

        localStorage.setItem("products", JSON.stringify(products));
        window.location.href = "admin.html";
    };
    reader.readAsDataURL(file);
}