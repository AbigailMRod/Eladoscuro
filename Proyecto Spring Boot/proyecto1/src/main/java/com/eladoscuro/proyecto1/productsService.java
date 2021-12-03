package com.eladoscuro.proyecto1;

import com.eladoscuro.proyecto1.models.products;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class productsService {
    public final ArrayList<products> lista = new ArrayList<>();

    public productsService() {
        lista.add(new products(1, "https//:www.producto1.com", "Playera hombre", "Cada lucha a librar, debe de ser con estilo", 400f, 1));
        lista.add(new products(2, "https//:www.producto2.com", "Sudadera", "Cada lucha a librar, debe de ser con estilo", 400f, 2));
        lista.add(new products(3, "https//:www.producto3.com", "Stiker1", "Cada lucha a librar, debe de ser con estilo", 400f, 3));
        lista.add(new products(4, "https//:www.producto4.com", "PlayeraMujer", "Cada lucha a librar, debe de ser con estilo", 400f, 4));
    }//Constructor

    public List<products> getAllProducts() {
        return lista;
    }//getProducts

    public products getProducts(Long productId) {
        if (productId <= lista.size()) {
           return lista.get((productId.intValue()-1));
        }//if
        return new products(0, "not found", "not found", "not found", 0f, 0);
    }//getProducts

    public boolean deleteProducts(Long productId) {
        boolean res = false;
        if (productId <= lista.size()) {
            lista.remove((productId.intValue()-1));
            res = true;
        }//if>=size
        return res;
    }//deleteProducts

    public void updateProduct(Long productId, float newPrecio){
        if (productId<=lista.size()){
            products product = lista.get((productId.intValue()));
            product.setPrecio(newPrecio);
        }
    }//updatePrecio

    public void addProduct(products product){
        lista.add(product);
    }//addproduct
}//userservice