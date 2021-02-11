function cargoElementSelect(comboSelect, arrayElement) {
    if (arrayElement.length > 0) {
        let element = ""
        for (let i in arrayElement) {
            element += `<option>${arrayElement[i]}</option>`
        }
        comboSelect.innerHTML = element
    }

}

document.addEventListener("DOMContentLoaded", () => {
    cargoElementSelect(materialIndex, materialArray)
})

document.addEventListener("DOMContentLoaded", () => {
    cargoElementSelect(terminacionIndex, tipoSuperficieArray)
})

document.addEventListener("DOMContentLoaded", () => {
    cargoElementSelect(estadoSupIndex, CondicionSuperficieArray)
})

document.addEventListener("DOMContentLoaded", () => {
    cargoElementSelect(colorActualIndex, colorActualArray)
})

document.addEventListener("DOMContentLoaded", () => {
    cargoElementSelect(colorNuevoIndex, colorNuevoArray)
})


function cotizar() {

    objcotizar = new CotizadorDePinturas(jsonMATERIAL, jsonCONDICIONESSUPERFICIE, jsonTIPOSSUPERFICIES, jsonCOLORACTUAL, jsonCOLORNUEVO, costoPinturaM2, materialIndex.value, terminacionIndex.value, estadoSupIndex.value, colorActualIndex.value, colorNuevoIndex.value, metros.value)
    precioFinal.innerText = `$ ${objcotizar.calculoDePrecio()}`
}

btnCotizar.addEventListener("click", cotizar)