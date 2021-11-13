const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    nombre: false,
    correo: false,
    telefono: false
}

const validarFormulario = (evento) => {


        switch (evento.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, evento.target, 'nombre');
                break;
            case "correo":
                validarCampo(expresiones.correo, evento.target, 'correo');
                break;
            case "telefono":
                validarCampo(expresiones.telefono, evento.target, 'telefono');
                break;
        } //switch
    } //constt validar formulario 

const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        } //else 
    } //validarCampo 


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
}); // inputs 

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    console.log(nombre);

    let correo = document.getElementById("email").value;
    console.log(correo);

    let tel = document.getElementById("tel").value;
    console.log(tel);

    let mensaje = document.getElementById("message").value;
    console.log(mensaje);

    let newMsg = {
            "nombre": nombre,
            "correo": correo,
            "telefono": tel,
            "mensaje": mensaje,
        }
        // datos para alamcenar en local storage

    //almacenamiento en local storage
    localStorage.setItem("newmsg", JSON.stringify(newMsg));
    console.info("save in local storage")


    // send(nombre, correo, tel, mensaje); //almacenamiento en local storage


    if (campos.nombre && campos.correo && campos.telefono) {

        formulario.reset(); //borramos los campos dentro de los inputs

        send(nombre, correo, tel, mensaje); //almacenamiento en local storage

        borrar(); //quitamos cuadros de verificación 



        new Swal({ //sweetAlert
                icon: 'success',
                title: 'Success...',
                text: 'Enviado exitosamente!',
            }) //sweetAlert

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 5000);

    } //condicion para validacion y envio al correo 

});


function send(nombre, correo, tel, mensaje) { //enviar correo
    setTimeout(function() {
        window.open("mailto:eladoscuro9@outlook.com?subject=Dudas y Aclaraciones Eladoscuro&body=" + nombre + '    ' + correo + '    ' + tel + '    ' + mensaje)
    }, 320);
} //enviar correo


function borrar() {
    //nombre
    document.getElementById("grupo__nombre").classList.remove('formulario__grupo-incorrecto');
    document.getElementById("grupo__nombre").classList.remove('formulario__grupo-correcto');
    document.getElementById("grupo__nombre").classList.remove('fa-times-circle');
    document.getElementById("grupo__nombre").classList.remove('fa-check-circle');
    //correo
    document.getElementById("grupo__correo").classList.remove('formulario__grupo-incorrecto');
    document.getElementById("grupo__correo").classList.remove('formulario__grupo-correcto');
    document.getElementById("grupo__correo").classList.remove('fa-times-circle');
    document.getElementById("grupo__correo").classList.remove('fa-check-circle');

    //telefono
    document.getElementById("grupo__telefono").classList.remove('formulario__grupo-incorrecto');
    document.getElementById("grupo__telefono").classList.remove('formulario__grupo-correcto');
    document.getElementById("grupo__telefono").classList.remove('fa-times-circle');
    document.getElementById("grupo__telefono").classList.remove('fa-check-circle');
} //función borrar