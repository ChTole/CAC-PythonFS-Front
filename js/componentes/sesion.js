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
        document.querySelector('#regCuenta').setAttribute('hidden', 'true');
        let logueo = document.querySelector('#ingCuenta');
        logueo.innerHTML = "Cerrar sesión";
        logueo.setAttribute('href', "#cerrar");
        window.location.hash = '#cursos';
    } else {
        alert('Revisá los datos ingresados');
    }

}

export { validarCuenta }