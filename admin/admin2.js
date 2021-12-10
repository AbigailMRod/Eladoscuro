const endpoint="http://127.0.0.1:8080/api/productos";
const productosPromise = fetch(endpoint);
console.log(`El estado de la promesa es:  ${productosPromise}`);

productosPromise
 .then(function(data){
     console.log(data);
     return data.json();
 })

 .then(function(data){
     console.log(data);
            // let cardllena= "";            
            data.forEach(function (element) {
            // Productsase.forEach(function (element) {
            console.log(element)    
            let etiqueta= "";
            if(element.categoria_id_categoria==1){
                etiqueta= "list-items";
                etiquetaTalla = '<p class="card-text"> Unitalla</p>\n';
            } else if(element.categoria_id_categoria==2){
                etiqueta="list-items2";
                etiquetaTalla = "<p></p> \n"; 
            } else if(element.categoria_id_categoria==3){
                etiqueta="list-items3";
                    etiquetaTalla = "<p></p> \n"; 
            }
                let ancla = document.getElementById(etiqueta);
                let card= `<div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" style="padding-bottom: 3%;">
                   <div class="card">\n
                   <img src="${element.imagen}" class="card-img-top" alt="  "> \n
                   <div class="card-body">\n
                   <h6 class="card-title" style= "font-weight: bold; ">${element.nombre}</h6>\n
                   <p class="card-text">${element.descripcion }</p>\n
                   <p class="card-text" > $${element.precio}.00 MXN </p>\n
                    ${etiquetaTalla}  
                   <button type="button" onclick="agregarCarrito('${encodeURI(JSON.stringify(element))}')" class="btn btn-outline-dark btn-add-cart" >Agregar</button>\n
                   </div>\n
                   </div>\n
                   </div>`;
                
                ancla.innerHTML +=card;
            })     

             
 })
 .catch(function(error){
     console.log(error);

 })

function agregarCarrito(objProductoStr){
    objProducto=JSON.parse(decodeURI(objProductoStr));
    let valueInLocalStorage = window.localStorage.getItem("productosEnCarrito");
    objProducto.inCart=1;
        let storeList;
        let totalCarrito= 1;
        
        //si exite
        if (valueInLocalStorage) {
            //parsear
            storeList = JSON.parse(valueInLocalStorage)
            storeList.push(objProducto)
            window.localStorage.setItem("productosEnCarrito", JSON.stringify(storeList));
            totalCarrito= storeList.length;

        } else {
            //si no existe
            let carrito=[];
            carrito.push(objProducto)
            window.localStorage.setItem("productosEnCarrito", JSON.stringify(carrito));
        }
        onLoadcartNumbers(totalCarrito);


}



//************************* CARRITO **************************/




function onLoadcartNumbers(productNumbers) {
    console.log(productNumbers);
    // let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
        window.localStorage.setItem("cartNumbers", productNumbers);

    } //if
} //onLoadcartNumbers

function cartNumbers(product, action) {
    //console.log("El producto elegido es:", product);   
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productosEnCarrito');
    cartItems = JSON.parse(cartItems);

    if (action) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
} //cartNumbers function


function setItems(product) {
    let cartItems = localStorage.getItem("productosEnCarrito");
    cartItems = JSON.parse(cartItems);
    //console.log("Mis productos en carrito son:" , cartItems);
    if (cartItems != null) {
        if (cartItems[product.img] == undefined) {
            cartItems = {
                ...cartItems,
                [product.img]: product
            }
        } //if para contar un producto distinto
        cartItems[product.img].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.img]: product
        }
    } //ifElse agrega un +1 al inCart del mismo producto


    localStorage.setItem("productosEnCarrito", JSON.stringify(cartItems));
} //setItems fija productos en el localstorage


function totalCost(product) {
    // console.log("El precio del producto es", product.price);
    let cartCost = localStorage.getItem("totalCost");
    // console.log("Mi cart cost es", cartCost);
    // console.log(typeof cartCost);
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price);
    } //ifElse suma de productos diferentes

} //totalCost para calcular costo Total






onLoadcartNumbers();

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
