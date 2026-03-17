function addProduct(){

const name = document.getElementById("name").value.trim()
const price = document.getElementById("price").value
const image = document.getElementById("image-url").value.trim()

if(name === ""){
alert("Naam is verplicht")
return
}

if(price === "" || isNaN(price)){
alert("Prijs moet een nummer zijn")
return
}

if(image === ""){
alert("Voeg een afbeelding URL toe")
return
}

let products = JSON.parse(localStorage.getItem("products")) || []

products.push({
id: products.length,
name: name,
price: parseFloat(price),
image: image
})

localStorage.setItem("products", JSON.stringify(products))

window.location.href = "admin.html"

}



if(file){

const reader = new FileReader()
reader.onload = function(e){

products.push({
id: products.length,
name: name,
price: parseFloat(price),
image: e.target.result

})

localStorage.setItem("products", JSON.stringify(products))
window.location.href = "admin.html"

}
reader.readAsDataURL(file)

}