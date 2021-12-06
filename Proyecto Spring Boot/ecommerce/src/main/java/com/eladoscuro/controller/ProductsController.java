package com.eladoscuro.controller;


import com.eladoscuro.ProductosService;
import com.eladoscuro.model.producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductsController {
    private final ProductosService productosService;
    @Autowired
    public ProductsController(ProductosService productosService){
        this.productosService= productosService;
    }// constructor

    @GetMapping
    public List<producto> getAllProducts(){
        return productosService.getAllProducts();
    }// get all products

    @GetMapping(path = "{id}")
    public producto getProducts (@PathVariable ("id") Long id){
        return productosService.getProduct(id);
    }// get producto by id

    @DeleteMapping(path = "{id}")
    public void deleteProducts (@PathVariable ("id") Long id){
        productosService.deleteProducts(id);
    }// delete products

    @PostMapping
    public void addProducts(@RequestBody producto producto){
        productosService.addProducts(producto);
    }// add products

    @PutMapping(path = "{id}")
    public void updateProducts(@PathVariable ("id") Long id,
                               @RequestParam(required = false)String descripcion,
                               @RequestParam(required = false)String imagen,
                               @RequestParam(required = false) double precio){
        productosService.updateProducts(id, descripcion, imagen, precio);
    }// update Products
}// class products controller
