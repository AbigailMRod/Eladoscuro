function inicio(){    
        window.location= "./../index.html";
        }// función para regresar a la página de inicio


// Validación de formulario

// const formulario = document.getElementById('formulario')
// const inputs = document.querySelectorAll('#formulario input');
// const btnEnviar = document.getElementById('btn_enviar');


// const expresiones = {
    
//     nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
//     descripcion: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
//     precio: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
// }//clase expresiones

// const validarFormulario = (e) =>{
   
//     switch (e.target.name){       
//         case "telefono":
//             validarCampo(expresiones.nombre, e.target, 'nombre');
//             break;
//         case "descripcion":
//             validarCampo(expresiones.descripcion, e.target, 'descripcion');
//             break;
//         case "precio":
//             validarCampo(expresiones.precio, e.target, 'precio');
//             break;
//     }//switch
// };//validarFormulario


// const validarCampo = (expresion, input, campo) => {
//     if(expresion.test(input.value)){
//         document.getElementById(`grupo-${campo}`).classList.remove('was-invalidated')
//         document.getElementById(`grupo-${campo}`).classList.add('was-validated')
//         campo[campo] = true;
        
//     }else{
//         document.getElementById(`grupo-${campo}`).classList.remove('was-validated');
//         document.getElementById(`grupo-${campo}`).classList.add('was-invalidated');
//         campo[campo] = false;
//     }//if else
// };//validarCampo

// //Ejecucion por cada input
// inputs.forEach((input) =>{
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// });//inputs


// //validacion para verificar si un campo esta llenado 
// const campos ={   
//     nombre: false,
//     descripcion: false,
//     precio: false
    
// };//clase campos
// //Envio de formulario


// btnEnviar.addEventListener('submit',function(e){
//     console.log(e.preventDefault());
//     if(campos.nombre && campos.descripcion && campos.precio){
//         formulario.reset();        
//     } //else {        
//     // }
// });//formulario




const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input');
const btnEnviar = document.getElementById('btn_enviar');

const expresiones = {
    
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{8,50}$/, // 8 a 50 caracteres.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,10}$/, // 7 a 14 numeros.   
}//clase expresiones



//Validar form
const validarFormulario = (e) =>{
   
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
    }//switch
};//validarFormulario


const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('was-invalidated')
        document.getElementById(`grupo-${campo}`).classList.add('was-validated')
        campo[campo] = true;
        
    }else{
        document.getElementById(`grupo-${campo}`).classList.remove('was-validated');
        document.getElementById(`grupo-${campo}`).classList.add('was-invalidated');
        campo[campo] = false;
    }//if else
};//validarCampo

//Ejecucion por cada input
inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});//inputs


//validacion para verificar si un campo esta llenado 
const campos ={
    nombre: false,
    telefono: false,
    email: false,
    password: false
    
};//clase campos
//Envio de formulario


btnEnviar.addEventListener('submit',function(e){
    console.log(e.preventDefault());
    if(campos.nombre && campos.telefono && campos.email && campos.password){
        formulario.reset();
        
    } //else {
        
    // }
});//formulario


// let categoria = document.getElementById ('categoria');
// let nombre = document.getElementById ('nombre');
// let descripcion = document.getElementById ('descripcion');
// let precio = document.getElementById ('precio');
// let imagen = document.getElementById ('imagen');






// //Carga de nuevo producto

// const btnAddProduct= document.getElementById("add-product")
// btnAddProduct.addEventListener("submit", function(evento){
//     evento.preventDefault(); //cancelar el envío
//     let categoria = document.getElementById("categoria").value; 
//     console.log(categoria);
    
//     let nombre= document.getElementById("nombre").value;
//     let descripcion= document.getElementById("descripcion").value;
//     let precio= document.getElementById("precio").value;
//     let image= document.getElementById("imagen").value;


//     let newProduct={
//         "categoria": categoria,
//         "nombre": nombre,
//         "descripcion": descripcion,
//         "precio": precio,
//         "image": image
//     }

//     localStorage.setItem("newProduct",
//         JSON.stringify(newProduct)
//         );

//     console.info("save item on localstorage")


//     function addItem(item){ 
//         const itemHTML =  
//                 '   <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">\n'+ 
//                 '   <div class="card">\n' +
//                 '   <img src="'+item.img+'" class="card-img-top" alt="  "> \n'+
//                 '   <div class="card-body">\n'+
//                 '   <h5 class="card-title">'+item.model+'</h5>\n'+
//                 '   <p class="card-text">'+item.description +'</p>\n'+
//                 '   <p class="card-text">'+item.price +' MX </p>\n'+
//                 '   <p class="card-text"> Tallas: XS, S, M, L XL </p>\n'+
//                 '   <button type="button" class="btn btn-outline-dark">Comprar</button>\n'+
//                 '   </div>\n'+
//                 '   </div>\n'+
//                 '   </div>';
//         const itemsContainer = document.getElementById("list-items");    
//         itemsContainer.innerHTML += itemHTML;   
//     }

//     addItem({'model':'Amor a la mexicana',
//     'img':'./../img/Index/playera_1.jpg',         
//     'description':'Sudadera para hombre',
//     'price' : '$800.00'});
    

// });




