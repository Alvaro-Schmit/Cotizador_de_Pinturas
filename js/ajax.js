function cargoImagenesCaja() {

    $.ajax({
        url: "js/datos.json",
        dataType: "json",
        success: function(data) {

            contenidoJSON = data
            $.each(conitenidoJSON, function(i) {
                HTMLCard += `<div class="flexItemBody" id="item3">
                <img src="${contenidoJSON[i].img}" alt="${contenidoJSON[i].pregunta}">
            </div>
           `
            })
            $("#flexContainerBody02").html(HTMLCard)
        }
    })

}
setTimeout(() => {
    cargoImagenesCaja()
    $("#flexContainerBody03").fadeIn("fast", () => {
        $("#flexContainerBody02").fadeOut("fast")
    })

}, 2000)