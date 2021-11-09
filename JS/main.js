/** Función addItem agrega al html un card con **/

function addItem(item){
    const itemHTML =    
            '   <div class="card-deck">\n'+
            '   <div class="card"> \n'+
            '   <img src="'+item.img+'" class="card-img-top" alt="descripcion de la imagen"> \n'+
            '   <div class="card-body">\n'+
            '   <h5 class="card-title">'+item.name+'</h5>\n'+
            '   <p class="card-text">'+item.description +'</p>\n'+
            '   <p class="card-text">'+item.price +'</p>\n'+
            '   </div>\n'
            '   </div>\n'
            '   </div>';



//***********************     itemsContainer identifica el listado de elementos del html con "list-items" ylos agrega al html       *************************/
    const itemsContainer = document.getElementById("list-items");    
    itemsContainer.innerHTML += itemHTML;   
}

//*****************    Listado de 10 elementos en formato json      ********************/
/****  json: Nombre del articulo, imagen en formato jpg, descripción del artículo, (precio)  ****/


addItem({'name':'playera 1',
    'img':'./img/Index/amorAlaMexicana.jpg',
    'description':'Playera mujer', 
    'price' : '$50.00'});


addItem({'name':'playera 3',
    'img':'./img/Index/dosDeTresCaidas.jpg',
    'description':'Playera de hombre', 
    'price' : '$65.00'});

addItem({'name':'playera 4',
    'img':'./img/Index/amorAlaMexicana.jpg',
    'description':'Playera mujer', 
    'price' : '$50.00'});


addItem({'name':'playera 2',
    'img':'./img/Index/dosDeTresCaidas.jpg',
    'description':'Playera de hombre', 
    'price' : '$65.00'});




    