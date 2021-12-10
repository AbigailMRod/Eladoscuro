package com.eladoscuro;


import com.eladoscuro.model.producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProductosService {
    private final ProductosRepository productosRepository;
    @Autowired
    public ProductosService (ProductosRepository productosRepository){
        this.productosRepository=productosRepository;
    }// constructor

    public List<producto> getAllProducts(){
        return productosRepository.findAll();
    }// get all products

    public producto getProduct (Long id){
        return productosRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto con el id" +id +"no existe"));
    }// get producto by id

    public void deleteProducts (Long id){
        if(productosRepository.existsById(id)){
            productosRepository.deleteById(id);
        }else {
            throw new IllegalStateException("El producto con el id" +id+ "no existe");
        }//else
    }// delete products

    public void addProducts (producto producto){
        System.out.println(producto);
        Optional<producto> prodByName= productosRepository.findByName(producto.getNombre());
        if (prodByName.isPresent()){
            throw new IllegalStateException("El producto con el nombre [" +producto.getNombre() +"] ya existe");
        }// is present
        productosRepository.save(producto);
    }// add product

    @Transactional
    public void updateProducts (Long id, String descripcion, String imagen, double precio){
        producto producto= productosRepository.findById(id).orElseThrow(()-> new IllegalStateException("El producto con el id"+ id +"no existe"));
        if (descripcion !=null)
            if ((!descripcion.isEmpty())&& (!descripcion.equals(producto.getDescripcion()))){
                producto.setDescripcion(descripcion);
            }// if descripción

        if ((imagen !=null))
            if ((!imagen.isEmpty()) && (!imagen.equals(producto.getImagen()))){
                producto.setImagen(imagen);
            }// if imagen

        if ((precio>0) && (precio!= producto.getPrecio())){
            producto.setPrecio(precio);
        }// precio >0
    }// update products
}// class productos service
