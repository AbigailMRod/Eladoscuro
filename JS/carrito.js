let btn_enviar = document.getElementById('btn_enviar');


// articulos en el carrito del carrito
function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//if
}//onLoadcartNumbers
onLoadcartNumbers();





function displayCart(){
    console.log("dibujar pordutos en carrito");
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem("productosEnCarrito");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");


     



    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `<tr>
            <a class="thumbnail pull-left" href="./../pages/productos.html">  </a>
            <th scope="row"><img class="media-object" src="${item.img}" style="width: 130px; height: 150px;"></th> 
            <td>${item.description}</td>
            <td>
            <div
            
                <div>
                <class="quantity">
                <input class="cantidad-input" type="number" value="${item.inCart}">
                </div>
            </td>
            <td>$${item.price}.00</td>
            <td><strong>$${item.inCart*item.price}.00</strong></td>
            <td> 

                    
            <button type="button"  class="btn btn-danger" >
                <span class="remove"></span> Remover
            </button></td> 

          </tr>`; 
        
          
        
        });

        
        
        productContainer.innerHTML += `<body> 
        <tr>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td><h3>Total a pagar</h3></td>
        <td class="text-center"><h3><strong>$${cartCost}.00</strong></h3></td>
        </tr>
        <tr>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td>
        <td>
        <button type="button" id="btn_enviar" class="btn btn-success">
             <span class="glyphicon glyphicon-play">Comprar</span>
             

        </button>
        
        </td>
        </tr>

        
    </body>`;
    }//if 
    

     
    

}//displayCart



if (onLoadcartNumbers=0) {
    console.log ("no hay nadie")
} 

if (onLoadcartNumbers >=1) {
    console.log ("aqui toy")
}





// ${ btn_enviar.addEventListener('submit', (evento) => {
//     //     evento.preventDefault();
    
//     new Swal({ //sweetAlert
//     icon: 'success',
//     title: '1,2,3 ¡Estás dentro!',
//     text: '¡Enviado exitosamente!',
//     }) //sweetAlert    
                        
    
        
//     }) //addEvenListener  
// }






displayCart();


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


