// sets o conjuntos
const array = [1, 2, 3, 4, 5, 6, 3, 2, 1, 7];

const mi_set = new Set(array);
console.log(array);
console.log(mi_set);

// .add()
mi_set.add(8)
console.log(mi_set);

// .delete()
mi_set.delete(7)
console.log(mi_set);

// .clear() borrar todos los valores del set
// mi_set.clear()
// console.log(mi_set);

// Identificar valor dentro de un set .has()
console.log(mi_set.has(4));

// Conocer el tamaño del set .size
console.log(mi_set.size);

// Iteración de valores
mi_set.forEach(valor => {
    valor
})

const it_miSet = mi_set.values()
console.log(it_miSet);

const ar_miSet = [... mi_set]
console.log(ar_miSet);