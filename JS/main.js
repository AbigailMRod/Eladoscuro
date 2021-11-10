/** Función addItem agrega al html un card con **/
//** Funcion para playeras**/
function addItem(item){ 
    const itemHTML =  
            '   <div class="card">\n' +
            '   <img src="'+item.img+'" class="card-img-top" style="height: 350%;" style="width:180%;"  alt="  "> \n'+
            '   <div class="card-body">\n'+
            '   <h5 class="card-title">'+item.name+'</h5>\n'+
            '   <p class="card-text">'+item.description +'</p>\n'+
            '   <p class="card-text">'+item.price +'</p>\n'+
            '   <p class="card-text">'+item.size +'</p>\n'+
            '   </div>\n'+
            '   </div>';
    const itemsContainer = document.getElementById("list-items");    
    itemsContainer.innerHTML += itemHTML;   
}

//** Funcion para stickers**/

function addItem2(item){ 
    const itemHTML =  
            '   <div class="card">\n' +
            '   <img src="'+item.img+'" class="card-img-top" alt="  "> \n'+
            '   <div class="card-body">\n'+
            '   <h5 class="card-title">'+item.name+'</h5>\n'+
            '   <p class="card-text">'+item.description +'</p>\n'+
            '   <p class="card-text">'+item.price +'</p>\n'+
            '   </div>\n'+
            '   </div>';
    const itemsContainer = document.getElementById("list-items2");    
    itemsContainer.innerHTML += itemHTML;   
}

//** Funcion para posters**/

function addItem3(item){ 
    const itemHTML =  
            '   <div class="card">\n' +
            '   <img src="'+item.img+'" class="card-img-top" alt="  "> \n'+
            '   <div class="card-body">\n'+
            '   <h5 class="card-title">'+item.name+'</h5>\n'+
            '   <p class="card-text">'+item.description +'</p>\n'+
            '   <p class="card-text">'+item.price +'</p>\n'+
            '   </div>\n'+
            '   </div>';
    const itemsContainer = document.getElementById("list-items3");    
    itemsContainer.innerHTML += itemHTML;   
}



//********* PLAYERAS  *******//

addItem({'name':'Amor a la mexicana',
    'img':'./../img/Index/playera_1.jpg',         
    'description':'Sudadera para hombre', 
    'size':'XS, S, M, L, XL',
    'price' : '$800.00'});


addItem({'name':'Amor a la mexicana',
    'img':'./../img/Index/playera_2.jpg', 
    'description':'Playera para mujer', 
    'size':'XS, S, M, L, XL',
    'price' : '$400.00'});

addItem({'name':'Lucha libre',
    'img':'./../img/Index/playera_3.jpg',
    'description':'Playera para hombre',
    'size':'XS, S, M, L, XL', 
    'price' : '$400.00'});


addItem({'name':'Amor a la mexicana',
    'img':'./../img/Index/playera_4.jpg',
    'description':'Playera para mujer', 
    'size':'XS, S, M, L, XL',
    'price' : '$400.00'});

    



//********* STICKERS  *******//


addItem2({'name':'Logo',
    'img':'./../img/Index/sticker_1.jpg',        
    'description':'Juego de stickers 1', 
    'price' : '$50.00'});


addItem2({'name':'Logo + amor a la mexicana',
    'img':'./../img/Index/sticker_2.jpg', 
    'description':'Juego de stickers 2', 
    'price' : '$165.00'});

addItem2({'name':'Lucha libre',
    'img':'./../img/Index/sticker_3.jpg',
    'description':'Juego de stickers 3', 
    'price' : '$150.00'});


addItem2({'name':'Sticker amor a la mexicana',
    'img':'./../img/Index/sticker_4.jpg',
    'description':'Juego de stickers 4', 
    'price' : '$165.00'}); 
 
//********* POSTERS  *******//


addItem3({'name':'Lucha libre',
    'img':'./../img/Index/poster_1.jpg',        
    'description':'Poster tamaño carta', 
    'price' : '$50.00'});


addItem3({'name':'Lucha libre + amor',
    'img':'./../img/Index/poster_2.jpg', 
    'description':'Playera para mujer', 
    'price' : '$50.00'});

addItem3({'name':'Lucha libre',
    'img':'./../img/Index/poster_3.jpg',
    'description':'Poster decorativo', 
    'price' : '$50.00'});


addItem3({'name':'Amor a la mexicana',
    'img':'./../img/Index/poster_4.jpg',
    'description':'Poster', 
    'price' : '$50.00'});
 
    