/////////////   TITULO Y SUBTITULO//////////////////

function tituloOSutitulo(texto, tags) {

    let tituloSubtitulo = document.getElementById('encabezado')
    let title = document.createElement(tags)
    title.textContent = texto;
    tituloSubtitulo.appendChild(title);
    title.style.textAlign = 'center';
    return title;


}

tituloOSutitulo('Bienvenido', 'h1')
tituloOSutitulo('Utiliza esta plantilla para cotizar tu trabajo', 'h2')

////////////////////////////////////////////////////////

/////////////////  OBJETOS DEL COTIZADOR   /////////////
class CotizadorDePinturas {
    constructor(jsonMATERIAL, jsonCONDICIONESSUPERFICIE, jsonTIPOSSUPERFICIES, jsonCOLORACTUAL, jsonCOLORNUEVO, costoPinturaM2, materialclass, terminacionclass, estadoSupclass, colorActualclass, colorNuevoclass, metros, )

    {
        let materialDeSuplet = jsonMATERIAL;
        let tipoDesuperficielet = jsonTIPOSSUPERFICIES;
        let condicionesSupLet = jsonCONDICIONESSUPERFICIE;
        let colorActuallet = jsonCOLORACTUAL;
        let colorNuevolet = jsonCOLORNUEVO;

        let costoPinturaM2let = costoPinturaM2;

        let metrosIngresados = metros;

        this.materialSelect = materialclass;
        this.terminacionSelect = terminacionclass;
        this.estadoSupSelect = estadoSupclass;
        this.colorActualSelect = colorActualclass;
        this.colorNuevoSelect = colorNuevoclass;

        this.calculoCostoM2 = function() {

            return (costoPinturaM2let * metrosIngresados)
        }
        this.factorMaterial = function() {

            let fmat = 1;
            let r = materialDeSuplet.find(r => r.material == this.materialSelect)
            fmat = r.factor;
            return fmat;
        }
        this.factorTerminacion = function() {
            let fter = 1;
            let r = tipoDesuperficielet.find(s => s.tipoSuperficie == this.terminacionSelect)
            fter = r.factor;
            return fter;
        }
        this.factorestado = function() {
            let fest = 1;
            let r = condicionesSupLet.find(t => t.condicionSup == this.estadoSupSelect)
            fest = r.factor;
            return fest;
        }
        this.factorColorActual = function() {
            let fcac = 1;
            let r = colorActuallet.find(u => u.colorActual == this.colorActualSelect)
            fcac = r.factor;
            return fcac;
        }
        this.factorColorNuevo = function() {
            let fcnuev = 1;
            let r = colorNuevolet.find(v => v.colorNuevo == this.colorNuevoSelect)
            fcnuev = r.factor;
            return fcnuev;
        }
        this.calculoDePrecio = function() {
            let valordeprecio = this.calculoCostoM2() * this.factorMaterial() * this.factorTerminacion() * this.factorestado() * this.factorColorActual() * this.factorColorNuevo()
            return valordeprecio.toFixed(0);

        }


    }
}