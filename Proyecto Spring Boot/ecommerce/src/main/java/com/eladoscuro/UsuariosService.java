package com.eladoscuro;


import com.eladoscuro.model.producto;
import com.eladoscuro.model.usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UsuariosService {
    private final UsuariosRepository usuariosRepository;
    @Autowired

    public UsuariosService(UsuariosRepository usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }//constructor

    public List<usuario> getAllUsuarios(){
        return usuariosRepository.findAll();
    }//getAllUsuarios

    public usuario getUsuario(Long id){
        return usuariosRepository.findById(id).orElseThrow(()-> new IllegalStateException("El usuario con el id [" + id + "] no existe"));
    }//getUsuario

    public void deleteUsuario(Long id){
        if (usuariosRepository.existsById(id)){
            usuariosRepository.deleteById(id);
        }else {
            throw new IllegalStateException("El usuario con el id [" + id + "] no existe");
        }//else
    }//deleteUsuario

    public void addUsuario(usuario usuario){
        Optional<usuario> prodByname = usuariosRepository.findByName(usuario.getNombre());
        if (prodByname.isPresent()){
            throw new IllegalStateException("El usuario con el nombre [" + usuario.getNombre() + "] ya existe");
        }//isPresent
        usuariosRepository.save(usuario);
    }//addUsuario


    @Transactional
    public void updateUsuario(Long id, String originalPassword, String newPassword, String telefono, String nombre, String email){
        usuario usr = usuariosRepository.findById(id).
                orElseThrow(()-> new IllegalStateException("El usuario con el id" + id + "no existe"));
        if(telefono !=null)
            if((!telefono.isEmpty()) && (! telefono.equals(usr.getTelefono()))){
                usr.setTelefono(telefono);
        }//updateTelefono

        if (nombre !=null)
            if ((!nombre.isEmpty()) && (! nombre.equals(usr.getNombre()))){
                usr.setNombre(nombre);
            }//updateNombre

        if( email !=null)
            if ((!email.isEmpty()) && (! email.equals(usr.getEmail()))){
                usr.getEmail();
            }

        if (usr.getPassword().equals(originalPassword)){
            usr.setPassword(newPassword);
            }//if original


    }//updateUsuario

}//UsuarioService
