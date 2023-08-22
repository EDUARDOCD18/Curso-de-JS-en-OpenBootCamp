class Persona {
    // Private -> #
  #nombre;
  #edad;
  #obtenEdad;

  // Protected -> _
  _isDev = true;
  
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  saludo() {
    console.log(`¡Hola! Mi nombre es ${this.#nombre}, tengo ${this.#edad} años`);
  }

  obtenNombre(){
    return this.#nombre
  }

  #obtenEdad(){
    return this.#edad
  }
}

const persona = new Persona("Javier", 89);
console.log(persona);
console.log(persona.nombre);
persona.saludo();

console.log(persona.obtenNombre());
