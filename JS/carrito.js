let btn_enviar = document.getElementById('btn_enviar');
let btn_remove = document.getElementById('btn_remove');


// articulos en el carrito del carrito
function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//if
}//onLoadcartNumbers

function setItems(product){
    let cartItems = localStorage.getItem("productosEnCarrito");
    cartItems = JSON.parse(cartItems);
    //console.log("Mis productos en carrito son:" , cartItems);
    if(cartItems != null){
        if(cartItems[product.img] == undefined ){
            cartItems = { 
                ...cartItems,
                [product.img]: product
            }
        }//if para contar un producto distinto
        cartItems[product.img].inCart += 1;
    }else{   
    product.inCart = 1;
    cartItems = {
        [product.img]: product
    }
    }//ifElse agrega un +1 al inCart del mismo producto


    localStorage.setItem("productosEnCarrito", JSON.stringify(cartItems));
}//setItems fija productos en el localstorage


function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}//totalCost



function cartNumbers(product, action){
    //console.log("El producto elegido es:", product);   
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productosEnCarrito');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);    
}//cartNumbers agrega y quita la cantidad de articulos en el logo del carrito


function displayCart(){
    //console.log("dibujar pordutos en carrito");
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem("productosEnCarrito");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");





    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <tr>
            <th scope="row"><img class="media-object" src="${item.img}" ></th> 
            <td class="description">${item.description}</td>
            
            
            <td>
                <div class="quantity">
                    <ion-icon class="decrease" name="remove-circle" id="${item.img}"></ion-icon>
                        <span>${item.inCart}</span>
                    <ion-icon class="increase" name="add-circle" id="${item.img}"></ion-icon>
                </div>
            </td>


            <td class="precio">$${item.price}.00</td>
            <td><strong>$${item.inCart*item.price}.00</strong></td>
            
            
            <td>         
            <button type="button"  class="btn btn-danger" > 
                <span class="remove" id="${item.img}" > Remover </span>     
            </button>
            </td> 

          </tr>`; 
        });

        
        
        productContainer.innerHTML += `<body> 
        <tr>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td><h3>Total a pagar:</h3></td>
        <td class="text-center"><h3><strong>$${cartCost}.00</strong></h3></td>
        </tr>
        

        
    </body>`;
    deleteButtons();
    manageQuantity();

    }//if 
}//displayCart


function deleteButtons() {
    let deleteButtons = document.querySelectorAll(".remove");
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem("productosEnCarrito");
    cartItems = JSON.parse(cartItems);
    let productName;
    //console.log(typeof(cartItems[productName].inCart));

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].id;
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productosEnCarrito', JSON.stringify(cartItems));

            
            displayCart();
            onLoadCartNumbers();

        })
    }//for
}//DeleteButtons para remover articulos del carrito


function manageQuantity() {
    let decreaseButtons = document.querySelectorAll(".decrease");
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    //let currentProduct = '';
    let cartItems = localStorage.getItem('productosEnCarrito');
    cartItems = JSON.parse(cartItems);
    //console.log(decreaseButtons[0].id);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].id;
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productosEnCarrito', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].id;
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;  
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productosEnCarrito', JSON.stringify(cartItems));
            displayCart();
        });
    }//for
}//managaQuantity para subir y bajar la cantidad de articulos en el carrito





   


btn_enviar.addEventListener('click',() => {
    //     evento.preventDefault();
    new Swal({ //sweetAlert
    icon: 'success',
    title: 'Round 1',
    text: '¡Compra exitosa!',
    }) //sweetAlert    

    }) //addEvenListener  






onLoadcartNumbers();
displayCart();





// ******************** Usuario activo en NavBar *******************************

let usuario = sessionStorage.getItem("usuarioActivo");


let iniciarSesion = document.getElementById("iniciarSesion");
let cerrarSesion = document.getElementById("cerrarSesion");
let icono = document.getElementById("mascara");


console.log(usuario);

if (usuario !== null) {
    console.log(`ingresó`);
    iniciarSesion.classList.remove("iniciarSesion");
    iniciarSesion.classList.add("iniciarSesionDesactivado");
    

    cerrarSesion.classList.remove("cerrarSesion");
    cerrarSesion.classList.add("cerrarSesionActivo");
    icono.classList.remove("cerrarSesion");
    icono.classList.add("cerrarSesionActivo");
}


//**************** Cerrar sesion ***************************************/

cerrarSesion.addEventListener("click", function(e) {
    sessionStorage.clear();    
});


