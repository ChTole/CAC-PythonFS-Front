{/* <article>
    <h3 class="bold">Python desde cero</h3>
    <div class="contImg">
        <img class="imgCurso" src="./img/cursos/python1.png" alt="Logo de lenguaje Python">
    </div>
    <p>Abiertas las inscripciones para Agosto/24.</p>
    <button class="color4">Ver curso</button>
</article> */}

const cargarDatos = function() {
    let contenido = document.querySelector('.articulos');
    // console.log(contenido);
    fetch('./datos/cursos.json')
        .then(respuesta => respuesta.json())
        .then(datos => cargarCursos(contenido, datos));
}

function cargarCursos(contenido, datos) {
    // console.log(datos);
    // console.log(contenido);
    for (let d of datos) {
        // console.log(d);
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