/* La función cambia la visibilidad del menú a través de una clase (ver estilos) 
y el ícono de origen (hambuguesa o cierre para ocultar) */

function cambiarEstadoMenu(menu, icono) {
    if (menu.classList[1] === 'visibleH'){
        menu.className = 'visibleV';
        icono.src = './icon/xmark-solid.svg';
    } else {
        menu.className = 'oculto visibleH';
        icono.src = './icon/bars-solid.svg';
    }
}

export { cambiarEstadoMenu };