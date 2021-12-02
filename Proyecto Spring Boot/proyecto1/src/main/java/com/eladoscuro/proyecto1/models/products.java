package com.eladoscuro.proyecto1.models;

public class products {
    private int id_producto;
    private String imagen;
    private String nombre;
    private String descripcion;
    private float precio;
    private int Categoria_id;

    //Constructor
    public products(int id_producto, String imagen, String nombre, String descripcion, float precio, int categoria_id) {
        this.id_producto = id_producto;
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        Categoria_id = categoria_id;
    }//constructor


    //getters and setters
    public int getId_producto() {
        return id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public int getCategoria_id() {
        return Categoria_id;
    }

    public void setCategoria_id(int categoria_id) {
        Categoria_id = categoria_id;
    }//getters and setters
}
