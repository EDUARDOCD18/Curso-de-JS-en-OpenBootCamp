function factorial(n) {
  let total = 1;
  for (let i = 1; i < n; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorial(10));

