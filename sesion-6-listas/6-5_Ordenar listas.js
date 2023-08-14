// Cómo ordenar arrays .short()
const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log(array);

array.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return +1;
  } else {
    // a === b
    return 0;
  }
});
console.log(array);

// Ordenar solo arrays numéricos
const arrayNumerico = [4, 4, 33, 43, 5, 79, 575, 1, 4];
arrayNumerico.sort((a, b) => a - b);
console.log(arrayNumerico);

// Interesante array de objetos
const listaObjetos = [
  { nombre: "Javier", edad: 24 },
  { nombre: "Eduardo", edad: 24 },
  { nombre: "Wilianni", edad: 22 },
  { nombre: "Pino", edad: 54 },
  { nombre: "Shawi", edad: 32 },
];

// listaObjetos.sort((a, b) => {
//   if (a.edad < b.edad) {
//     return -1;
//   } else if (a.edad > b.edad) {
//     return +1;
//   } else {
//     return 0;
//   }
// });

listaObjetos.sort((a, b) => a.edad - b.edad);
console.log(listaObjetos);
