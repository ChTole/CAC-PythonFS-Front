// Contenido SPA
// Cuidado con como se lee...

// 3° creo obj con las rutas
const sitio = {
    cursos: './sitio/cursos.html',
    eventos: './sitio/eventos.html',
    acercaDe: './sitio/acercaDe.html',
    registro: './sitio/registro.html'
}

// 4° función que completa el contenido
function cambiarSeccion(seccion){
    let seccionDinamica = document.querySelector('#contenidoSPA');
    fetch(`${sitio[seccion]}`)
        .then(respuesta => respuesta.text())
        .then(datos => seccionDinamica.innerHTML = datos);
}

// 1° Capturo todos los botones
const botonesNav = document.querySelectorAll('.menuSPA');

// 2° Asigno la escucha del evento
for (let boton of botonesNav){
    boton.addEventListener('click', evento => cambiarSeccion(boton.getAttribute('id')));
}