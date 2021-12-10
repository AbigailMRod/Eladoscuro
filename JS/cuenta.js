/*INICIO  Crear cuenta */

/*Tomamos los elementos del HTML */


const $formulario = document.querySelector("#formulario");
const $nombre = document.querySelector("#nombre");
const $telefono= document.querySelector("#telefono");
const $email= document.querySelector("#email");
const $password= document.querySelector("#password");
const $password2= document.querySelector("#password2");



$formulario.addEventListener('submit', e =>{
    // Para que no se envie el formulario se implementa el preventDefaul
    e.preventDefault();

    // Se obtiene el valor de cada input
    const nombre = $nombre.value;
    const telefono = $telefono.value;
    const email = $email.value;
    const password= $password.value;
    const password2= $password2.value;

    

    //Con que solo no se cumpla la condicion  puedo hacer el fetch 
    if(email !=""){
        //uRL a la cual voy a hacer una peticion
    const endpoint = "http://127.0.0.1:8081/api/usuarios";
    // Estatus 200 -> ok 
    console.log(`Estado de la promesa es : ${endpoint}`);
     fetch(endpoint,{
         method: 'POST',
         //Convertimos el objeto en una cadena de texto
         body:JSON.stringify({
             nombre,
             telefono,
             email,
             password

         }),
         headers:{
            'Content-type': 'application/json'
         }
     }).then(res=>{
        
         console.info("Save");
         formulario.reset();

                 new Swal({ //sweetAlert
                         icon: 'success',
                         title: '1,2,3 ¡Estás registrado! Para entrar al cuadrilatero inicia sesión',
                         text: '¡Enviado exitosamente!',
                     }) //sweetAlert
                 setTimeout(function() { window.location.href = "./../index.html" }, 5000); // timeout;
     })
    }else{
             document.getElementById('grupo-enviar').classList.add('was-validated');
    }
    
    
     //Funcion reutilizable para validar cada campo 
     //Se usa las expresiones, los inputs y el campo 
     // *****campo manda a llamar al ultimo elemtno de validarCampo en el switch****
     const validarCampo = (expresion, input, campo) => {
         if (expresion.test(input.value)) {
             document.getElementById(`grupo-${campo}`).classList.remove('was-invalidated');
             document.getElementById(`grupo-${campo}`).classList.add('was-validated');
             setTimeout(() => {
                 document.getElementById(`grupo-${campo}`).classList.remove('was-validated');
             }, 3000);
             campos[campo] = true;
    
         } else {
             document.getElementById(`grupo-${campo}`).classList.remove('was-validated');
             document.getElementById(`grupo-${campo}`).classList.add('was-invalidated');
             campos[campo] = false;
         } //if else
     }; //validarCampo

});

// Iniciar Sesión ****************
let submitBtn = document.getElementById("btn_enviar");

// Click Iniciar sesión
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let emailLogin = document.getElementById("input_email").value;
    let passwordLogin = document.getElementById("input_password").value;

    let userInfo = {
        "email": emailLogin,
        "password": passwordLogin,
    };

    if ((emailLogin == "") && (passwordLogin == "")) {
        console.log("Ambos vacíos");

        document.getElementById("formulario__mensaje_correo").classList.remove("formulario__mensaje");
        document.getElementById("formulario__mensaje_correo").classList.add("formulario__mensaje-activo");

        document.getElementById("formulario__mensaje_contraseña").classList.remove("formulario__mensaje");
        document.getElementById("formulario__mensaje_contraseña").classList.add("formulario__mensaje-activo");


        setTimeout(() => {
            document.getElementById("formulario__mensaje_correo").classList.remove("formulario__mensaje-activo");
            document.getElementById("formulario__mensaje_correo").classList.add("formulario__mensaje");

            document.getElementById("formulario__mensaje_contraseña").classList.remove("formulario__mensaje-activo");
            document.getElementById("formulario__mensaje_contraseña").classList.add("formulario__mensaje");

        }, 5000);

        // Email vacío
    } else if (emailLogin == "") {
        console.log("email vacío");
        document.getElementById("formulario__mensaje_correo").classList.remove("formulario__mensaje");
        document.getElementById("formulario__mensaje_correo").classList.add("formulario__mensaje-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje_correo").classList.remove("formulario__mensaje-activo");
            document.getElementById("formulario__mensaje_correo").classList.add("formulario__mensaje");

        }, 5000);

        // Password vacío
    } else if (passwordLogin == "") {
        console.log("paswword vacío");
        document.getElementById("formulario__mensaje_contraseña").classList.remove("formulario__mensaje");
        document.getElementById("formulario__mensaje_contraseña").classList.add("formulario__mensaje-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje_contraseña").classList.remove("formulario__mensaje-activo");
            document.getElementById("formulario__mensaje_contraseña").classList.add("formulario__mensaje");

        }, 5000);

    } else {    

    const endpoint = "http://127.0.0.1:8081/api/login/clientes";
    // Estatus 200 -> ok 
    console.log(`Estado de la promesa es : ${endpoint}`);
    console.log(JSON.stringify(userInfo));
    fetch(endpoint,{
        method: 'POST',
        //Convertimos el objeto en una cadena de texto
          body:JSON.stringify(userInfo),
        headers:{
            'Content-type': 'application/json'
         }
     }).then(res=>{
         res.text().then(function(text){
            if(text == "true") {            
                console.log("bienvenido");
                      Swal.fire(
                          '¡Bienvenido!',
                          `${userInfo.email}`,
                          'success'
                      ); // Sweetalert
                      setTimeout(function() { window.location.href = "./../index.html";
                     sessionStorage.setItem("usuarioActivo", userInfo.email); }, 1000); // timeout
           } else {
               console.log(res.body);
               console.log(res.body.locked);
                   console.log("Contraseña o emial incorrectos");
                      Swal.fire(
                          '¡Nombre de usuario o contraseña incorrectos!',
                          "",
                          'error')
                      }//else
         });
        
            })//then
    }//else
})//EventListener


