package com.eladoscuro.controller;

import com.eladoscuro.UsuariosRepository;
import com.eladoscuro.model.LoginData;
import com.eladoscuro.model.Token;
import com.eladoscuro.model.usuario;
import com.eladoscuro.utils.SHAUtil;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/login")
@CrossOrigin("*")
public class AuthController {
    private final UsuariosRepository usuariosRepository;

    public AuthController(UsuariosRepository usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }//constructor

    @PostMapping
    public Token login(@RequestBody LoginData data) throws ServletException {
        Optional<usuario> userByEmail = usuariosRepository.findByEmail(data.getEmail());
        if (userByEmail.isPresent()){
            if (SHAUtil.verifyHash(data.getPassword(),
                    userByEmail.get().getPassword()) ) {
                return new Token(generateToken(data.getEmail()));
            }//if veryHash
        }//if isPresent
        throw new ServletException("Invalid login. Please check your credentials.");
    }//login

    private String generateToken( String email )  {
        Calendar calendar = Calendar.getInstance();
        calendar.add( Calendar.HOUR,  10);
        String secret = "this-secret-is-not-very-secret-99";

        return Jwts.builder().setSubject( email ).claim( "role", "user" )
                .setIssuedAt( new Date() ).setExpiration(calendar.getTime() )
                .signWith( SignatureAlgorithm.HS256, secret ).compact();
    }//generateToken

}//class AuthController
