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
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();



    if (campos.nombre && campos.correo && campos.telefono) {
        //formulario.reset();
        enviar();

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 5000);

    }
});






//boton enviar 
function enviar() {


    const btnEnviar = document.getElementById("send");
    btnEnviar.addEventListener("submit", function(evento) {
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
            send(); //almacenamiento en local storage
            console.log("aaaaaaaaaaaaa");

            new Swal({ //sweetAlert
                    icon: 'success',
                    title: 'Success...',
                    text: 'Enviado exitosamente!',
                }) //sweetAlert


        }) //btnEnviar
} //función enviar

function send() { //enviar correo
    setTimeout(function() {
        window.open("mailto:eladoscuro9@outlook.com?subject=Dudas y Aclaraciones Eladoscuro&body=" + document.getElementById('nombre').value + '    ' +
            document.getElementById('email').value + '    ' +
            document.getElementById('tel').value + '    ' +
            document.getElementById('message').value)
    }, 320);
} //enviar correo