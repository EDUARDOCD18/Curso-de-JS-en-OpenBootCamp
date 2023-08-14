// .some()
const array = [2, 3, 4, 6, 87, 5, -54, 67, -98, 23];

res = array.some((valor) => valor < 0);
console.log(res);

const existe = array.some((valor) => valor === 3);
console.log(existe);

const listaObjetos = [
  { nombre: "Javier", edad: 24 },
  { nombre: "Eduardo", edad: 24 },
  { nombre: "Wilianni", edad: 22 },
  { nombre: "Pino", edad: 54 },
  { nombre: "Shawi", edad: 32 },
];

const existeWil = listaObjetos.some((persona) => persona.nombre === "Wilianni");
console.log(existeWil);

// Obtener una lista a partir de un objeto iterable
const str = "hola soy javier e";
console.log(str[5]);

// Método .from()
const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "holass", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

// Obtener un índice de todos los array
const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);