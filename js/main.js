import { cambiarSeccion } from "./ruteo.js";

// Seteo contenido por defecto al cargar el sitio
window.addEventListener("DOMContentLoaded", evento =>cambiarSeccion("cursos"));

// 1° Capturo todos los botones
const botonesNav = document.querySelectorAll('.menuSPA');

// 2° Asigno la escucha del evento
for (let boton of botonesNav){
    boton.addEventListener('click', evento => cambiarSeccion(boton.getAttribute('id')));
}