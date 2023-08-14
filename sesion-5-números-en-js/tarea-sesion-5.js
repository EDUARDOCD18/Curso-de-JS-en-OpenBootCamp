// Una variable que contenga tu altura en centímetros (entero)
let altura_cm = new Number(178)
console.log(parseInt(altura_cm));

//  Una variable que contenga tu altura en metros (número de coma flotante)
let altura_mts = new Number (1.78)
console.log(parseFloat(altura_mts));

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 85.0
console.log(peso_kg.toFixed(1));

// Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_re = 1.78
console.log(altura_re.toPrecision(2));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_bajo = 85.4
console.log(peso_bajo.toFixed());

//  Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let maxValor = Number.MAX_VALUE
let resultado = maxValor +1 === maxValor

console.log(resultado);