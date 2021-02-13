function cargoElementSelect(comboSelect, arrayElement) {
    if (arrayElement.length > 0) {
        let element = ""
        for (let i in arrayElement) {
            element += `<option>${arrayElement[i]}</option>`
        }
        comboSelect.innerHTML = element
    }

}

$(document).ready(() => {
    cargoElementSelect(materialIndex, materialArray)
})

$(document).ready(() => {
    cargoElementSelect(terminacionIndex, tipoSuperficieArray)
})

$(document).ready(() => {
    cargoElementSelect(estadoSupIndex, CondicionSuperficieArray)
})

$(document).ready(() => {
    cargoElementSelect(colorActualIndex, colorActualArray)
})

$(document).ready(() => {
    cargoElementSelect(colorNuevoIndex, colorNuevoArray)
})


function cotizar() {

    objcotizar = new CotizadorDePinturas(jsonMATERIAL, jsonCONDICIONESSUPERFICIE, jsonTIPOSSUPERFICIES, jsonCOLORACTUAL, jsonCOLORNUEVO, costoPinturaM2, materialIndex.value, terminacionIndex.value, estadoSupIndex.value, colorActualIndex.value, colorNuevoIndex.value, metros.value)
    precioFinal.innerText = `$ ${objcotizar.calculoDePrecio()}`
}

$(btnCotizar).click(cotizar)