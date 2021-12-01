-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ELADOSCURO
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ELADOSCURO
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ELADOSCURO` DEFAULT CHARACTER SET utf8 ;
USE `ELADOSCURO` ;

-- -----------------------------------------------------
-- Table `ELADOSCURO`.`CONTACTO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ELADOSCURO`.`CONTACTO` ;

CREATE TABLE IF NOT EXISTS `ELADOSCURO`.`CONTACTO` (
  `id_contacto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `mensaje` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id_contacto`),
  UNIQUE INDEX `id_contacto_UNIQUE` (`id_contacto` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ELADOSCURO`.`CLIENTE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ELADOSCURO`.`CLIENTE` ;

CREATE TABLE IF NOT EXISTS `ELADOSCURO`.`CLIENTE` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE INDEX `id_contacto_UNIQUE` (`id_cliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ELADOSCURO`.`CATEGORIA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ELADOSCURO`.`CATEGORIA` ;

CREATE TABLE IF NOT EXISTS `ELADOSCURO`.`CATEGORIA` (
  `id_categoria` INT NOT NULL,
  `nombre` VARCHAR(70) NOT NULL DEFAULT 'XS, S, M, L XL',
  `descripcion` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ELADOSCURO`.`PRODUCTO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ELADOSCURO`.`PRODUCTO` ;

CREATE TABLE IF NOT EXISTS `ELADOSCURO`.`PRODUCTO` (
  `id_producto` INT NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `precio` FLOAT NOT NULL,
  `CATEGORIA_id_categoria` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `CATEGORIA_id_categoria`),
  INDEX `fk_PRODUCTO_CATEGORIA1_idx` (`CATEGORIA_id_categoria` ASC) VISIBLE,
  CONSTRAINT `fk_PRODUCTO_CATEGORIA1`
    FOREIGN KEY (`CATEGORIA_id_categoria`)
    REFERENCES `ELADOSCURO`.`CATEGORIA` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ELADOSCURO`.`ADMINISTRADOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ELADOSCURO`.`ADMINISTRADOR` ;

CREATE TABLE IF NOT EXISTS `ELADOSCURO`.`ADMINISTRADOR` (
  `id_admi` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_admi`),
  UNIQUE INDEX `id_admi_UNIQUE` (`id_admi` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ELADOSCURO`.`VENTA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ELADOSCURO`.`VENTA` ;

CREATE TABLE IF NOT EXISTS `ELADOSCURO`.`VENTA` (
  `id_venta` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `CLIENTE_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_venta`, `CLIENTE_id_cliente`),
  UNIQUE INDEX `id_venta_UNIQUE` (`id_venta` ASC) VISIBLE,
  INDEX `fk_VENTA_CLIENTE1_idx` (`CLIENTE_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_VENTA_CLIENTE1`
    FOREIGN KEY (`CLIENTE_id_cliente`)
    REFERENCES `ELADOSCURO`.`CLIENTE` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ELADOSCURO`.`DETALLE_VENTA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ELADOSCURO`.`DETALLE_VENTA` ;

CREATE TABLE IF NOT EXISTS `ELADOSCURO`.`DETALLE_VENTA` (
  `id_detalle_venta` INT NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  `cantidad` INT NOT NULL,
  `total` FLOAT NOT NULL,
  `PRODUCTO_id_producto` INT NOT NULL,
  `PRODUCTO_CATEGORIA_id_categoria` INT NOT NULL,
  `VENTA_id_venta` INT NOT NULL,
  `VENTA_CLIENTE_id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_detalle_venta`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`),
  INDEX `fk_DETALLE_VENTA_PRODUCTO1_idx` (`PRODUCTO_id_producto` ASC, `PRODUCTO_CATEGORIA_id_categoria` ASC) VISIBLE,
  INDEX `fk_DETALLE_VENTA_VENTA1_idx` (`VENTA_id_venta` ASC, `VENTA_CLIENTE_id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_DETALLE_VENTA_PRODUCTO1`
    FOREIGN KEY (`PRODUCTO_id_producto` , `PRODUCTO_CATEGORIA_id_categoria`)
    REFERENCES `ELADOSCURO`.`PRODUCTO` (`id_producto` , `CATEGORIA_id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DETALLE_VENTA_VENTA1`
    FOREIGN KEY (`VENTA_id_venta` , `VENTA_CLIENTE_id_cliente`)
    REFERENCES `ELADOSCURO`.`VENTA` (`id_venta` , `CLIENTE_id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
