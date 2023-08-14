var variable;
let variablelet;

const constante = "CONSTANTE";

var a = 1;
console.log(a);

a = 3;

console.log(a);
console.log(constante);

let b = 3;
console.log(b);

b = 5;
console.log(b);

var variable = "I'm a variable";

console.log(variable);

for (var i = 0; i < 3; i++) {
  var variable = "second variable";
}

console.log(variable);

for (var i = 0; i < 3; i++) {
  let variablelet = "Variable let";
}

console.log(variablelet);


console.log(typeof variablelet_)