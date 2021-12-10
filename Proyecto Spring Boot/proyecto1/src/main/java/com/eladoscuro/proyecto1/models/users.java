package com.eladoscuro.proyecto1.models;

public class users {
    private int id_user;
    private String name;
    private String phone;
    private String email;
    private String password;

    public users(int id_user, String name, String phone, String email, String password) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.id_user = id_user;
    } //constructor

    public users() {} // constructor vacío para usar el POST

    public int getId_user() {
        return id_user;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    } //getters

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }//setters


}//class
