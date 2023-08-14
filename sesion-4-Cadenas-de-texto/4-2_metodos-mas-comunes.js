// Métodos más usados con cadenas
// Obtener la longitud de una cadena

let str = "I'm a string";
console.log(str.length);

// Obetener partes del string

// slice()
let str_slice = str.slice(0, 3);
console.log(str_slice);

// substring()
let str_substring = str.substring(0, 5);
console.log(str_substring);

// substr()
let str_substr = str.substr(3, 10);
console.log(str_substr);

//Reemplazar contenido de string
let cadena = "My name is Javier";
console.log(cadena);

console.log(cadena.replace("Javier", "Eduardo"));

let texto_largo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore unde beatae accusantium repellat dolor, impedit exercitationem quidem ea, consequuntur delectus libero numquam? Asperiores itaque dicta qui culpa sequi numquam?";

console.log(texto_largo.replace('Lorem', 'XD'));

console.log(texto_largo.replace(/a/g, 'A'));
