let btn_enviar = document.getElementById('btn_enviar');
let btn_remove = document.getElementById('btn_remove');


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
            productContainer.innerHTML += `
            <tr>
            <a class="thumbnail pull-left" href="./../pages/productos.html">  </a>
            <th><img class="media-object" src="${item.img}"></th>
            
            
            <td>${item.description}</td>
            <td>            
                <div>
                <class="quantity">
                <input class="cantidad-input" type="number" value="${item.inCart}" min="0">
                
                </div>
            </td>
            <td>$${item.price}.00</td>
            <td><strong>$${item.inCart*item.price}.00</strong></td>
            <td>                    
            <button type="button"  class="btn btn-danger" >
                <span class="remove">Remover</span> 
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
        

        
    </body>`;
    }//if 
    

     
    

}//displayCart




   btn_remove.addEventListener('click', () => {

    function removeproduct(event){

        const target = event.currentTarget;        
        target.parentNode.parentNode.remove();
        productContainer();
    }
    

   })
   


btn_enviar.addEventListener('click',() => {
    //     evento.preventDefault();
    new Swal({ //sweetAlert
    icon: 'success',
    title: 'Round 1',
    text: '¡Compra exitosa!',
    }) //sweetAlert    
                     
    
        
    }) //addEvenListener  








displayCart();


// ******************** Usuario activo en NavBar *******************************

let usuario = sessionStorage.getItem("usuarioActivo");


let sesionUsuario = document.getElementById("usuario");
console.log(usuario);

if (usuario !== null) {
    console.log(`ingresó`);
    sesionUsuario.classList.remove("usuario");
    sesionUsuario.classList.add("usuario-activo");
} 


