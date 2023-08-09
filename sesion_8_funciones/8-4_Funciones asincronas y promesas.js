// Funciones asíncronas

function asic() {
  // Hace llamado a bdd extern
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
  // si está todo correcto
if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

miPromesa
    .then(() => console.log("Ejecutado de forma correcta!!"))
    .catch(()=> console.log("ERROR"))
    .finally(()=> console.log("Ejecución terminada"))