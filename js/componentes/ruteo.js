// El inconveniente de utilizar SPA:
/* La URL es siempre la misma, entonces en el historial no impacta
ningún recorrido por el sitio, tampoco puedo compartir un lugar específico
del sitio.
Una posible solución (sin utilizar frameworks) es agregar un hash
al contenido dinámico. Para ésto también debo evaluar si la llamada a mi sitio
vienen acompañada de algún hash.*/

import { cargarDatos } from "./cursos.js";
import { activarForm } from "./validarRegistro.js";

// creo obj con las rutas
const sitio = {
    // contenido: [url-plantilla, scripts-adicionales]
    cursos: ['./sitio/cursos.html', cargarDatos],
    eventos: ['./sitio/eventos.html',],
    acercaDe: ['./sitio/acercade.html',],
    registro: ['./sitio/registro.html', activarForm],
    rtaForm: ['./sitio/rtaForm.html',],
    404: ['./sitio/404.html']
}

// función que completa el contenido
function cambiarSeccion(seccion){
    let seccionDinamica = document.querySelector('#contenidoSPA');
    fetch(`${seccion}`) 
        .then(respuesta => respuesta.text())
        .then(datos => seccionDinamica.innerHTML = datos);
}

function mostrarHash() {
    let hashActual = window.location.hash;
    if (hashActual.length == 0) {
        hashActual = "#cursos";
    }

    let ruta = sitio[404]; // 404 por defecto
    let destino = hashActual.substring(1,);
    // Evaluo la pertencia del hash a los atributos de "sitio"
    if (destino in sitio) {
        ruta = sitio[destino];
    }

    cambiarSeccion(ruta[0]);
    if (ruta[1]){
        // cambiarSeccion es asincro
        setTimeout(ruta[1], 500);
    }
}


export { mostrarHash };