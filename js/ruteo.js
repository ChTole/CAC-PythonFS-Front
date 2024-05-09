// creo obj con las rutas
const sitio = {
    cursos: './sitio/cursos.html',
    eventos: './sitio/eventos.html',
    acercaDe: './sitio/acercaDe.html',
    registro: './sitio/registro.html'
}

// función que completa el contenido
function cambiarSeccion(seccion){
    let seccionDinamica = document.querySelector('#contenidoSPA');
    fetch(`${sitio[seccion]}`)
        .then(respuesta => respuesta.text())
        .then(datos => seccionDinamica.innerHTML = datos);
}

export {cambiarSeccion};