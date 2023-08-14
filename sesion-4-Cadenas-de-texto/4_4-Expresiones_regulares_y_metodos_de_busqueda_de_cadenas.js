// métodos de cadenas de texto parte 3
let texto_largo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore unde beatae accusantium repellat dolor, impedit exercitationem quidem ea, consequuntur delectus libero numquam? Asperiores itaque dicta qui culpa sequi numquam?";

console.log(texto_largo.match(/sit/g));

// existe la palabra dentro del texto
console.log(texto_largo.includes("ea"));

//saber si un texto comienza con una palabra
console.log(texto_largo.startsWith("Lorem"));
console.log(texto_largo.endsWith("?"));