//boton enviar 
const btnEnviar = document.getElementById("container");
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


        new Swal({ //sweetAlert
                icon: 'success',
                title: 'Success...',
                text: 'Enviado exitosamente!',
            }) //sweetAlert


    }) //btnEnviar

function send() { //enviar correo
    setTimeout(function() {
        window.open("mailto:eladoscuro9@outlook.com?subject=Dudas y Aclaraciones Eladoscuro&body=" + document.getElementById('nombre').value + '    ' +
            document.getElementById('email').value + '    ' +
            document.getElementById('tel').value + '    ' +
            document.getElementById('message').value)
    }, 320);
} //enviar correo