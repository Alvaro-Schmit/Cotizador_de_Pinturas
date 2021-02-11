let tituloSubtitulo = document.getElementById('encabezado');
let title = document.createElement('h1')
title.textContent = 'Bienvenido';
tituloSubtitulo.appendChild(title);


let subtituloCotizar = document.createElement('h2');
subtituloCotizar.textContent = 'Utiliza esta plantilla para cotizar tu trabajo';
tituloSubtitulo.appendChild(subtituloCotizar);

title.style.textAlign = 'center';


subtituloCotizar.style.textAlign = 'center';