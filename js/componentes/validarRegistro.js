import { validarCuenta } from "./sesion.js";

// Creo un modelo con los datos esperados
const modeloDatos = {
    // Con regex
    nombre: /^[a-zA-Z\s]+$/,
    apellido: /^[a-zA-Z\s]+$/,
    correo: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    contrasenia: /^[a-z+A-Z+0-9+]{8,16}$/,
    doc_identidad: /^[0-9]{8,10}$/
}

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

// Completo datos recibidos en rtaForm
function respuestaOk(datos, resultado){
    let lista = document.querySelector('#datosValidos');
    let encabezado = document.querySelector('h2');
    encabezado.innerHTML = resultado.mensaje
    for (let d in datos) {
        if (d != 'contrasenia') {
            let item = document.createElement('li');
            item.innerHTML = `${d.toUpperCase()}: ${datos[d]}`;
            lista.appendChild(item);
        }
    }
}
// Envío de datos
async function enviarDatos(destino, datos) {
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
                        
    window.location.hash = '#rtaForm';
    // Aguardo que cargue la respuesta, luego la completo
    sessionStorage.setItem('perfil', 1);
    setTimeout(respuestaOk, 300, datos, resultado);
}

// Validación de los datos ingresados con modelo
function validarRegistro(tipo) {
    let destino;

    if (tipo == 'cuenta') {
        destino = 'https://chtolecac.pythonanywhere.com/api-edtech/cuenta';
    } else if (tipo == 'perfil') {
        destino = 'https://chtolecac.pythonanywhere.com/api-edtech/perfil';
    } else if (tipo == 'ingreso') {
        destino = 'https://chtolecac.pythonanywhere.com/api-edtech/validar';
    } else {
        console.warn('Destino de los datos erróneo!')
    }

    let entradas = document.querySelectorAll('.campoForm>input');
    let datos = {}
    
    entradas.forEach(elemento => {
        datos[elemento.getAttribute('id')] = elemento.value;
    });
    let formValido = true; // bandera
    let msjError = document.querySelector('#errores');

    for (let clave in datos) {
        if (!modeloDatos[clave].test(datos[clave])){
            formValido = false;
        }
    }
    
    if (tipo == 'perfil') {
        // Datos select y checkbox
        datos.correo = sessionStorage.getItem('identidad');
        let valorSelect = document.querySelector('#educacionFormal').value;
        datos.educacion = modeloFormacion.educacionFormal[valorSelect];
        
        let valorCheckbox = document.querySelectorAll('input[type=checkbox]');
        datos.lenguajes = []
        valorCheckbox.forEach(elemento => {
                if (elemento.checked) datos.lenguajes.push(elemento.id);
            });       
    }

    if (formValido) {

        if (tipo != 'ingreso') {
            enviarDatos(destino, datos);
        } else {
            validarCuenta(destino, datos);
        }

    } else {
        msjError.innerHTML = 'Verifique los datos ingresados!'
    }

}

// ********** Activación del formulario **********
function activarForm() {
    let form = document.querySelector('form');
    form.addEventListener('submit', evento => {
        validarRegistro(form.id);
        evento.preventDefault();
    });
}


export { activarForm };