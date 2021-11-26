function inicio() {
    window.location = "./../index.html";
} // función para regresar a la página de inicio



/********************************  para añadir elementos al JSON******************************/
function saveProduct(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value,
        descripcion = document.getElementById("descripcion").value,
        precio = document.getElementById("precio").value,
        image = document.getElementById("imagen").options[document.getElementById("imagen").selectedIndex].value;
    category = document.getElementById("categoria").options[document.getElementById("categoria").selectedIndex].value;
    // console.log(nombre);
    // console.log(descripcion);
    // console.log(precio);
    // console.log(image);

    let newProduct = {
        model: nombre,
        price: precio,
        description: descripcion,
        img: image,
        category: category
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
        nombre = '';
        descripcion = '';
        precio = '';
        image = '';

    } else {
        window.localStorage.setItem("localProduct", JSON.stringify(ProductBase));
        valueInLocalStorage = ProductBase
    } //else
} // save Product

// aseguramos que se ejecute el js despues haber cargado todos los recursos
//externos
window.onload = () => {
        console.log("cargo")
        let form = document.getElementById("formulario")
        form.addEventListener("submit", saveProduct);

    } //window