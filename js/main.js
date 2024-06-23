import { mostrarHash } from "./componentes/ruteo.js";
import { cambiarEstadoMenu } from "./componentes/menuBurger.js";
import { validarSesion } from "./componentes/sesion.js";

// ********** SPA **********
// Seteo contenido por defecto al cargar el sitio
window.addEventListener("DOMContentLoaded", evento => {
    mostrarHash();
    validarSesion();
});

// Si cambia el hash, cambia el contenido
window.addEventListener("hashchange", evento => {
    mostrarHash();
});

// ********** Menú oculto para celu **********
// Menú hamburguesa
let menuBurger = document.querySelector('.menuBurger');
let menuPpal = document.querySelector('#menuPpal');

menuBurger.addEventListener('click', evento => cambiarEstadoMenu(menuPpal, menuBurger));
