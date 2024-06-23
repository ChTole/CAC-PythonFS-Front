// Validación de cuenta
// Envío de datos
async function validarCuenta(destino, datos) {
    let envio = {
        method: "POST",
        body: JSON.stringify({
        datos: datos
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }

    let resultado = await fetch(destino, envio)
                        .then(respuesta => respuesta.json())
                        .then(resultado => resultado)
                        .catch(error => console.warn(error.status));
    
    if (resultado.status == 200) {
        modificarNavegacion(datos.correo, resultado.perfil);
    } else {
        alert('Revisá los datos ingresados');
    }
}

function modificarNavegacion(persona, perfil) {
    document.querySelector('#regCuenta').setAttribute('hidden', 'true');
    let logueo = document.querySelector('#ingCuenta');
    logueo.innerHTML = "Cerrar sesión";
    logueo.setAttribute('href', "#cerrar");
    window.location.hash = '#cursos';
    let nav = document.querySelector('#menuPpal');
    let identidad = document.createElement('a');
    identidad.className = 'menuSPA color2 pequenia'
    identidad.id = 'persona';
    identidad.href = '#perfil';
    identidad.innerHTML = `Hola, ${persona}`;
    nav.appendChild(identidad);
    sessionStorage.setItem('identidad', persona);
    sessionStorage.setItem('perfil', perfil);
}

function validarSesion() {
    if (sessionStorage.getItem('identidad')) {
        modificarNavegacion(sessionStorage.getItem('identidad'), sessionStorage.getItem('perfil'));
    }
}

function cerrarSesion() {
    sessionStorage.clear();
    document.querySelector('#regCuenta').removeAttribute('hidden');
    document.querySelector('#persona').remove();
    let logueo = document.querySelector('#ingCuenta');
    logueo.innerHTML = "Ingresar";
    logueo.setAttribute('href', "#ingresar");
}

export { validarCuenta };
export { validarSesion };
export { cerrarSesion };