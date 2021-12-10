package com.eladoscuro.proyecto1.controller;


import com.eladoscuro.proyecto1.models.users;
import com.eladoscuro.proyecto1.usersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users") //Redirecciona
public class usersController {
    private final usersService _usersService;
    @Autowired
    public usersController(usersService _usersService) {
        this._usersService = _usersService;
    }//constructor
    @GetMapping
    public List<users> getUsers(){
        return _usersService.getAllUsers();
    }//get User


    @GetMapping(path = "{userId}") // /api/users/1
    public users getUser(@PathVariable("userId") Long userId) { // función getUsers que es de tipo List de la clase users que creamos
        return _usersService.getUser(userId);
    } // getUser()



    @DeleteMapping(path = "{userId}")// api/users/1
    public void deleteUser(@PathVariable("userId") Long userId){
        _usersService.deleteUser(userId);
        //elimina un usuario
    }
    @PutMapping(path = "{userId}") // api/users/1
    public void updateUser(@PathVariable("userId") Long userId,
                           @RequestParam(required = false) String originalPassword,
                           @RequestParam(required = false) String newPassword){
        _usersService.updateUser(userId,originalPassword,newPassword);

        //Actualizacion de informacion
    }//updateUser

    @PostMapping // /api/users/
    public void addUser(@RequestBody users user){
        _usersService.addUser(user);
    }//addUser
}//class
