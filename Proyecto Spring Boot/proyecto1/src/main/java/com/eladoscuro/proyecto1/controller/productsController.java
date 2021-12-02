package com.eladoscuro.proyecto1.controller;

import com.eladoscuro.proyecto1.models.products;
import com.eladoscuro.proyecto1.productsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/products")//Redirecciona

public class productsController {
    private final productsService _productsService;
    @Autowired
    public productsController(productsService _productsService){
        this._productsService=_productsService;
    }//Constructor
    @GetMapping
    public List<products> getProducts(){
        return _productsService.getAllProducts();
    }//get Products
    @GetMapping(path = "{productId}")// api/products/1
    public products getProducts(@PathVariable("productId")Long productId){
        return _productsService.getProducts(productId);
    }//Get Products

    @DeleteMapping(path = "{productId}")//
    public void deleteProduct(@PathVariable("productId")Long productId){
        _productsService.deleteProducts(productId);
    }//Elimina un producto
    @PutMapping(path = "{productId}")
    public void updateProduct(@PathVariable("productId") Long productId,
                              @PathVariable("productId") Long newPrecio){
        _productsService.updateProduct(productId,newPrecio);
    }//modifica el precio

    @PostMapping //api/users/
    public void addProduct(@RequestBody products product){
        _productsService.addProduct(product);
    }//addProduct
}//class productsController
