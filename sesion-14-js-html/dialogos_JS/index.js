const boton = document.querySelector("#btn");

console.log(boton);

boton.addEventListener("click", () => {
  console.log("Click");
  // alert("Click")
  // confirm("Correcto?") ? console.log("OK") : console.log("NO");

  const respuesta = confirm("¿Seguro?") 

  if (respuesta){
    console.log("Estás de acuerdo");
  } else{
    console.log("No estás de acuerdo");
  }
});

const infoBtn = document.querySelector("#info")
infoBtn.addEventListener("click", () =>{
    const nombre = prompt("¿Cuál es tu nombre?")
    
    if (nombre){
        console.log(`Un saludo, ${nombre}.`);
    } else{
        console.log("Ingresa tu nombre válido");
    }
})

const lista = [{
    nombre: "Javier",
    edad: 24
},{
    nombre: "Wilianni",
    edad: 22
}]

console.table(lista)