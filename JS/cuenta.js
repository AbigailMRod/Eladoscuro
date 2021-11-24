// Inicialización de constantes
const formulario = document.getElementById('formulario');
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

        case "password2":
            validarPassword2();
            break;
    }//switch
};//validarFormulario

//Funcion reutilizable para validar cada campo 
//Se usa las expresiones, los inputs y el campo 
// *****campo manda a llamar al ultimo elemtno de validarCampo en el switch****
const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('was-invalidated');
        document.getElementById(`grupo-${campo}`).classList.add('was-validated');
        console.log('Aqui ando');
        setTimeout( () => {
            document.getElementById(`grupo-${campo}`).classList.remove('was-validated');
        }, 5000);
        campos[campo] = true;
        
    }else{
        document.getElementById(`grupo-${campo}`).classList.remove('was-validated');
        document.getElementById(`grupo-${campo}`).classList.add('was-invalidated');
        campos[campo] = false;
    }//if else
};//validarCampo


//Función para validar que el password coincida en ambos campos
const validarPassword2 = () =>{
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo-password2`).classList.remove('was-validated');
        document.getElementById(`grupo-password2`).classList.add('was-invalidated');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo-password2`).classList.add('was-validated');
        setTimeout( () => {
            document.getElementById(`grupo-password2`).classList.remove('was-validated');
        }, 5000);
        document.getElementById(`grupo-password2`).classList.remove('was-invalidated');
        campos['password'] = true;
    }// if password
}//validarPassword


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



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    let nuevoUsusario = {
        "nombre":nombre,
        "telefono":telefono,
        "email":email,
        "password":password,
        "password2":password2
    };//nuevoUsuario

   
    

    if(campos.nombre && campos.telefono && campos.email && campos.password){
        localStorage.setItem("nuevoUsusario", JSON.stringify(nuevoUsusario));
        console.info("Save");
        formulario.reset();
        
    } else {
    //     document.getElementById('grupo-enviar').classList.add('was-validated');
        
    }
});//formulario
