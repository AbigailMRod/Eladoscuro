console.log("corriendo");

let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();  
          })
}//for


function cartNumbers(){
    localStorage.setItem('cartNumbers', 1);


}//cartNumbers function

