/** Función addItem agrega al html un card con **/

function addItem(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <p class="card-text">'+item.price+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Agregar</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';   

        


//***********************     itemsContainer identifica el listado de elementos del html con "list-items" ylos agrega al html       *************************/
    const itemsContainer = document.getElementById("list-items");    
    itemsContainer.innerHTML += itemHTML;
}



//*****************    Listado de 10 elementos en formato json      ********************/
/****  json: Nombre del articulo, imagen en formato jpg, descripción del artículo, (precio)  ****/


addItem({'name':'playera 1',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$50.00'});

addItem({'name':'playera 2',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$40.00'});

addItem({'name':'playera 3',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$50.00'});

addItem({'name':'playera 4',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$75.00'});

addItem({'name':'playera 5',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$50.00'});

addItem({'name':'playera 6',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$50.00'});

addItem({'name':'playera 7',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$99.00'});

addItem({'name':'playera 8',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$50.00'});

addItem({'name':'playera 9',
    'img':'https://laprovincia.com.mx/online/1424-large_default/calavera-de-frases-mexicanas-del-catalogo-de-playeras-mexicanas.jpg',
    'description':'Playera de color rojo con imagenes mexicanas', 
    'price' : '$95.00'});

