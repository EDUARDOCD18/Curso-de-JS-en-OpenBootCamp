// Una cadena de texto con tu Nombre
let nombre = "               Javier";
console.log(nombre);

// Otra cadena de texto con tu Apellido
let apellido = "Chacón                           ";
console.log(apellido);

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;
console.log(estudiante);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cantidad = estudiante.length;
console.log(cantidad);

// Una variable que contenga la primera letra del Nombre
let primera_letra = nombre[0];
console.log(primera_letra);

//Otra variable que contenga la última letra del Apellido
let ultima_letra = apellido[5];
console.log(ultima_letra);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let borrar = estudiante.trim().length;
console.log(borrar);
console.log(estudiante);

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let verdad = estudiante.includes(nombre);
console.log(verdad);
