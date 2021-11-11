//** Funcion para playeras**/
function addItem(item){ 
    const itemHTML =  
            '   <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">\n'+ 
            '   <div class="card">\n' +
            '   <img src="'+item.img+'" class="card-img-top" alt="  "> \n'+
            '   <div class="card-body">\n'+
            '   <h5 class="card-title">'+item.model+'</h5>\n'+
            '   <p class="card-text">'+item.description +'</p>\n'+
            '   <p class="card-text">'+item.price +' MX </p>\n'+
            '   <p class="card-text"> Tallas: XS, S, M, L XL </p>\n'+
            '   <button type="button" class="btn btn-outline-dark">Comprar</button>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   </div>';
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
            '   <p class="card-text">'+item.price +' MX </p>\n'+
            '   <button type="button" class="btn btn-outline-dark">Comprar</button>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   </div>';
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
            '   <p class="card-text">'+item.price +' MX </p>\n'+
            '   <button type="button" class="btn btn-outline-dark">Comprar</button>\n'+
            '   </div>\n'+
            '   </div>\n'+
            '   </div>';
    const itemsContainer = document.getElementById("list-items3");    
    itemsContainer.innerHTML += itemHTML;   
}





//******************************** LISTADO DE ARTICULOS (FORMATO JSON) **************************************//

//********* PLAYERAS  *******//
addItem({'model':'Amor a la mexicana',
    'img':'./../img/Index/playera_1.jpg',         
    'description':'Sudadera para hombre',
    'price' : '$800.00'});

addItem({'model':'Amor a la mexicana',
    'img':'./../img/Index/playera_2.jpg', 
    'description':'Playera para mujer',
    'price' : '$400.00'});

addItem({'model':'Lucha libre',
    'img':'./../img/Index/playera_3.jpg',
    'description':'Playera para hombre',
    'price' : '$400.00'});

addItem({'model':'Lucha libre',
    'img':'./../img/Index/playera_4.jpg',
    'description':'Playera para mujer',
    'price' : '$400.00'});

//********* STICKERS  *******//
addItem2({'name':'Logo',
    'img':'./../img/Index/sticker_1.jpg',        
    'description':'Juego de stickers 1', 
    'price' : '$100.00'});

addItem2({'name':'Logo + amor ',
    'img':'./../img/Index/sticker_2.jpg', 
    'description':'Juego de stickers 2', 
    'price' : '$100.00'});

addItem2({'name':'Lucha libre',
    'img':'./../img/Index/sticker_3.jpg',
    'description':'Juego de stickers 3', 
    'price' : '$100.00'});

addItem2({'name':'Amor a la mexicana',
    'img':'./../img/Index/sticker_4.jpg',
    'description':'Juego de stickers 4', 
    'price' : '$100.00'}); 
 
//********* POSTERS  *******//
addItem3({'name':'Lucha libre',
    'img':'./../img/Index/poster_1.jpg',        
    'description':'Poster tamaño carta', 
    'price' : '$50.00'});

addItem3({'name':'Lucha libre + amor',
    'img':'./../img/Index/poster_2.jpg', 
    'description':'Poster decorativo', 
    'price' : '$75.00'});

addItem3({'name':'Lucha libre',
    'img':'./../img/Index/poster_3.jpg',
    'description':'Poster decorativo', 
    'price' : '$75.00'});

addItem3({'name':'Amor a la mexicana',
    'img':'./../img/Index/poster_4.jpg',
    'description':'Poster decorativo', 
    'price' : '$75.00'});
 
    