// Inicialización de constantes
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const btnEnviar = document.getElementById('btn_enviar_registro');

const expresiones = {

        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{8,50}$/, // 8 a 50 caracteres.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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
            }, 5000);
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
    console.log(email);
    console.log(document.getElementById('email').value);

    let nuevoUsusario = {
        "nombre": nombre,
        "telefono": telefono,
        "email": email,
        "password": password,
        "password2": password2
    }; //nuevoUsuario




    if (campos.nombre && campos.telefono && campos.email && campos.password) {
        localStorage.setItem("nuevoUsusario", JSON.stringify(nuevoUsusario))
        formulario.reset();

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
loginBtn.onclick = (()=>{
   loginForm.style.marginLeft = "0%";
   loginText.style.marginLeft = "0%";
 });

 // ------------- CREAR USUARIOS EN LOCALSTORAGE -------

 let x = [];
x = [
{"email": "armandoarciniega@ciencias.unam.mx", "password": "1234Armando"},
{"email": "bernardo.fersan@gmail.com", "password": "bernardo"},
{"email": "arturo.islas95@gmail.com", "password": "arturo"},
{"email": "punto.campuzano@gmail.com", "password": "paulyna"}];

localStorage.setItem("userInfo", JSON.stringify(x));


 // --------------- INICIO DE SESION  --------------

 // Información de localStorage
 let userList = JSON.parse(localStorage.getItem("userInfo")); 

 let submitBtn = document.getElementById("btn_enviar");

 // Click Iniciar sesión
 submitBtn.addEventListener("click", function(e) {
    e.preventDefault();    

    let emailLogin = document.getElementById("input_email").value;
    let passwordLogin = document.getElementById("input_password").value;

// Validar campos

// Ambos campos vacíos
    if ((emailLogin =="") && (passwordLogin =="")) {
        console.log("Ambos vacíos");

        document.getElementById("formulario__mensaje_correo").classList.remove("formulario__mensaje");
        document.getElementById("formulario__mensaje_correo").classList.add("formulario__mensaje-activo");

        document.getElementById("formulario__mensaje_contraseña").classList.remove("formulario__mensaje");
        document.getElementById("formulario__mensaje_contraseña").classList.add("formulario__mensaje-activo");


            setTimeout( () => {
                document.getElementById("formulario__mensaje_correo").classList.remove("formulario__mensaje-activo");
                document.getElementById("formulario__mensaje_correo").classList.add("formulario__mensaje");

                document.getElementById("formulario__mensaje_contraseña").classList.remove("formulario__mensaje-activo");
                document.getElementById("formulario__mensaje_contraseña").classList.add("formulario__mensaje");

            }, 5000); 

// Email vacío
    } else if (emailLogin=="") {
        console.log("email vacío");
        document.getElementById("formulario__mensaje_correo").classList.remove("formulario__mensaje");
        document.getElementById("formulario__mensaje_correo").classList.add("formulario__mensaje-activo");
        setTimeout( () => {
            document.getElementById("formulario__mensaje_correo").classList.remove("formulario__mensaje-activo");
            document.getElementById("formulario__mensaje_correo").classList.add("formulario__mensaje");           

        }, 5000); 

// Password vacío
    } else  if (passwordLogin ==""){
        console.log("paswword vacío");
        document.getElementById("formulario__mensaje_contraseña").classList.remove("formulario__mensaje");
        document.getElementById("formulario__mensaje_contraseña").classList.add("formulario__mensaje-activo");
        setTimeout( () => {            
            document.getElementById("formulario__mensaje_contraseña").classList.remove("formulario__mensaje-activo");
            document.getElementById("formulario__mensaje_contraseña").classList.add("formulario__mensaje");

        }, 5000); 

    } else {

// Ambos campos llenos        
        let userInfo = {
            "email": emailLogin,
            "password": passwordLogin,
        };

// validar correo y contraseña        
        let validInfo = false;
        let index = "";
        for (let i = 0; i < userList.length; i++) {
            if ((userInfo.email == userList[i].email) && (userInfo.password == userList[i].password)) {
                validInfo = true;
                index = i;                
     }; // if validar correo y contraseña     
        }; // for validar correo y contraseña

        switch (validInfo) {
            case true:
                console.log("bienvenido");
                Swal.fire(
                    '¡Bienvenido!',
                    `${userInfo.email}`,
                    'success'
                  ); // Sweetalert
                setTimeout(function(){ window.location.href = "./../index.html"; sessionStorage.setItem("usuarioActivo", userInfo.email); }, 1000); // timeout
                break;
            case false:
                console.log("Contraseña o emial incorrectos");
                Swal.fire(
                    '¡Nombre de usuario o contraseña incorrectos!',
                    "",                    
                    'error'
                  ); // Sweetalert                   
        } // Switch para validInfo            

    }; // else Ambos campos llenos 

}); // event listener



//  Usuario activo en NavBar

let usuario = sessionStorage.getItem("usuarioActivo");


let sesionUsuario = document.getElementById("usuario");
console.log(usuario);

if (usuario !== null) {
    console.log(`ingresó`);
    sesionUsuario.classList.remove("usuario");
    sesionUsuario.classList.add("usuario-activo");
} 


// if (usuario !== null) {
//     console.log(`ingresó`);
//     sesionUsuario.innerHTML = `USUARIO: ${usuario}`;
// } 
 

 
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});






 // **********************articulos en el carrito del carrito ***********************// 
function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//if
}//onLoadcartNumbers
onLoadcartNumbers();
// ****************para el carrito******************************************//
