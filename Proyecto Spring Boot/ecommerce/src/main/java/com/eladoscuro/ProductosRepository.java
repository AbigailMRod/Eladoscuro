package com.eladoscuro;

import com.eladoscuro.model.producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductosRepository extends JpaRepository<producto, Long> {
    @Query("SELECT p FROM producto p WHERE p.nombre=?1")
    Optional<producto> findByName(String name);
}// interface productos repository
