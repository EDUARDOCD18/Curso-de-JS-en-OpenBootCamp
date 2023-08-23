// Herencia
class Persona {
    _nombre
    _edad
  constructor(nombre, edad, isDev) {
    this._nombre = nombre;
    this._edad = edad;
  }

  saludo() {
    console.log(
      `Hola! mi nombre es ${this.nombre}. Tengo ${this.edad} años de edad.`
    );
  }
}

class Desarrolador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }
  saludo() {
    //Override
    super.saludo();
    console.log(`y Soy desarrollador de ${this.lenguaje}`);
  }
}

const nuevoDev = new Desarrolador("Eduardo", 34, "JS");
console.log(nuevoDev);
nuevoDev.saludo();

// Polimorfismo