// Inicialización de constantes
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const btnEnviar = document.getElementById('btn_enviar_registro');

const expresiones = {

        nombre: /^[a-zA-ZÀ-ÿ\s]{3,100}$/, // Letras y espacios, pueden llevar acentos.
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{8,20}/, // 8 a 20 caracteres.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,100}$/,
        telefono: /^\d{10,10}$/, // 7 a 14 numeros.   
    } //clase expresiones



//Validar form
const validarFormulario = (e) => {
    // ******* Uso solo para verificar la funcion *******
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(expresiones.nombre.test(e.target.value));
    // ******* Uso solo para verificar la funcion *******
    switch (e.target.name) {
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
    } //switch
}; //validarFormulario

//Funcion reutilizable para validar cada campo 
//Se usa las expresiones, los inputs y el campo 
// *****campo manda a llamar al ultimo elemtno de validarCampo en el switch****
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo-${campo}`).classList.remove('was-invalidated');
        document.getElementById(`grupo-${campo}`).classList.add('was-validated');
        setTimeout(() => {
            document.getElementById(`grupo-${campo}`).classList.remove('was-validated');
        }, 3000);
        campos[campo] = true;

    } else {
        document.getElementById(`grupo-${campo}`).classList.remove('was-validated');
        document.getElementById(`grupo-${campo}`).classList.add('was-invalidated');
        campos[campo] = false;
    } //if else
}; //validarCampo
    


//Función para validar que el password coincida en ambos campos
const validarPassword2 = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('password2');

        if (inputPassword1.value !== inputPassword2.value) {
            document.getElementById(`grupo-password2`).classList.remove('was-validated');
            document.getElementById(`grupo-password2`).classList.add('was-invalidated');
            campos['password'] = false;
        } else {
            document.getElementById(`grupo-password2`).classList.add('was-validated');
            setTimeout(() => {
                document.getElementById(`grupo-password2`).classList.remove('was-validated');
            }, 3000);
            document.getElementById(`grupo-password2`).classList.remove('was-invalidated');
            campos['password'] = true;
        } // if password
    } //validarPassword


//Ejecucion por cada input
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
}); //inputs


//validacion para verificar si un campo esta llenado 
const campos = {
    nombre: false,
    telefono: false,
    email: false,
    password: false

}; //clase campos
//Envio de formulario



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    let nuevoUsuario = {
        "nombre": nombre,
        "telefono": telefono,
        "email": email,
        "password": password,
        "password2": password2
    }; //nuevoUsuario



    if (campos.nombre && campos.telefono && campos.email && campos.password) {
        localStorage.setItem("nuevoUsusario", JSON.stringify(nuevoUsuario));
        console.info("Save");
        formulario.reset();

        // new Swal({ //sweetAlert
        //         icon: 'success',
        //         title: '1,2,3 ¡Estás registrado! Para entrar al cuadrilatero inicia sesión',
        //         text: '¡Enviado exitosamente!',
        //     }) //sweetAlert
        // setTimeout(function() { window.location.href = "./../index.html" }, 5000); // timeout


    } else {
        //     document.getElementById('grupo-enviar').classList.add('was-validated');

    }
}); //formulario



// ANIMACIONES DE FORMULARIO INICIAR SESIÓN -- REGISTRO

const loginText = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

// ------------- CREAR USUARIOS EN LOCALSTORAGE -------

let x = [];
x = [
    { "email": "armandoarciniega@ciencias.unam.mx", "password": "1234Armando" },
    { "email": "bernardo.fersan@gmail.com", "password": "bernardo" },
    { "email": "arturo.islas95@gmail.com", "password": "arturo" },
    { "email": "punto.campuzano@gmail.com", "password": "paulyna" }
];

localStorage.setItem("userInfo", JSON.stringify(x));






// ******************** Usuario activo en NavBar *******************************

let usuario = sessionStorage.getItem("usuarioActivo");


let iniciarSesion = document.getElementById("iniciarSesion");
let cerrarSesion = document.getElementById("cerrarSesion");
let icono = document.getElementById("mascara");


console.log(usuario);

if (usuario !== null) {
    console.log(`ingresó`);
    iniciarSesion.classList.remove("iniciarSesion");
    iniciarSesion.classList.add("iniciarSesionDesactivado");
    

    cerrarSesion.classList.remove("cerrarSesion");
    cerrarSesion.classList.add("cerrarSesionActivo");
    icono.classList.remove("cerrarSesion");
    icono.classList.add("cerrarSesionActivo");
}


//**************** Cerrar sesion ***************************************/

cerrarSesion.addEventListener("click", function(e) {
    sessionStorage.clear();    
});







// **********************articulos en el carrito del carrito ***********************// 
function onLoadcartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    } //if
} //onLoadcartNumbers
onLoadcartNumbers();
// ****************para el carrito******************************************//


