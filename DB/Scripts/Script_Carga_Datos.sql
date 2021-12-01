USE eladoscuro;


-- Datos CONTACTO

INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('1', 'Martín López', '5587432567', 'martinlopez@gmail.com', 'Quisiera solicitar un diseño personalizado.');
INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('2', 'Ana Osnaya', '5528724609', 'anaosnaya@gmail.com', 'Me encantan sus diseños, tienen alguna tienda fisica?');
INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('3', 'Francisco Trillo', '5534421395', 'frantri@gmail.com', 'Tienen mas productos ademas de los posters? como carteras?');
INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('4', 'Javier Carreon', '5539872391', 'francarren@gmail.com', 'Tienen descuentos en la compra de 10 productos o mas?');
INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('5', 'Paulina Juarez', '5532987563', 'paujuarez@gmail.com', 'Cuál es el costo del envío a 14340 y cuánto tiempo tardaría?');


-- Datos ADMINISTRADOR

INSERT INTO `eladoscuro`.`administrador` (`id_admi`, `nombre`, `contraseña`) VALUES ('1', 'ELADO', 'Oscuro_09');

-- Datos CATEGORÍA

INSERT INTO `eladoscuro`.`categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES ('1', 'PLAYERAS_SUDADERAS', 'Mejores playeras y sudaderas con diseño original de México.');
INSERT INTO `eladoscuro`.`categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES ('2', 'STICKERS', 'Stickers originales con diseños 100% mexicanos.');
INSERT INTO `eladoscuro`.`categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES ('3', 'POSTERS', 'Mejores posters con diseño original de México.');


-- Datos PRODUCTO

INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('1', 'https://98482249.jpg.com', 'Amor a la mexicana', 'Sudadera para hombre', '800', '1');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('2', 'https://3454923.jpg.com', 'Sudadera para hombre', 'Playera para mujer', '400', '1');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('3', 'https://34234529.jpg.com', 'Lucha Libre', 'Playera para hiombre', '400', '1');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('4', 'https://34234549.jpg.com', 'Logo + amor', 'Juego de stickers 2', '100', '2');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('5', 'https://342345459.jpg.com', 'Lucha libre', 'Poster decorativo', '75', '3');


-- Datos CLIENTE

INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contraseña`) VALUES ('1', 'Jesús Treji', '557223492', 'jsrd1@gmail.com', 'Jes932');
INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contraseña`) VALUES ('2', 'Hillary Navarro', '55312452', 'hillaryd@gmail.com', 'h_23illa');
INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contraseña`) VALUES ('3', 'Mafer Navarro', '5593421573', 'mafer@gmail.com', 'm1fwer3');
INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contraseña`) VALUES ('4', 'David Santiago', '55322363', 'davids23@gmail.com', 'davidis35');
INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contraseña`) VALUES ('5', 'Mirta Lopez', '5532257894', 'mirtdf23@gmail.com', 'm245urtkd');


-- Datos VENTA

INSERT INTO `eladoscuro`.`venta` (`id_venta`, `fecha`, `CLIENTE_id_cliente`) VALUES ('1', '2021-12-03', '1');
INSERT INTO `eladoscuro`.`venta` (`id_venta`, `fecha`, `CLIENTE_id_cliente`) VALUES ('2', '2021-12-04', '2');
INSERT INTO `eladoscuro`.`venta` (`id_venta`, `fecha`, `CLIENTE_id_cliente`) VALUES ('3', '2021-12-02', '3');
INSERT INTO `eladoscuro`.`venta` (`id_venta`, `fecha`, `CLIENTE_id_cliente`) VALUES ('4', '2021-12-03', '4');
INSERT INTO `eladoscuro`.`venta` (`id_venta`, `fecha`, `CLIENTE_id_cliente`) VALUES ('5', '2021-12-10', '5');


-- Datos DETALLE_VENTA

INSERT INTO `eladoscuro`.`detalle_venta` (`id_detalle_venta`, `direccion`, `cantidad`, `total`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`) VALUES ('1', 'siempre viva #12', '1', '800', '1', '1', '1', '1');
INSERT INTO `eladoscuro`.`detalle_venta` (`id_detalle_venta`, `direccion`, `cantidad`, `total`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`) VALUES ('2', 'tulipanes #21', '2', '800', '2', '1', '2', '2');
INSERT INTO `eladoscuro`.`detalle_venta` (`id_detalle_venta`, `direccion`, `cantidad`, `total`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`) VALUES ('3', 'jalisco #12', '2', '800', '3', '1', '3', '3');
INSERT INTO `eladoscuro`.`detalle_venta` (`id_detalle_venta`, `direccion`, `cantidad`, `total`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`) VALUES ('4', 'la roma # 45', '1', '100', '4', '2', '4', '4');
INSERT INTO `eladoscuro`.`detalle_venta` (`id_detalle_venta`, `direccion`, `cantidad`, `total`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`) VALUES ('5', 'juares #54', '1', '75', '5', '3', '5', '5');

