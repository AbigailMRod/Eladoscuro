function login(){
    let admin, pass;

    admin = document.getElementById("admin").value;
    pass = document.getElementById("pass").value;

    if(admin== "ELADO" && pass == "Oscuro_09"){

        window.location= "admin.html";

    }
}