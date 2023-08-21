const persona = {
  nombre: "Javier",
  edad: 24,
  isDev: true,
  saludo: function () {
    console.log("Hola");
  },
};

// console.log(persona);
persona.saludo();

const otraPersona = {
  nombre: "Wilianni",
  edad: 22,
  isDev: false,
  saludo: function () {
    console.log("Wilianni dice hola");
  },
};

console.log(otraPersona);
console.log(otraPersona.saludo());

//Factory function
const creaPersona = (nombre, edad, isDev) => {
  return {
    nombre,
    edad,
    isDev,
    saludo: function () {
      console.log("Hello moto");
    },
  };
};

const nueva_persona = creaPersona('Pino', 54, false);
console.log(nueva_persona);
