
/* playeras  */
let ShirtBase=[
    {model:"Amor a la mexicana", img:'./../img/Index/playera_1.jpg',         
    description:'Sudadera para hombre',price : '$800.00' },
    {model:'Amor a la mexicana', img:'./../img/Index/playera_2.jpg', 
    description:'Playera para mujer', price : '$400.00'},
    {model:'Lucha libre', img:'./../img/Index/playera_3.jpg',
    description:'Playera para hombre', price : '$400.00'},
    {model:'Lucha libre', img:'./../img/Index/playera_4.jpg',
    description:'Playera para mujer', price : '$400.00'}
]; // new shirt

function shirts (){
    const ancla = document.getElementById("list-items");
    let cardllena= "";

    ShirtBase.forEach(function (element) {
        let card= ' <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">\n'+ 
        '   <div class="card">\n' +
        '   <img src="'+element.img+'" class="card-img-top" alt="  "> \n'+
        '   <div class="card-body">\n'+
        '   <h5 class="card-title">'+element.model+'</h5>\n'+
        '   <p class="card-text">'+element.description +'</p>\n'+
        '   <p class="card-text">'+element.price +' MX </p>\n'+
        '   <p class="card-text"> Tallas: XS, S, M, L XL </p>\n'+
        '   <button type="button" class="btn btn-outline-dark">Comprar</button>\n'+
        '   </div>\n'+
        '   </div>\n'+
        '   </div>';
        cardllena= cardllena +card;
    })
    ancla.innerHTML = cardllena;
}//  shirts 
shirts();






    /* para añadir elementos al JSON */
    document.getElementById("formulario").addEventListener("submit", saveShirt);
    function saveShirt(){
        let nombre= document.getElementById("nombre").value,
            descripcion= document.getElementById("descripcion").value,
            precio= document.getElementById("precio").value,
            image= document.getElementById("imagen").value;
        addShirtToSystem(nombre, descripcion, precio, image);
        drawCardShirt();
    }// save shirt

    function drawCardShirt(){
        let list= getShirt(),
        cardllena;
        ancla.innerHTML=cardllena;
    } // draw card shirt

    function addShirtToSystem(nombre, descripcion, precio, image){
        let newShirt={
            model:nombre,
            price: precio,
            description: descripcion,
            img: image
        };//new shirt
        console.log(newShirt),
        ShirtBase.push(newShirt);
        localStorageShirt(ShirtBase);
    }//add shirt to system


    function getShirt(){
        let storeList= localStorage.getItem("localShirt");
        if (storeList==null){
            ShirtBase=[];
        }else{
            ShirtBase= JSON.parse(storeList);
        }//else
        return ShirtBase
    }// get shirt



    function localStorageShirt (Shirtlist){
        localStorage.setItem("localShirt", JSON.stringify(Shirtlist));
    }// local Storage Shirt






