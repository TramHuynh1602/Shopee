var getProducts= []
var getFilms= []
fetch("http://localhost:3000/products")
.then (function (response) { return response.json(); })
.then (json => { 
    getProducts= [...json]
    localStorage.setItem("products", JSON.stringify(getProducts));
})
var products = JSON.parse(localStorage.getItem("products"));

export default products;