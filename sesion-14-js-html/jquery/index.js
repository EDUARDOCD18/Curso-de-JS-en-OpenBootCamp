// $(selector).accion()

// $("li").hide()
// $("h1").hide()

$(document).ready(() => {
    // $("#el-1").hide()

    $(document).ready(() => {
        // $("#el-1").hide()

        $(".hide-btn").click(() => {
            console.log("Ocultando...");
            // $("h1").hide()
            $("h1").fadeOut()
        })
    })

    $(".show-btn").click(() => {
        console.log("Mostrando...");
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({ color: "red" })
    })

    $(".new-element").click(() => {
        $("ul").append("<li>New Element</li>")
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseenter((elem) =>{
        console.log("Entró el ratón");
        elem.target.style.color ="blue"
    })

    $("li").mouseleave((elem) =>{
        console.log("Entró el leave");
        elem.target.style.color ="black"
    })
})