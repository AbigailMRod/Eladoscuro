
function drawProducts(arrayProducts){
// function Products (){
    
    let spinner =document.getElementById("spinner");
    // let cardllena= "";
    arrayProducts.forEach(function (element) {
    // Productsase.forEach(function (element) {
        let etiqueta= "list-items";
        if(element.category=="Posters"){
            etiqueta="list-items3";
        }else if (element.category=="Stickers"){
            etiqueta="list-items2";
        }
        let ancla = document.getElementById(etiqueta);
        let card= ' <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">\n'+ 
        '   <div class="card">\n' +
        '   <img src="'+element.img+'" class="card-img-top" alt="  "> \n'+
        '   <div class="card-body">\n'+
        '   <h5 class="card-title">'+element.model+'</h5>\n'+
        '   <p class="card-text">'+element.description +'</p>\n'+
        '   <p class="card-text"> $'+element.price +' MX </p>\n'+
        '   <p class="card-text"> Tallas: XS, S, M, L XL </p>\n'+
        '   <button type="button" class="btn btn-outline-dark">Agregar</button>\n'+
        '   </div>\n'+
        '   </div>\n'+
        '   </div>';
        ancla.innerHTML +=card;
    })
    spinner.remove();
    
}//  Products 
// Products();


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

    console.log("Hola mundo");


window.onload= function(){
    let ProductBase=[
        // playeras y sudaderas
        {model:"Amor a la mexicana", img:'./../img/Index/playera_1.jpg',         
        description:'Sudadera para hombre',price : '800.00', category:"Playeras & Sudaderas"},
        {model:'Amor a la mexicana', img:'./../img/Index/playera_2.jpg', 
        description:'Playera para mujer', price : '400.00', category:"Playeras & Sudaderas"},
        {model:'Lucha libre', img:'./../img/Index/playera_3.jpg',
        description:'Playera para hombre', price : '400.00', category:"Playeras & Sudaderas"},
        {model:'Lucha libre', img:'./../img/Index/playera_4.jpg',
        description:'Playera para mujer', price : '400.00', category:"Playeras & Sudaderas"},
        ///Stickers
        {model:'Logo', img:'./../img/Index/sticker_1.jpg',  description:'Juego de stickers 1', 
        price : '100.00' , category:"Stickers"},
        {model:'Logo + amor ', img:'./../img/Index/sticker_2.jpg', description:'Juego de stickers 2', 
        price: '100.00', category:"Stickers"},
        {model:'Lucha libre',img:'./../img/Index/sticker_3.jpg',description:'Juego de stickers 3', 
        price: '100.00', category:"Stickers"},
        {model:'Amor a la mexicana', img:'./../img/Index/sticker_4.jpg',description:'Juego de stickers 4', 
        price : "100.00", category:"Stickers"},
        //posters
        {model:'Lucha libre', img:'./../img/Index/poster_1.jpg', description:'Poster tamaño carta', 
        price: '$50.00', category:"Posters"},
        {model:'Lucha libre + amor',  img:'./../img/Index/poster_2.jpg', description:'Poster decorativo', 
        price : '$75.00', category:"Posters"},
        {model:'Lucha libre', img:'./../img/Index/poster_3.jpg', description:'Poster decorativo', 
        price :'$75.00', category:"Posters"},
        {model:'Amor a la mexicana', img:'./../img/Index/poster_4.jpg',description:'Poster decorativo', 
        price:'$75.00', category:"Posters"}
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

        window.localStorage.setItem("localProduct",JSON.stringify(ProductBase));
        valueInLocalStorage= ProductBase
    }
    
    drawProducts(storeList);

}//window.onload




