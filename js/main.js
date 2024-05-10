import { mostrarHash } from "./componentes/ruteo.js";
import { cambiarEstadoMenu } from "./componentes/menuBurger.js";
import { validarRegistro } from "./componentes/validarRegistro.js";


// ********** Formulario de registro **********
function activarForm() {
    try {
        const form = document.querySelector('form');
        form.addEventListener('submit', evento => {
            validarRegistro();
            evento.preventDefault();
        });
        console.log('Formulario disponible!');
    } catch (error) {
        console.warn('Formulario aún no disponible!')
    }
}


// ********** SPA **********
// Seteo contenido por defecto al cargar el sitio
window.addEventListener("DOMContentLoaded", evento => {
    mostrarHash();
    setTimeout(activarForm, 500); // si está visible el form, aguardo y activo la escucha del evento
});

// Si cambia el hash, cambia el contenido
window.addEventListener("hashchange", evento => {
    mostrarHash();
    setTimeout(activarForm, 500);
});

// ********** Menú oculto para celu **********
// Menú hamburguesa
let menuBurger = document.querySelector('.menuBurger');
let menuPpal = document.querySelector('#menuPpal');

menuBurger.addEventListener('click', evento => cambiarEstadoMenu(menuPpal, menuBurger));