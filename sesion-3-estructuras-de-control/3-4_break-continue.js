// Breack y continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];


for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    
    continue;
  }
  
  console.log(lista[i]);
  if (lista[i] > 5) {
    break;
  }
}
var j = 69

// ámbito de un ciclo
console.log(i); // i es una variable local del ciclo anterior
console.log(j);