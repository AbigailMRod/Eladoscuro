//boton enviar 
const btnEnviar = document.getElementById("container");
btnEnviar.addEventListener("submit", function(evento) {
        evento.preventDefault();

        let nombre = document.getElementById("nombre").value;
        

        let correo = document.getElementById("email").value;
        

        let tel = document.getElementById("tel").value;
        

        let mensaje = document.getElementById("message").value;
        

        let newMsg = {
                "nombre": nombre,
                "correo": correo,
                "telefono": tel,
                "mensaje": mensaje,
            }
            // datos para alamcenar en local storage

        //almacenamiento en local storage
        localStorage.setItem("newmsg", JSON.stringify(newMsg));
        
        send(); //almacenamiento en local storage


        new Swal({ //sweetAlert
                icon: 'success',
                title: 'Enviado exitosamente',
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