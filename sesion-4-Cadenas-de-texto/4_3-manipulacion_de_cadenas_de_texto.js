// Métodos de cadenas de texto parte 2
let input = "Géminis";
let bdd = "géminis";

console.log(
  input + " ->  " + input.toLowerCase() + " -> " + input.toUpperCase()
);

console.log(input.toLocaleLowerCase() === bdd);

// Concatenar dos cadenas
let str_1 = "primera cadena";
let str_2 = "segunda cadena";

console.log(str_1.concat(", ", str_2));
console.log(str_1 + ", " + str_2);
console.log(`${str_1}, ${str_2}`);

//eliminar espacios añ inicio y al final
let str_3 = "  strings con espacios al final  "
console.log(str_3.length);
//trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//obtener el caracter en cierta posicion
let str_4 = "string 4"

console.log(str_4.charAt(7));
console.log(str_4[7]);

//obtener posicion de palabra dentro de una cadena
let str_5 = "soy una figura"
console.log(str_5.indexOf("figura"));
console.log(str_5[8]);
console.log(str_5.lastIndexOf("a"));