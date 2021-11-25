// articulos en el carrito del carrito
function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//if
}//onLoadcartNumbers


onLoadcartNumbers();