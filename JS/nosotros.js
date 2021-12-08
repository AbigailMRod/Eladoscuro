// ******************** Usuario activo en NavBar *******************************

let usuario = sessionStorage.getItem("usuarioActivo");


let iniciarSesion = document.getElementById("iniciarSesion");
let cerrarSesion = document.getElementById("cerrarSesion");


console.log(usuario);

if (usuario !== null) {
    console.log(`ingresó`);
    iniciarSesion.classList.remove("iniciarSesion");
    iniciarSesion.classList.add("iniciarSesionDesactivado");

    cerrarSesion.classList.remove("cerrarSesion");
    cerrarSesion.classList.add("cerrarSesionActivo");
}


//**************** Cerrar sesion ***************************************/

cerrarSesion.addEventListener("click", function(e) {
    sessionStorage.clear();    
});
