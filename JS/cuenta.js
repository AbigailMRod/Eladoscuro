// Inicialización de constantes
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
    // ******* Uso solo para verificar la funcion *******
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(expresiones.nombre.test(e.target.value));
    // ******* Uso solo para verificar la funcion *******
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

//Funcion reutilizable para validar cada campo 
//Se usa las expresiones, los inputs y el campo 
// *****campo manda a llamar al ultimo elemtno de validarCampo en el switch****
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
