package com.eladoscuro;


import com.eladoscuro.model.usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UsuariosRepository extends JpaRepository<usuario,Long>{
    @Query("SELECT u FROM usuario u WHERE u.nombre=?1")
    Optional<usuario> findByName(String name);
}//ProductosRepository
