// Cómo podemos comparar listas
// .every()
array = [4, -5, 7, 93, 2, 58, 2, -24];

// const resultado = array.every((valor) => {
//   if (valor > 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

const resultado = array.every((valor) => valor > 0);
console.log(resultado);

//Comparación de listas
const ar1 = [1, 2, 3];
const ar2 = [1, 2, 3];

console.log(ar1 === ar2);

const compararArrays = (array_1, array_2) => {
  if (array_1.length !== array_2.length) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res;
};

console.log(compararArrays(ar1, ar2));

const ar3 = [1,2,3,5]
console.log(compararArrays(ar1, ar3));