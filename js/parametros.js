///// VARIABLES PRIMARIAS ////////////

const costoPinturaM2 = 100;
const materialArray = ['Pared con revoque', 'Pared de yeso', 'Madera', 'Metal']
const tipoSuperficieArray = ['Lisa (terminacion con enduido)', 'Reboque o textura Fina', 'Reboques o Texturas rugosas', 'Ladrillo visto'];
const CondicionSuperficieArray = ['optima condicion', 'Con detalles de fisuras y descascarados', 'Muy deteriorada'];
const colorActualArray = ['Blanco', 'color claro', 'color oscuro'];
const colorNuevoArray = ['Blanco', 'color claro', 'color oscuro'];

//// VARIABLE SEGUN COLOR NUEVO Y VIEJO  //////////////



// if (jsoncolorNuevo.color ac === colorNuevo) {
//     cambioColor = 3;
//     console.log(cambioColor);
// }


/// ARRAYS //////////////////////////////////

let jsonMATERIAL = [{ 'material': 'Pared con revoque', 'factor': 1 },
    { 'material': 'Pared de yeso', 'factor': 1 },
    { 'material': 'Madera', 'factor': 1.5 },
    { 'material': 'Metal', 'factor': 1.5 }
]

let jsonTIPOSSUPERFICIES = [{ 'tipoSuperficie': 'Lisa (terminacion con enduido)', 'factor': 1 },
    { 'tipoSuperficie': 'Reboque o textura Fina', 'factor': 1.2 },
    { 'tipoSuperficie': 'Reboques o Texturas rugosas', 'factor': 1.3 },
    { 'tipoSuperficie': 'Ladrillo visto', 'factor': 1.6 }
]

let jsonCONDICIONESSUPERFICIE = [{ 'condicionSup': 'optima condicion', 'factor': 1 },
    { 'condicionSup': 'Con detalles de fisuras y descascarados', 'factor': 1.35 },
    { 'condicionSup': 'Muy deteriorada', 'factor': 1.7 }
]

let jsonCOLORACTUAL = [{ 'colorActual': 'Blanco', 'factor': 1 },
    { 'colorActual': 'color claro', 'factor': 1.2 },
    { 'colorActual': 'color oscuro', 'factor': 1.4 }
]

let jsonCOLORNUEVO = [{ 'colorNuevo': 'Blanco', 'factor': 1 },
    { 'colorNuevo': 'Mismo color', 'factor': 1 },
    { 'colorNuevo': 'color claro', 'factor': 1.2 },
    { 'colorNuevo': 'color oscuro', 'factor': 1.4 }

]