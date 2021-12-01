function login() {
    let admin, pass;

    admin = document.getElementById("admin").value;
    pass = document.getElementById("pass").value;

    if (admin == "ELADO" && pass == "Oscuro_09") {

        window.location = "admin.html";

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 5000);

    }
}