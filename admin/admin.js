function inicio(){    
        window.location= "./../index.html";
        }// función para regresar a la página de inicio


//función para seleccionar los divs de la página de productos

// function VerificarMenu(){
//         if(document.getElementById('categoria').value =="Playeras & Sudaderas"){
//         document.getElementById('list-items');
//         console.log("Se ha posisionado en el div Playeras & Sudaderas ")

//         }else if(document.getElementById('categoria').value =="Stickers" ){
//         document.getElementById('list-items2');
//         console.log("Se ha posisionado en el div Stickers ")

//         }else if(document.getElementById('categoria').value =="Posters" ){
//         document.getElementById('list-items3');
//         console.log("Se ha posisionado en el div Posters ")

//         }else{
//         console.log("No se posisionó en ningun div")
//         }

// }// VerificarMenu    


/********************************  para añadir elementos al JSON******************************/ 
function saveProduct(e){
        e.preventDefault();
        console.log("4")
        let nombre= document.getElementById("nombre").value,
        descripcion= document.getElementById("descripcion").value,
        precio= document.getElementById("precio").value,
        image = document.getElementById("product_img").src, /* ************************** */
        // image= document.getElementById("imagen").options[document.getElementById("imagen").selectedIndex].value;
        category= document.getElementById("categoria").options [document.getElementById("categoria").selectedIndex].value;
        // console.log(nombre);
        // console.log(descripcion);
        // console.log(precio);
        console.log(image.src);

        let newProduct={
                "model":nombre,
                "price": precio,
                "description": descripcion,
                "img": image,
                "category":category
        };//new Product

        let valueInLocalStorage=  window.localStorage.getItem("localProduct");
        let storeList;
        // console.log(ProductBase);
        if(valueInLocalStorage){
           // 1. Traer lo que tengas en el localStorage
           // 2. Convertirlo de json a un arreglo
           // 3. hacer push del nuevo objeto
           // 4. Volver a arreglo a json
           // 5. Actualizar el item  
        storeList= JSON.parse(valueInLocalStorage)
        storeList.push(newProduct);
        console.log(storeList)
        window.localStorage.setItem("localProduct",JSON.stringify(storeList));
        nombre= '';
        descripcion= '';
        precio='';
        image='';

        }
}// save Product

   // aseguramos que se ejecute el js despues haber cargado todos los recursos
   //externos
   

   
window.onload = function(){
        console.log("cargo")
        let form =  document.getElementById("formulario")
        form.addEventListener("submit", saveProduct);
        
        let image_2 = document.getElementById("product_img") /*  ****************** */


        let myWidget = cloudinary.createUploadWidget({
                cloudName : "dtcyppikq",
                uploadPreset : 'wpicwpay'
        }, (error, result)=>{
                if (!error && result && result.event === "success"){
                console.log("3")
                        console.log("Imagen subida con éxito");
                        image_2.src = result.info.secure_url;
                }
        })
        document.getElementById("upload_widget").addEventListener("click", function(){
                console.log("2")
       
                myWidget.open();
        }, false);
}//window




