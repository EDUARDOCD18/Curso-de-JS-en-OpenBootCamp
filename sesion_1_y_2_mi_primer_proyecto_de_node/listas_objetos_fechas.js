//Listas o arrays
const lista_1 = [1, "Hola", true, null, undefined];
console.log(lista_1);

const lista_2 = new Array(2, "Hola", true, null, undefined);
console.log(lista_2);

const lista_3 = new Array(3);
lista_3[0] = "Primer elemento";
console.log(lista_3);

const lista_4 = [lista_1, lista_2, lista_3];
console.log(lista_4);

//Obejtos
const movil = {
  altura: 5,
  ancho: 3,
  marca: "Redmi",
  liberado: true,
  contactos: ["Javier", "Wili", "Pino"],
  sd: {
    almacenamieto: 16 + " GB",
    marca: "Kingston",
  },
};

console.log(movil.sd, movil.contactos)

//Agregar atributo a objeto
movil.year = 2022
console.log(movil.year)

//Fechas
const ahora = new Date() //Fecha completa al nomento de crear la variable
console.log(ahora)

const fecha_mili = new Date(10) //Fecha en milisegundos
console.log(fecha_mili)

const fecha_cadena = new Date("june 29 2023")
console.log(fecha_cadena) 

const fecha_valores = new Date(2023, 5, 29)
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const year = ahora.getFullYear()

console.log(dia, mes, year)
