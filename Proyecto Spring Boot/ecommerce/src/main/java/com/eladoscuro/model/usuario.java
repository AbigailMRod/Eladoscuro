package com.eladoscuro.model;


import javax.persistence.*;

@Entity
@Table(name ="cliente")
public class usuario { //POJO
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente", unique = true, nullable = false)
    private Long id;
    private String nombre;
    private String telefono;
    private String email;
    @Column(name = "contrasenia")
    private String password;


    public usuario(Long id, String nombre, String telefono, String email, String contraseña) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.password = contraseña;
    }//constructor

    public usuario(){}

    public Long getId() {
        return id;
    }//getId

    public void setId(Long id) {
        this.id = id;
    }//setId

    public String getNombre() {
        return nombre;
    }//getNombre

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }//setNombre

    public String getTelefono() {
        return telefono;
    }//getTelefono

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }//setTelefono

    public String getEmail() {
        return email;
    }//getEmail

    public void setEmail(String email) {
        this.email = email;
    }//setEmail

    public String getPassword() {
        return password;
    }//getPassword

    public void setPassword(String password) {
        this.password = password;
    }//setPassword
}//class usuario
