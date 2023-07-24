// Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());
console.log(b.valueOf());

let str = new String("I'm a String");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number)- Infinity
let n = Number("Adiós");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);

// Números hexadecimales (base 16)
let numHex = '0x3a5b7'
console.log(parseInt(numHex, 16));


// Cómo convertir los strings a valores numéricos cno Number, parseInt y parseFloat
let numero = '5.89'
let num_2 = 17.2

console.log(typeof numero);
console.log(numero + num_2); // Error de concepto

console.log(Number(numero) + num_2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num_3 = 4
console.log(parseInt(num_3));
console.log(parseFloat(num_3));

// Obtener los valores máximo y mínimo en JS
let min_precision = Number.EPSILON
let min_valor_js = Number.MIN_VALUE
let max_valor_js = Number.MAX_VALUE

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);
console.log(2 ** 1023);
