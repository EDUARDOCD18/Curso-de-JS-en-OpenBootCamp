// Qué son las funciones, cómo se declaran y cómo se utilizan
const nom = "Javier E";

// saludar("Javier")
saludar(nom);

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

////
let nombre_2 = "Javivi";
console.log(nombre_2);

despedir(nombre_2);

function despedir(nombre) {
  nombre = "Wili";
  console.log(`Adiós, ${nombre}`);
}

////
let persona = { nombre: "Javieres", apellido: "Díaz" };

saludarPersona(persona);
console.log(persona);

function saludarPersona(objeto) {
  objeto.apellido = "Vargas";
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar();

////

function imprimeNumero(numero = 7) {
  // Parámetros por defecto
  console.log(numero);
}

imprimeNumero();

////

function imprimir(...parametros) {
  console.log(parametros);
}

imprimir(1, 23, 2, 3, 45, 7, "HOLA");

/////

function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 34, 3);
console.log(s);

////
let variable = "Hola";

function multi(a = 0, b = 0) {
  console.log(variable);
  return a * b;
}

console.log(multi(4, 9));
