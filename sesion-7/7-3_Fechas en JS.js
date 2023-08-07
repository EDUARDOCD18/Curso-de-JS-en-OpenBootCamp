//Trabajando con fechas

const fecha = new Date()
console.log(fecha);

const fecha2 = new Date(1999, 5, 18)
console.log(fecha2);

const fecha3 = new Date(-991000000000000) // Milisegundos
console.log(fecha3);

const fecha4 = new Date("June 18, 1999")
console.log(fecha4);

console.log(fecha > fecha2);

const fecha5 = new Date(1999, 5, 18)

console.log(fecha2 === fecha5); // ERROR no se deben comparar fechas de esta manera
console.log(fecha2.getTime() === fecha5.getTime()); // Manera ideal de comparar fechas

// Obterner el día, año y mes de una fecha
// .getDate
console.log(fecha2.getDate());
console.log(fecha2.getMonth()+1);
console.log(fecha2.getFullYear());

console.log(fecha2);

// .toLocalDateString
console.log(fecha2.toLocaleDateString('es-VE'));