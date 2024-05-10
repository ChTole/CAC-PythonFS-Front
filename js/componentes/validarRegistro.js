// Creo un modelo con los datos esperados
const modeloDatos = {
    // Con regex
    nombre: /^[a-zA-Z\s]+$/,
    apellido: /^[a-zA-Z\s]+$/,
    correo: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    contrasenia: /^[a-z+A-Z+0-9+]{8,16}$/
}

// Completo datos recibidos en rtaForm
function respuestaOk(datos){
    let lista = document.querySelector('#datosValidos');
    for (let d in datos) {
        if (d != 'contrasenia') {
            let item = document.createElement('li');
            item.innerHTML = `${d.toUpperCase()}: ${datos[d]}`;
            lista.appendChild(item);
        }
    }
}

// Validación de los datos ingresados con modelo
function validarRegistro() {
    console.log('Validación!');
    let entradas = document.querySelectorAll('.campoForm>input');
    let datos = {}
    entradas.forEach(elemento => {
        datos[elemento.getAttribute('id')] = elemento.value;
    });

    let formValido = true; // bandera
    let msjError = document.querySelector('#errores');
    console.log(msjError);

    for (let clave in modeloDatos) {
        if (!modeloDatos[clave].test(datos[clave])){
            formValido = false;
            console.log(`no válido: ${datos[clave]}`);
            console.log(document.querySelector('#' + clave));
            // document.querySelector('#' + clave).setCustomValidity('Dato inválido!');
        }
    }
    
    if (formValido) {
        window.location.hash = '#rtaForm';
        // Aguardo que cargue la respuesta, luego la completo
        setTimeout(respuestaOk, 500, datos);
    } else {
        msjError.innerHTML = 'Verifique los datos ingresados!'
    }
}

export { validarRegistro };