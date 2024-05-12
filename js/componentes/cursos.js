// Carga de los datos externos
const cargarDatos = function() {
    let contenido = document.querySelector('.articulos');
    fetch('./datos/cursos.json')
        .then(respuesta => respuesta.json())
        .then(datos => cargarCursos(contenido, datos));
}

// Modificación del HTML
function cargarCursos(contenido, datos) {
    for (let d of datos) {
        let curso = document.createElement('article');
        let nombre = document.createElement('h3');
        nombre.className = "bold";
        nombre.innerHTML = d.nombre;
        let imagenes = document.createElement('div');
        imagenes.className = 'contImg'
        for (let i of d.imagen ) {
            let logo = document.createElement("img");
            logo.src = i.ubicacion;
            logo.alt = i.textoAlt
            logo.className = 'imgCurso';
            imagenes.appendChild(logo);
        }
        let inicio = document.createElement('p');
        inicio.innerHTML = `Fecha de inicio: ${new Date(d.inicio).toLocaleDateString()}`
        let masInfo = document.createElement('button');
        masInfo.className = "color4";
        masInfo.innerHTML= "Más información"
        curso.append(nombre, imagenes, inicio, masInfo);
        contenido.appendChild(curso);
    }
}


export { cargarDatos };