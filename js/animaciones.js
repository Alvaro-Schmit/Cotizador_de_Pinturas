$("#btnCotizar").click(function() {
    $("#btnCotizar").css("background-color", "rgb(156, 159, 189)")
    $("#obtenerCotizacion").slideDown(2000)
    $("#obtenerCotizacion").css("background-color", "rgba(181, 168, 204, 0.85)")

    $(".flexContainerBody").fadeOut(1000)

    $("#encabezado").fadeOut(1000)
})

//DOS formas de llamr un evento click LA PRIMERA CON JQUERY LA SEGUNDA JAVA SCRIPT NATIVO

function cambiosBoton() {
    $("#btnVolverACotizar").css("background-color", "rgb(156, 159, 189)")
    $(".flexContainerBody").fadeIn(800)
    $("#obtenerCotizacion").slideUp(1000)
    $("#encabezado").fadeIn(800)
    precioFinal.text = 0;
    metros.text = 0;
    $("#btnCotizar").css("background-color", "rgb(233, 234, 236)")

}

let btnVolverACotizar = document.getElementById("btnVolverACotizar")
btnVolverACotizar.addEventListener("click", cambiosBoton)

///---------------------------------------------------------------\\\


function desplazarMe(titulo) {
    $('html, body').animate({
        scrollTop: $('#' + titulo).offset().top
    }, 1600)
}



$('#llenarPlantilla').click(function() {
    desplazarMe("plantilla")
})


$('#btnVolverACotizar').click(function() {
    desplazarMe("plantilla")
})