// articulos en el carrito del carrito
function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//if
}//onLoadcartNumbers


onLoadcartNumbers();

// ******************** Usuario activo en NavBar *******************************

let usuario = sessionStorage.getItem("usuarioActivo");


let sesionUsuario = document.getElementById("usuario");
console.log(usuario);

if (usuario !== null) {
    console.log(`ingresó`);
    sesionUsuario.classList.remove("usuario");
    sesionUsuario.classList.add("usuario-activo");
} 