// Iterar los valores de una lista
const array = ["Hola", 2, 5, 90, false, undefined];

// Forma antigua y poco eficiente
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Forma moderna ES6 .forEach()
let suma = 0;
const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8];
arrayNums.forEach((valor) => {
  console.log(valor);
  suma += valor;
});
console.log(suma);

// Buscar un valor dentro de una lista .find()
// Encontar el elemento de valor 7
const variable = array.find((valor) => {
  if (valor === 7) {
    return true;
  }
});

console.log(variable);

const listaObjetos = [
  { nombre: "Javier", edad: 24 },
  { nombre: "Eduardo", edad: 24 },
  { nombre: "Wilianni", edad: 22 },
  { nombre: "Pino", edad: 54 },
  { nombre: "Shawi", edad: 32 },
];

// Forma 1 de encontrar la edad
const objeto1 = listaObjetos.find(o =>{
    if (o.nombre === "Wilianni"){
        return true
    }
})
console.log(objeto1.edad);

//Forma 2 de encontrar la edad
const objeto2 = listaObjetos.find((o) => {
  return o.nombre === "Pino";
});
console.log(objeto2.edad);

// Forma 3 de encontrar la edad
const objeto3 = listaObjetos.find(o=> o.nombre === "Eduardo")
console.log(objeto3.edad);

//Forma 4 de buscar la edad construyendo el método
const { edad } =  listaObjetos.find(o=> o.nombre === "Shawi")
console.log(edad);
