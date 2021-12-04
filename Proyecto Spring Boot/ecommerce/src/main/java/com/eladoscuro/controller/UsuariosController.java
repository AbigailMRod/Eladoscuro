package com.eladoscuro.controller;


import com.eladoscuro.UsuariosService;
import com.eladoscuro.model.usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuariosController {
    private final UsuariosService usuariosService;
    @Autowired
    public UsuariosController(UsuariosService usuariosService) {
        this.usuariosService = usuariosService;
    }//constructor

    @GetMapping
    public List<usuario> gettAllUsuarios(){
        return usuariosService.getAllUsuarios();
    }//getAllUsuarios

    @GetMapping (path = "{id}") // /api/usuarios/1
    public usuario getUsuario(@PathVariable("id") Long id){
        return usuariosService.getUsuario(id);
    }//getUsuario

    @PostMapping
    public void addUsuario(@RequestBody usuario usuario){
        usuariosService.addUsuario(usuario);
    }//addUsuario

    @DeleteMapping (path = "{id}") // /api/usuarios
    public void deleteUsuario(@PathVariable("id") Long id){
        usuariosService.deleteUsuario(id);
    }//deleteUsuario

    @PutMapping (path = "{id}") // /api/usuarios/7
    public void updateUsuario(@PathVariable("id") Long id,
                              @RequestParam(required = false) String originalPassword,
                              @RequestParam(required = false) String newPassword,
                              @RequestParam(required = false) String telefono,
                              @RequestParam(required = false) String nombre,
                              @RequestParam(required = false) String email){
        usuariosService.updateUsuario(id,originalPassword,newPassword,telefono,nombre,email);
    }//updateUsuario
}//class UsusariosController
