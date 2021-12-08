package com.eladoscuro.model;

public class Token {
    private final String accessToken;

    public Token(String accessToken) {
        this.accessToken = accessToken;
    }//constructor

    public String getAccessToken() {
        return accessToken;
    }//getAccessToken
}//class Token
