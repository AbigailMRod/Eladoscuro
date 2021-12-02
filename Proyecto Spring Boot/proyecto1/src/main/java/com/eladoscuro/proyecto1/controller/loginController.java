package com.eladoscuro.proyecto1.controller;

import com.eladoscuro.proyecto1.models.users;
import com.eladoscuro.proyecto1.usersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class loginController {
    private final usersService _usersService;
    @Autowired
    public loginController(usersService usersService) {
        _usersService = usersService;
    }//constructor

    @GetMapping
    public boolean loginUser(@RequestParam(required = false) Long userId,
                             @RequestParam(required = false) String password,
                             @RequestParam(required = false) String email){
        return  _usersService.loginUser(userId, password, email);
    }//loginUser


}//class

