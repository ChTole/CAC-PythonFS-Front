// Carga de los datos externos
const cargarDatos = function() {
    let contenido = document.querySelector('.articulos');
    fetch('http://127.0.0.1:5000/api-edtech/temas')
        .then(respuesta => respuesta.json())
        .then(datos => cargarCursos(contenido, datos));
}

// Modificación del HTML
function cargarCursos(contenido, datos) {
    for (let d of datos) {
        let curso = document.createElement('article');
        let nombre = document.createElement('h3');
        nombre.className = "bold";
        nombre.innerHTML = d.tema;
        let imagenes = document.createElement('div');
        imagenes.className = 'contImg'
        for (let i of d.imagenes ) {
            let logo = document.createElement("img");
            logo.src = i.url_img;
            logo.alt = i.texto_alt
            logo.className = 'imgCurso';
            imagenes.appendChild(logo);
        }
        let masInfo = document.createElement('button');
        masInfo.className = "color4";
        masInfo.innerHTML= "Más información"
        curso.append(nombre, imagenes, masInfo);
        contenido.appendChild(curso);
    }
}


export { cargarDatos };