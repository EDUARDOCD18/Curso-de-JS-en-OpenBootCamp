// import { suma, eleva, multiplica, factorial, nombre} from './modulos/matematica.js'
import * as moduloMatematica from "./modulos/matematica.js";
import getAutor, { libro } from "./modulos/literatura.js";

console.log(moduloMatematica.multiplica(3, 3));
console.log(moduloMatematica.suma(3, 5));
console.log(moduloMatematica.factorial(3));
console.log(moduloMatematica.eleva(10, 2));

console.log(moduloMatematica.nombre);

console.log(getAutor());
console.log(libro);