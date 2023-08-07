// Trabajando con objetos
const obj = {
  id: 1,
  nombre: "Javier",
  apellido: "Chacón",
  isDev: true,
  librosFav: ["Caballero", "Principito"],
  "4-juegos": [1, 2, 3, 4],
};

console.log(obj.nombre);

const prop = "isDev";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Eduardo";
console.log(obj2.nombre);
console.log(obj.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Javi";
console.log(obj3.nombre);

// Cómo ordenar listas de objetos en función de una propiedad

const listaPelis = [
  { titulo: "Star wars", year: 1977 },
  { titulo: "Queen", year: 2018 },
  { titulo: "2012", year: 2008 },
  { titulo: "Joker", year: 2019 },
];

console.log(listaPelis);

//.sort() para ordenar las pelis por año de lanzamiento

listaPelis.sort((a,b) => a.year - b.year)
console.log(listaPelis);
