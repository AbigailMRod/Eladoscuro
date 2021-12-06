package com.eladoscuro.model;


import javax.persistence.*;

@Entity
@Table(name="producto")
public class producto {//POJOs
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto", unique = true, nullable = false)
    private Long id;
    private String imagen;
    private String nombre;
    private String descripcion;
    private double precio;
    private Long CATEGORIA_id_categoria;

    public producto(Long id, String imagen, String nombre, String descripcion, double precio, Long CATEGORIA_id_categoria) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.CATEGORIA_id_categoria = CATEGORIA_id_categoria;
    }// constructor

    public producto() {
    }// cosntructor vacío

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public Long getCATEGORIA_id_categoria() {
        return CATEGORIA_id_categoria;
    }

    public void setCATEGORIA_id_categoria(Long CATEGORIA_id_categoria) {
        this.CATEGORIA_id_categoria = CATEGORIA_id_categoria;
    }
}// class producto

