const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  //   return false;
  throw new Error("Valor incorrecto. Debe ser numérico.");
};

// const doble = miFuncion("A1l")
const numero = 8;

try {
  // Código que puede fallar
  const doble = miFuncion(numero);
  console.log(doble);
  console.log("Ejecución correcta");
} catch (e) {
  // En caso de que falle, hacer esto
  console.log("ERROR");
  console.error(e);
} finally {
  console.log("Se ejecuta siempre, con o sin error.");
}

// InternalError, SyntaxError , TypeError, RangeError, ReferenceError
