function inicio() {
    window.location = "./../pages/productos.html";
} // función para regresar a la página de inicio   

/********************************  para añadir elementos al JSON******************************/
function saveProduct(e) {
    e.preventDefault();
    const formulario = document.getElementById('formulario');
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let image = document.getElementById("product_img").src; /* ************************** */
    let category = document.getElementById("categoria").options[document.getElementById("categoria").selectedIndex].value;


    let newProduct = {
        "model": nombre,
        "price": precio,
        "description": descripcion,
        "img": image,
        "category": category
    }; //new Product

    let valueInLocalStorage = window.localStorage.getItem("localProduct");
    let storeList;
    if (valueInLocalStorage) {
        // 1. Traer lo que tengas en el localStorage
        // 2. Convertirlo de json a un arreglo
        // 3. hacer push del nuevo objeto
        // 4. Volver a arreglo a json
        // 5. Actualizar el item  
        storeList = JSON.parse(valueInLocalStorage)
        storeList.push(newProduct);
        console.log(storeList)



        window.localStorage.setItem("localProduct", JSON.stringify(storeList));



        new Swal({ //sweetAlert
                icon: 'success',
                title: '¡Nuevo traje de pelea cargado!',
                text: '¡Guardado exitosamente!',
            }) //sweetAlert

        formulario.reset();

    }
} // save Product

// aseguramos que se ejecute el js despues haber cargado todos los recursos
//externos

function cloud() {
    let image = document.getElementById("product_img");
    let myWidget = cloudinary.createUploadWidget({
        cloudName: 'dtcyppikq',
        uploadPreset: 'wpicwpay'
    }, (error, result) => {
        if (!error && result && result.event === 'success') {
            // console.log('Imagen subida con éxito', result.info);
            image.src = result.info.secure_url;
            // console.log(result.info.secure_url);
        }
    });
    document.querySelector('#upload_widget').addEventListener("click", function() {
        myWidget.open();

    }, false);
} // para guardar las imágenes en Cloudinary


window.onload = function() {

        document.getElementById('formulario').addEventListener('submit', saveProduct);
        cloud();

    } //window