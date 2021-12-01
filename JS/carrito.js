// articulos en el carrito del carrito
function onLoadcartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }//if
}//onLoadcartNumbers
onLoadcartNumbers();




function displayCart(){
    console.log("dibujar pordutos en carrito");
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem("productosEnCarrito");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `<tr>
            <td class="col-12 col-sm-8 col-md-6">
            <div class="media">
                <a class="thumbnail pull-left" href="./../pages/productos.html"> <img class="media-object" src="${item.img}" style="width: 130px; height: 150px;"> </a>
                <div class="media-body">
                    <h4 class="media-heading"><a href="./../pages/productos.html">${item.model}</a></h4>
                    <h5 class="media-heading"><a href="./../pages/productos.html">${item.description}</a></h5>
                </div>
            </div></td>
            <td class="col-sm-1 col-md-1" style="text-align: center">
            <output type="cc-number" class="form-control" id="inCart">${item.inCart}<output>
            <!--<output name="result" for="a b">${item.inCart}</output>-->
            </td>
            <td class="col-sm-1 col-md-1 text-center"><strong>$${item.price}.00</strong></td>
            <td class="col-sm-1 col-md-1 text-center"><strong>$${item.inCart * item.price}.00</strong></td>
            <td class="col-sm-1 col-md-1">
            <button type="button" class="btn btn-danger">
                <span class="glyphicon glyphicon-remove"></span> Remover
            </button></td>
        </tr>`; });

        productContainer.innerHTML += `<body> 
        <tr>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td><h3>TOTAL</h3></td>
        <td class="text-left"><h3><strong>$${cartCost}.00</strong></h3></td>
        </tr>
        <tr>
        <td>   </td>
        <td>   </td>
        <td>   </td>
        <td>
        <td>
        <button type="button" class="btn btn-success">
             <span class="glyphicon glyphicon-play">Comprar</span>
        </button></td>
        </tr>
    </body>`;
    }//if 
}//displayCart









displayCart();


