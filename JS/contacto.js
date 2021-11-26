const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.getElementById('mensaje');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,10}$/, // 7 a 10 numeros.
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
                validarCampo(expresiones.mensaje, evento.target, 'mensaje');
                break;

        } //switch
    } //const validar formulario 

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


//validación text area
textarea.addEventListener('keyup', validarFormulario);
textarea.addEventListener('blur', validarFormulario);


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
                title: '1,2,3 ¡Estás dentro!',
                text: '¡Enviado exitosamente!',
            }) //sweetAlert

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 5000);

    } //condicion para validación y envio al correo 

}); //addEvenListener


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
} //función borra





 // **********************articulos en el carrito del carrito ***********************// 
 function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//if
}//onLoadcartNumbers
onLoadcartNumbers();
// ****************para el carrito******************************************//
