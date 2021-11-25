
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
            <div class="product">
            <ion-icon name="close-circle"> </ion-icon> 
            <span>${item.description}</span> 
            <img src="${item.img}"></img>
            </div>
            <div class="price">${item.price}</div> 
            </div>
            <div class="total">
            TOTAL $${cartCost}
            </div>
            `
        });
    }//if 
}//displayCart





displayCart();


