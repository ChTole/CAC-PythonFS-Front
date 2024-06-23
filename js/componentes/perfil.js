// Validación del perfil según sesión

import { activarForm } from "./validarRegistro.js";

const modeloFormacion = {
    educacionFormal: [
        'Secundario incompleto',
        'Secundario completo',
        'Terciario/Universitario incompleto',
        'Terciario/Universitario completo'
    ],
    lenguajes: {
        HTML: 0,
        CSS: 0,
        JavaScript: 0,
        Python: 0
    }
}

function habilitar(campos){
    campos.forEach(campo => campo.removeAttribute('disabled'));
}

function completarForm(perfil) {
    let entradas = document.querySelectorAll('.campoForm>input');
    entradas.forEach(campo => {
        campo.setAttribute('disabled', 'true');
        campo.setAttribute('value', perfil[campo.id]);
    });
    let indice = modeloFormacion.educacionFormal.indexOf(perfil.educacion);
    let eduFormal = document.querySelector('#educacionFormal');
    eduFormal.options[indice];
    eduFormal.setAttribute('disabled', 'true');
    document.querySelector('.validar>input').setAttribute('disabled', 'true');
    let botonera = document.querySelector('.validar');
    let modificar = document.createElement('button');
    modificar.className = "color1 validarInput";
    modificar.innerHTML = 'Modificar datos';
    modificar.addEventListener('onclick', evento => {
        entradas.forEach(campo => {
            campo.removeAttribute('disabled');
            eduFormal.removeAttribute('disabled',);
            document.querySelector('.validar>input').removeAttribute('disabled');
        });
        evento.preventDefault();
    });
    botonera.appendChild(modificar);
}

async function obtenerPerfil(correo) {
    let envio = {
        method: "POST",
        body: JSON.stringify({
        datos: correo
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }

    let perfil = await fetch('http://127.0.0.1:5000/api-edtech/obt-perfil', envio)
                    .then(respuesta => respuesta.json())
                    .then(datos => datos)
                    .catch(error => console.warn('Algo salió mal!', error));
    
    completarForm(perfil);
    
}

function validarPerfil() {
    let existe = sessionStorage.getItem('perfil');
    if (existe == 1) {
        obtenerPerfil(sessionStorage.getItem('identidad'));
    } else {
        activarForm();
    }
}

export { validarPerfil }