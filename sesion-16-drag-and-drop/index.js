const parrafos = document.querySelectorAll(".parrafo")
// console.log(parrafos);

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", () => {
        console.log("Arrastre de " + parrafo.innerText);
        parrafo.classList.add("dragging")
    })

    parrafo.addEventListener("dragend", () => [
        console.log("Fin del arrastre")
    ])
})