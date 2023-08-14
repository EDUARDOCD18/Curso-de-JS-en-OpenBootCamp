// Comparaciones

// Igualdad
if (5 == 5) {
  console.log("5 es igual a 5");
}

if (5 === 5) {
  console.log("5 es muy igual a 5");
}

let a = 5;
let b = "5";

if (a == b) {
  console.log("a es igual a b débil");
  // Compara solo el valor
}

if (a === b) {
  console.log("a es igual a b fuerte");
  // Compara valor y tipo
}

let c = 4;
let d = 10;

if (c != d) {
  console.log("c es diferente a d débil");
}

if (c !== d) {
  console.log("c es deferente a d fuerte");
}

//Mayores y menores
let max = 10;
let min = 5;

if (max > min) {
  console.log("Max es mayor a min");
}

if (max >= 10) {
  console.log("Es mayor o igual");
}

if (min < max) {
  console.log("min es menor a max");
}

if (min <= max) {
  console.log("es menor o igual");
}
