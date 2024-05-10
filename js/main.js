import { cambiarSeccion } from "./ruteo.js";
import { cambiarEstadoMenu } from "./menuBurger.js";

// Seteo contenido por defecto al cargar el sitio
window.addEventListener("DOMContentLoaded", evento =>cambiarSeccion("cursos"));

// Capturo todos los botones del nav
const botonesNav = document.querySelectorAll('.menuSPA');

// Asigno la escucha del evento
for (let boton of botonesNav){
    boton.addEventListener('click', evento => cambiarSeccion(boton.getAttribute('id')));
}

// Menú hamburguesa

let menuBurger = document.querySelector('.menuBurger');
let menuPpal = document.querySelector('#menuPpal');

menuBurger.addEventListener('click', evento => cambiarEstadoMenu(menuPpal, menuBurger));