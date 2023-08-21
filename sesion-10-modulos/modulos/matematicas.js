function suma(a, b) {
  return a + b;
}

function multiplica(a, b) {
  return a * b;
}

function eleva(a, b) {
  return a ** b;
}

function factorial(a) {
  let facto = 1;
  for (let i = 2; i <= a; i++) {
    facto *= i;
  }
  return facto;
}

// console.log(module);

module.exports = {
  suma,
  eleva,
  multiplica,
  factorial,
};
