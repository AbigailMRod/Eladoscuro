package com.eladoscuro.model;

public class LoginData {
    private final String email;
    private final String password;

    public LoginData(String email, String password) {
        this.email = email;
        this.password = password;
    }//constructor

    public LoginData() {
        this.email = "";
        this.password = "";
    }//constructor

    public String getEmail() {
        return email;
    }//getEmail

    public String getPassword() {
        return password;
    }//getPassword
}//class LoginData
