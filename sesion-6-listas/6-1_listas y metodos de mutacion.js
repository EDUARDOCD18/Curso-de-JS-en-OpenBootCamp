// Cómo trabajar con listas

let var1 = 45
let array = [1, 2, 3, 4, "hola", { id: 5 }, null, var1];
console.log(array);


// Acceder a los valores de un array a través de su posición
console.log(array[2]);
console.log(array[5]);

// Métodos para introducir valores en los arrays
// .push() .unshift() => mutan el valor del array
array.push("Final", 34) //Valores al final
console.log(array);

// Insertar valores al principio del array
array.unshift('18', "Javier")
console.log(array);

//Métodos para eliminar valores dentro de los array
// .pop() .shift => Mutan el valor del array

// Valores al final .pop()
array.pop()
console.log(array);

//Valores al principio .shift()
array.shift()
console.log(array);

// Método para eliminar, modificar o añadir valores .splice(x, y)
const array3 = [1, 2,3,4,5,6]

//Eliminar valores
array3.splice(2, 1)
console.log(array3)


// Añadir valores .slice(indice, 0, valores)
array3.splice(2, 0 , "Hola mundo")
console.log(array3);

// Modificar valores
array3.splice(2, 1, 3)
console.log(array3);