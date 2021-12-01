// ******************** Usuario activo en NavBar *******************************

let usuario = sessionStorage.getItem("usuarioActivo");


let sesionUsuario = document.getElementById("usuario");
console.log(usuario);

if (usuario !== null) {
    console.log(`ingresó`);
    sesionUsuario.classList.remove("usuario");
    sesionUsuario.classList.add("usuario-activo");
} 