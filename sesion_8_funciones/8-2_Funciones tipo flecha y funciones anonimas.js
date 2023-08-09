// Funciones de tipo flecha y anónimas

const array = [1, 2, 3, 4, 5, 68, 1, 65, 80, 234, 15];
const array2 = array.map((valor) => valor * 2);

console.log(array2);

// const dobleValor = valor => {
//     return valor * 2
// }

function doble(valor) {
  return valor * 2;
}

const dobleDelValor = (valor) => valor * 2;

console.log(doble(6));
console.log(dobleDelValor(6));

const valorDoble = (valor) => valor * 2;

var variable;

const array3 = array.map(dobleDelValor)
console.log(array3);
