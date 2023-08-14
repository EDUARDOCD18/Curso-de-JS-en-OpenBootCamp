// Métodos más avanzados
const array = ["Caracas", "Los Teques", "Carrizal", "San Antonio"];

array.forEach((v) => {
  console.log(v);
});

const val = array.forEach((v) => {
  console.log(v);
  return 4;
});
console.log(val);

// .map()
const newArray = array.map((valor, indice) => `${indice + 1}-. ${valor}.`);
console.log(newArray);

// .filter()
const listaObjetos = [
  { nombre: "Javier", edad: 24 },
  { nombre: "Wili", edad: 21 },
  { nombre: "Aimara", edad: 66 },
  { nombre: "Erasmo", edad: 21 },
  { nombre: "Pino", edad: 54 },
  { nombre: "Mélanie", edad: 3 },
];

// const personasMayores= listaObjetos.filter((obj) => {
//   if (obj.edad > 30) {
//     return true;
//   } else {
//     return false;
//   }
// });

const personasMayores = listaObjetos.filter((obj) => obj.edad > 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== "Pino");
console.log(nuevaLista);

// .reduce()
const valores = [3, 4, 64, 25, 13, 465, 100];

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) =>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})
console.log(suma);