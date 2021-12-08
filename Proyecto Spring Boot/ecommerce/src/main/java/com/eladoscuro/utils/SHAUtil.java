package com.eladoscuro.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class SHAUtil {
    //Permite tomar una cadena y convertirla en un HASH SHA256
    public static String salt ="#MAGDGEAAYEB_2021";
    public static String createHash(String value) {
        String res = value + salt;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            // SHA-1 SHA-256 SHA-384 SHA-512
            md.update(res.getBytes());
            byte [] resultado = md.digest();
            int max = resultado.length;
            String tmp;
            res ="";
            for (int i=0; i<max; i++) {
                tmp = Integer.toHexString(0xFF & resultado[i]);
                res += (tmp.length()<2)?0+tmp:tmp;
            }// for i

        }catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }//catch
        return res;
    }//createHash
    public static  boolean verifyHash(String original, String hash) {
        String res=createHash(original);
        return res.equalsIgnoreCase(hash);
    }// verifyHash


    public static void main (String args[]) {
        System.out.println(createHash("Gener@tion") );
//        System.out.println(verifyHash("password", "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"));
//        System.out.println(verifyHash("password", "6604e49af13d475ac065c619ebf334de100d4800a2c9cc555d6ff1a0987f8f31"));
    }//main



}//class SHAUtil
