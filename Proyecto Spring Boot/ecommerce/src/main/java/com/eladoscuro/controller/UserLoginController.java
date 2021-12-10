package com.eladoscuro.controller;


import com.eladoscuro.UsuariosRepository;
import com.eladoscuro.UsuariosService;
import com.eladoscuro.model.LoginData;
import com.eladoscuro.model.Token;
import com.eladoscuro.model.usuario;
import com.eladoscuro.utils.SHAUtil;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.Optional;

@RestController
@RequestMapping("/api/login/clientes")
@CrossOrigin("*")
public class UserLoginController {
    private final UsuariosRepository usuariosRepository;

    public UserLoginController(UsuariosRepository usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }//contructor

    @PostMapping
    public boolean login(@RequestBody LoginData data) throws ServletException {
        Optional<usuario> userByEmail = usuariosRepository.findByEmail(data.getEmail());
        if (userByEmail.isPresent()){
            if (SHAUtil.verifyHash(data.getPassword(),
                    userByEmail.get().getPassword()) ) {
                return true;
            }//if veryHash
        }//if isPresent
        throw new ServletException("Invalid login. Please check your credentials.");
    }//login


}//UserLogin
