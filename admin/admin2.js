
function drawProducts(arrayProducts){
// function Products (){
    let spinner =document.getElementById("spinner");
    // let cardllena= "";
    arrayProducts.forEach(function (element) {
    // Productsase.forEach(function (element) {
        let etiqueta= "list-items";
        let etiquetaTalla = '<p class="card-text"> Tallas: XS, S, M, L XL </p>\n';

        if(element.category=="Posters"){
            etiqueta="list-items3";
            etiquetaTalla = "<p></p> \n"; 
        }else if (element.category=="Stickers"){
            etiqueta="list-items2";
            etiquetaTalla = "<p></p> \n"; 
        }
        let ancla = document.getElementById(etiqueta);
        let card= ' <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" style="padding-bottom: 3%;">\n'+ 
        '   <div class="card">\n' +
        '   <img src="'+element.img+'" class="card-img-top" alt="  "> \n'+
        '   <div class="card-body">\n'+
        '   <h6 class="card-title" style= "font-weight: bold; ">'+element.model+'</h6>\n'+
        '   <p class="card-text">'+element.description +'</p>\n'+
        '   <p class="card-text" > $'+element.price +'.00 MXN </p>\n'+
            etiquetaTalla  +
        '   <button type="button" class="btn btn-outline-dark" >Agregar</button>\n'+
        '   </div>\n'+
        '   </div>\n'+
        '   </div>';
        ancla.innerHTML +=card;
    })
    //spinner.remove();
    
}//  Products 


    function addProductsoSystem(nombre, descripcion, precio, image){
        let newProduct={
            model:nombre,
            price: precio,
            description: descripcion,
            img: image,
            category: category
        };//new Product
        console.log(newProduct),
        ProductBase.push(newProduct);
        localStorageProduct(ProductBase);
    }//add Product to system


    function localStorageProduct (Productlist){
        localStorage.setItem("localProduct", JSON.stringify(Productlist));  
    }// local Storage Product



window.onload= function(){
    let products=[
        // playeras y sudaderas
        {model:"Amor a la mexicana", img:'./../img/Index/playera_1.jpg',         
        description:'Sudadera para hombre',price : 800.00, category:"Playeras & Sudaderas", inCart:0},
        {model:'Amor a la mexicana', img:'./../img/Index/playera_2.jpg', 
        description:'Playera para mujer', price : 400.00, category:"Playeras & Sudaderas", inCart:0},
        {model:'Lucha libre', img:'./../img/Index/playera_3.jpg',
        description:'Playera para hombre', price : 400.00, category:"Playeras & Sudaderas", inCart:0},
        {model:'Lucha libre', img:'./../img/Index/playera_4.jpg',
        description:'Playera para mujer', price : 400.00, category:"Playeras & Sudaderas", inCart:0},
        ///Stickers
        {model:'Logo', img:'./../img/Index/sticker_1.jpg',  description:'Juego de stickers 1', 
        price : 100.00 , category:"Stickers", inCart:0},
        {model:'Logo + amor ', img:'./../img/Index/sticker_2.jpg', description:'Juego de stickers 2', 
        price: 100.00, category:"Stickers", inCart:0},
        {model:'Lucha libre',img:'./../img/Index/sticker_3.jpg',description:'Juego de stickers 3', 
        price: 100.00, category:"Stickers", inCart:0},
        {model:'Amor a la mexicana', img:'./../img/Index/sticker_4.jpg',description:'Juego de stickers 4', 
        price : 100.00, category:"Stickers", inCart:0},
        //posters
        {model:'Lucha libre', img:'./../img/Index/poster_1.jpg', description:'Poster tamaño carta', 
        price: 50.00, category:"Posters", inCart:0},
        {model:'Lucha libre + amor',  img:'./../img/Index/poster_2.jpg', description:'Poster decorativo', 
        price : 75.00, category:"Posters", inCart:0},
        {model:'Lucha libre', img:'./../img/Index/poster_3.jpg', description:'Poster decorativo', 
        price :75.00, category:"Posters", inCart:0},
        {model:'Amor a la mexicana', img:'./../img/Index/poster_4.jpg',description:'Poster decorativo', 
        price:75.00, category:"Posters", inCart:0}
    ];
    //falta el objeto window
    // null
    let valueInLocalStorage=  window.localStorage.getItem("localProduct");
    let storeList;
    //si exite
    if(valueInLocalStorage){
        //parsear
        storeList= JSON.parse(valueInLocalStorage)

    }else{
            //si no existe

        window.localStorage.setItem("localProduct",JSON.stringify(products));
        valueInLocalStorage= products
    }
    
    drawProducts(storeList);



    let carts = document.querySelectorAll('.btn');
    console.log(carts.length);  
    
        //let products =[
        // playeras y sudaderas
        //{model:"Amor a la mexicana ", img:'./../img/Index/playera_1.jpg', description:'Sudadera para hombre',price : 800.00, category:"Playeras & Sudaderas", inCart: 0},
        //{model:'Amor a la mexicana ', img:'./../img/Index/playera_2.jpg', description:'Playera para mujer', price : 400.00, category:"Playeras & Sudaderas", inCart: 0},
        //{model:'Lucha libre', img:'./../img/Index/playera_3.jpg', description:'Playera para hombre', price : 400.00, category:"Playeras & Sudaderas", inCart: 0},
        //{model:'Lucha libre', img:'./../img/Index/playera_4.jpg', description:'Playera para mujer', price : 400.00, category:"Playeras & Sudaderas", inCart: 0}]
    
    
    
    for (let i = 0; i < carts.length; i++){
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);  
            totalCost(products[i]);
              })
    }//for
    

}//window.onload




//************************* CARRITO **************************/




function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;

    }//if
}//onLoadcartNumbers

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




