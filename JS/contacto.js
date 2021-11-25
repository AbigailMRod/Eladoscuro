const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,10}$/, // 7 a 14 numeros.
    mensaje: /^[a-zA-ZÀ-ÿ\s]{3,40}$/

}

const campos = {
    nombre: false,
    correo: false,
    telefono: false,
    mensaje: false

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
            case "mensaje":
                valText(expresiones.mensaje, evento.target, 'mensaje');
                break;

        } //switch
    } //constt validar formulario 

const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove('was-invalidated');
            document.getElementById(`grupo__${campo}`).classList.add('was-validated');


            setTimeout(() => {
                document.getElementById(`grupo__${campo}`).classList.remove('was-validated');
            }, 3000);



            campos[campo] = true;

        } else {
            document.getElementById(`grupo__${campo}`).classList.add('was-invalidated');
            document.getElementById(`grupo__${campo}`).classList.remove('was-validated');
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
    let correo = document.getElementById("correo").value;
    let tel = document.getElementById("tel").value;
    let mensaje = document.getElementById("mensaje").value;


    let newMsg = {
            "nombre": nombre,
            "correo": correo,
            "telefono": tel,
            "mensaje": mensaje,
        }
        // datos para alamcenar en local storage

    //almacenamiento en local storage
    localStorage.setItem("newmsg", JSON.stringify(newMsg));


    if (campos.nombre && campos.correo && campos.telefono && campos.mensaje) {

        formulario.reset(); //borramos los campos dentro de los inputs

        send(nombre, correo, tel, mensaje); //almacenamiento en local storage




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

}); //addEvenListener


function send(nombre, correo, tel, mensaje) { //enviar correo
    setTimeout(function() {
        window.open("mailto:eladoscuro9@outlook.com?subject=Dudas y Aclaraciones Eladoscuro&body=" + nombre + '    ' + correo + '    ' + tel + '    ' + mensaje)
    }, 320);
} //enviar correo


const valText = document.getElementById('mensaje');

if (valText == expresiones.mensaje) {

    document.getElementById('grupo_mensaje').classList.add('was-validated');
    document.getElementById('grupo_mensaje').classList.remove('was-invalidated');

    // setTimeout(() => {
    //     document.getElementById('grupo_mensaje').classList.remove('was-validated');
    // }, 3000);

    campos['mensaje'] = true;
    console.log(expresiones.mensaje);

} else {
    document.getElementById('grupo_mensaje').classList.add('was-validated');
    document.getElementById('grupo_mensaje').classList.remove('was-invalidated');
    campos['mensaje'] = false;

    console.log("entrrre");
}