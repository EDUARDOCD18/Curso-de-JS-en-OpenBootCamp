function factorial(n) {
  let total = n;
  while (n > 1) {
    n--;
    total *= n;
    if (n < 1) {
      break;
    }
  }

  return total;
}

console.log(factorial(10));
