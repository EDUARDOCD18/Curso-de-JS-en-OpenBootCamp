const persona = {
  nombre: "Javier",
  edad: 24,
};
console.log(persona);

function obtenDobleEdad(edad) {
  return 2 * edad;
}

const edadDoble = obtenDobleEdad(persona.edad);
console.log(edadDoble);

function obtenArray(edad) {
  let arrayNums = [];

  for (let i = 0; i < 10; i++) {
    const numero = edad + i;
    console.log(numero);
    arrayNums = [...arrayNums, numero];
  }
  return arrayNums;
}

const array = obtenArray(persona.edad);
console.log(array);
