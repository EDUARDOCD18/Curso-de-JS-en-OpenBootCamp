// for loop

for (let i = 0; i < 10; i++) {
  console.log("Vuelta " + i);
}

let lista = [1, 2, 3, 84, 5, 6, "XD"];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 2);
}

// for of
for (let valor of lista) {
  console.log(valor);
}

// forEach
lista.forEach((valor) => {
  console.log(valor);
});

// for in
let persona = {
  nombre: "Javier",
  apellido: "Chacón",
  edad: 24,
  isDev: false,
};

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
