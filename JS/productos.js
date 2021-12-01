/* *********Esta página se va sustitutir por la de admin2.js |
con la finalidad de traer todos los productos desde *********|
el local storage y facilitar tareas *************************|
 */


// ya no usar esta página!!! 
// se recomienda borrarla y dejarla guardada en algún commit de GitHub


//** Funcion para playeras**/
function addItem(item){ 
    const itemHTML =  
            '   <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">\n'+ 
            '   <div class="card">\n' +
            '   <img src="'+item.img+'" class="card-img-top" alt="  "> \n'+
            '   <div class="card-body">\n'+
            '   <h5 class="card-title">'+item.model+'</h5>\n'+
            '   <p class="card-text">'+item.description +'</p>\n'+
            '   <p class="card-text"> $'+item.price +' MXN </p>\n'+
            '   <p class="card-text"> Tallas: XS, S, M, L XL </p>\n'+
            '   <button type="button" class="btn btn-outline-dark">Agregar</button>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   <br/>';
    const itemsContainer = document.getElementById("list-items");    
    itemsContainer.innerHTML += itemHTML;   
}

//** Funcion para stickers**/
function addItem2(item){ 
    const itemHTML =  
            '   <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">\n'+ 
            '   <div class="card">\n' +
            '   <img src="'+item.img+'" class="card-img-top" alt="  "> \n'+
            '   <div class="card-body">\n'+
            '   <h5 class="card-title">'+item.name+'</h5>\n'+
            '   <p class="card-text">'+item.description +'</p>\n'+
            '   <p class="card-text">'+item.price +' MXN </p>\n'+
            '   <button type="button" class="btn btn-outline-dark">Agregar</button>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   <br/>';
    const itemsContainer = document.getElementById("list-items2");    
    itemsContainer.innerHTML += itemHTML;   
}

//** Funcion para posters**/
function addItem3(item){ 
    const itemHTML =  
            '   <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">\n'+ 
            '   <div class="card">\n' +
            '   <img src="'+item.img+'" class="card-img-top" alt="  "> \n'+
            '   <div class="card-body">\n'+
            '   <h5 class="card-title">'+item.name+'</h5>\n'+
            '   <p class="card-text">'+item.description +'</p>\n'+
            '   <p class="card-text">'+item.price +' MXN </p>\n'+
            '   <button type="button" class="btn btn-outline-dark">Agregar</button>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   <br/>';
    const itemsContainer = document.getElementById("list-items3");    
    itemsContainer.innerHTML += itemHTML;   
}






//******************************** LISTADO DE ARTICULOS (FORMATO JSON) **************************************//

// ********* PLAYERAS  *******//
addItem({'model':'Amor a la mexicana',
    'img':'./../img/Index/playera_1.jpg',         
    'description':'Sudadera para hombre',
    'price' : '800.00'});

addItem({'model':'Amor a la mexicana',
    'img':'./../img/Index/playera_2.jpg', 
    'description':'Playera para mujer',
    'price' : '400.00'});

addItem({'model':'Lucha libre',
    'img':'./../img/Index/playera_3.jpg',
    'description':'Playera para hombre',
    'price' : '400.00'});

addItem({'model':'Lucha libre',
    'img':'./../img/Index/playera_4.jpg',
    'description':'Playera para mujer',
    'price' : '400.00'});


 
// ********* STICKERS  *******//
addItem2({'name':'Logo',
    'img':'./../img/Index/sticker_1.jpg',        
    'description':'Juego de stickers 1', 
    'price' : '100.00'});

addItem2({'name':'Logo + amor ',
    'img':'./../img/Index/sticker_2.jpg', 
    'description':'Juego de stickers 2', 
    'price' : '100.00'});

addItem2({'name':'Lucha libre',
    'img':'./../img/Index/sticker_3.jpg',
    'description':'Juego de stickers 3', 
    'price' : '100.00'});

addItem2({'name':'Amor a la mexicana',
    'img':'./../img/Index/sticker_4.jpg',
    'description':'Juego de stickers 4', 
    'price' : '100.00'}); 
 
// ********* POSTERS  *******//
addItem3({'name':'Lucha libre',
    'img':'./../img/Index/poster_1.jpg',        
    'description':'Poster tamaño carta', 
    'price' : '50.00'});

addItem3({'name':'Lucha libre + amor',
    'img':'./../img/Index/poster_2.jpg', 
    'description':'Poster decorativo', 
    'price' : '75.00'});

addItem3({'name':'Lucha libre',
    'img':'./../img/Index/poster_3.jpg',
    'description':'Poster decorativo', 
    'price' : '75.00'});

addItem3({'name':'Amor a la mexicana',
    'img':'./../img/Index/poster_4.jpg',
    'description':'Poster decorativo', 
    'price' : '75.00'});
 



//************************* CARRITO **************************/


let carts = document.querySelectorAll('.btn');
console.log(carts.length);   //aquí da 12

let products =[
    // playeras y sudaderas
    {model:"Amor a la mexicana ", img:'./../img/Index/playera_1.jpg', description:'Sudadera para hombre',price : 800.00, category:"Playeras & Sudaderas", inCart: 0},
    {model:'Amor a la mexicana ', img:'./../img/Index/playera_2.jpg', description:'Playera para mujer', price : 400.00, category:"Playeras & Sudaderas", inCart: 0},
    {model:'Lucha libre', img:'./../img/Index/playera_3.jpg', description:'Playera para hombre', price : 400.00, category:"Playeras & Sudaderas", inCart: 0},
    {model:'Lucha libre', img:'./../img/Index/playera_4.jpg', description:'Playera para mujer', price : 400.00, category:"Playeras & Sudaderas", inCart: 0}]



for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);  
        totalCost(products[i]);
          })
}//for




function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//if
}//onLoadcartNumbers  numero de articulos en carrito

function cartNumbers(product){
    //console.log("El producto elegido es:", product);   
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }//else
    setItems(product);    
}//cartNumbers function


function setItems(product){
    let cartItems = localStorage.getItem("productosEnCarrito");
    cartItems = JSON.parse(cartItems);
    console.log("Mis productos en carrito son:" , cartItems);
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


function totalCost(product){
    // console.log("El precio del producto es", product.price);
    let cartCost = localStorage.getItem("totalCost");
    // console.log("Mi cart cost es", cartCost);
    // console.log(typeof cartCost);
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price);
    }//ifElse suma de productos diferentes

}//totalCost para calcular costo Total



onLoadcartNumbers();
