import { mostrarHash } from "./ruteo.js";
import { cambiarEstadoMenu } from "./menuBurger.js";

// ********** SPA **********
// Seteo contenido por defecto al cargar el sitio
window.addEventListener("DOMContentLoaded", evento => mostrarHash());
window.addEventListener("hashchange", evento => mostrarHash());

// ********** Menú oculto para celu **********
// Menú hamburguesa
let menuBurger = document.querySelector('.menuBurger');
let menuPpal = document.querySelector('#menuPpal');

menuBurger.addEventListener('click', evento => cambiarEstadoMenu(menuPpal, menuBurger));