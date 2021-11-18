function inicio(){    
        window.location= "./../index.html";
        }// función para regresar a la página de inicio


//función para seleccionar los divs de la página de productos

   function VerificarMenu(){
    if(document.getElementById('categoria').value =="Playeras & Sudaderas"){
        document.getElementById('list-items');
        console.log("Se ha posisionado en el div Playeras & Sudaderas ")

    }else if(document.getElementById('categoria').value =="Stickers" ){
        document.getElementById('list-items2');
        console.log("Se ha posisionado en el div Stickers ")

    }else if(document.getElementById('categoria').value =="Posters" ){
        document.getElementById('list-items3');
        console.log("Se ha posisionado en el div Posters ")
   
    }else{
        console.log("No se posisionó en ningun div")
    }

    }// VerificarMenu     
