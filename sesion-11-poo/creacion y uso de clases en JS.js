class Persona {
  nombre;
  edad;
  isDev;
  constructor(nombre, edad, isDev) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDev = isDev;
  }
  saludo() {
    console.log("Hola!!");
  }
}

const nueva_persona = new Persona("Javier", 24, true);
console.log(nueva_persona);
nueva_persona.saludo();
console.log(`Mi nombre es ${nueva_persona.nombre}`);

let numero = 60; // Inicializar
let persona_2 = new Persona("Wilianni", 22, false);

// instanceof -> typeof pero para clases
console.log(persona_2 instanceof Persona);
