function inicio(){    
        window.location= "./../pages/productos.html";
        }// función para regresar a la página de inicio   



/********************************  para añadir elementos a la base de datos ******************************/
const btnAddProducts = document.querySelector("#formulario");
btnAddProducts.addEventListener("submit", function(evento){
    evento.preventDefault();
    const formulario = document.getElementById('formulario');
    let nombre= document.getElementById("nombre").value;
        let descripcion= document.getElementById("descripcion").value;
        let precio= document.getElementById("precio").value;
        let imagen = document.getElementById("product_img").src; /* ************************** */
        let categoria= document.getElementById("categoria").options [document.getElementById("categoria").selectedIndex].value;   
        let inCart=0; 

        let newProduct=
            {
                "nombre": nombre,
                "descripcion": descripcion,
                "imagen": imagen,
                "precio": precio,
                "categoria_id_categoria": categoria,
                "inCart":inCart
            };
            console.log(newProduct)

        let url= "http://127.0.0.1:8080/api/productos";
        fetch(url, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmlnYWlsLm11bm96cm9kcmlAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MzkwNzk0MzAsImV4cCI6MTYzOTExNTQzMH0.SZU-FlaJnAr6MATPbVlGsTFOjlScfMkbTH6y68gRXSc'
            }),
        body:  JSON.stringify(newProduct),
        
    })
    .then(data=>{
        if(data.status==200){
            console.log("success")
        }
    })
    .catch(function(error){
        console.log(error);
    })// function erro
    new Swal({ //sweetAlert
        icon: 'success',
        title: '¡Nuevo traje de pelea cargado!',
        text: '¡Guardado exitosamente!',
    }) //sweetAlert

formulario.reset();
})//function submit

function cloud (){
    let imagen = document.getElementById("product_img");
        let myWidget = cloudinary.createUploadWidget({
            cloudName: 'dtcyppikq',
            uploadPreset: 'wpicwpay'
        }, (error, result) => {
            if (!error && result && result.event === 'success'){
                // console.log('Imagen subida con éxito', result.info);
                imagen.src = result.info.secure_url;
                // console.log(result.info.secure_url);
            }
        });
        document.querySelector('#upload_widget').addEventListener("click", function(){
            myWidget.open();
        }, false);
    }// para guardar las imágenes en Cloudinary
    cloud();