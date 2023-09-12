const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".section")
// console.log(parrafos);

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Arrastre de " + parrafo.innerText);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)

        parrafo.addEventListener("dragend", () => {
            console.log("Fin del arrastre")
            parrafo.classList.remove("dragging")
        })
    })

    secciones.forEach(seccion => {
        seccion.addEventListener("dragover", () => {
            event.preventDefault()
            event.dataTransfer.dropEffect = "copy"
            // console.log("Drag over");
        })

        seccion.addEventListener("drop", event => {
            console.log("Drop")
            const id_parrafo = event.dataTransfer.getData("id")
            // console.log(`Párrafo ID: ${id_parrafo}`)
            const parrafo = document.getElementById(id_parrafo)
            seccion.appendChild(parrafo)
        })
    })
})