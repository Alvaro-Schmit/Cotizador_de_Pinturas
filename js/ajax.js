let HTMLCard = ""
let SerieOpelicula = ""
let contenidoJSON = []

function cargoImagenesCaja() {

    $.ajax({
        url: "js/datos.json",
        dataType: "json",
        success: function(data) {
            contenidoJSON = data
            $.each(contenidoJSON, function(i) {
                HTMLCard += `<div class="flexItemBody" id="item3">
                <img src="${contenidoJSON[i].img}" alt="${contenidoJSON[i].pregunta}">
            </div>
           `
            })
            $("#flexContainerBody03").html(HTMLCard)
        }
    })

}
setTimeout(() => {
    cargoImagenesCaja()
    $("#flexContainerBody03").fadeIn("fast")

}, 2000)