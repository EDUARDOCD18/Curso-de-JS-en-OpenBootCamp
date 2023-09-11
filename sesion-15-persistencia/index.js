// localStorage.setItem("nombre", "Javier")
// localStorage.setItem("nombre", "Wili")
// localStorage.setItem("llave", "valor")

console.log(localStorage.getItem("nombre"));
localStorage.setItem("persona", JSON.stringify({nombre: "gorka", edad: 32}))

console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify -> confierte un objeto/array en un string
//JSON.parse -> convierte un objeto convertido por stringify en un objeto de JS

localStorage.removeItem("nombre")


sessionStorage.setItem("nombreS", "Eduardo")

/* COOKIES */
console.log(document.cookie);

document.cookie = "nombreC=JAVIE"
document.cookie = "caducidad=Nombre;expires=" + new Data(2023, 0, 1).toUTCString()
console.log(document.cookie);