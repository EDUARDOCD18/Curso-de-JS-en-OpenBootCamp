class Persona {
  // Private -> #
  #nombre;
  #edad;

  // Protected -> _
  _isDev = true;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  saludo() {
    console.log(
      `¡Hola! Mi nombre es ${this.#nombre}, tengo ${this.#edad} años`
    );
  }

  obtenNombre() {
    //getter
    return this.#nombre;
  }

  #obtenEdad() {
    return this.#edad;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(nuevaEdad){
    this.#edad = nuevaEdad
    return this.#edad
  }
}

const persona = new Persona("Javier", 89);
// console.log(persona);
// console.log(persona.nombre);
// persona.saludo();

// console.log(persona.obtenNombre());

// Getter -> Métodos para obtener atributos o métodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);

// Setter -> Métodos que permite cambiar el valor de algún atributo privado o protegido
const edadNueva = persona.setEdad(24)
console.log(edadNueva);
