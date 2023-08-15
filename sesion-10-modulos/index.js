// Formas de importar y exportar módulos
// 1. CommonJS - requiere
// 2. Import ES6 - import
// const moduleMatematicas = require("./modulos/matematicas.js");

const { factorial, eleva, suma, multiplica } = require('./modulos/matematicas.js')

console.log(eleva(2, 5));
console.log(factorial(5));
console.log(suma(10, 33));
console.log(multiplica(20, 8));
// console.log(factorial(5));
// console.log(suma(20, 10));
// console.log(multiplica(2, 2));
// console.log(eleva(2, 4));
