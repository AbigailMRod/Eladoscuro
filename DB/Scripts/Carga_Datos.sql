USE eladoscuro;


-- Datos CONTACTO

INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('1', 'Martín López', '5587432567', 'martinlopez@gmail.com', 'Quisiera solicitar un diseño personalizado.');
INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('2', 'Ana Osnaya', '5528724609', 'anaosnaya@gmail.com', 'Me encantan sus diseños, tienen alguna tienda fisica?');
INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('3', 'Francisco Trillo', '5534421395', 'frantri@gmail.com', 'Tienen mas productos ademas de los posters? como carteras?');
INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('4', 'Javier Carreon', '5539872391', 'francarren@gmail.com', 'Tienen descuentos en la compra de 10 productos o mas?');
INSERT INTO `eladoscuro`.`contacto` (`id_contacto`, `nombre`, `telefono`, `email`, `mensaje`) VALUES ('5', 'Paulina Juarez', '5532987563', 'paujuarez@gmail.com', 'Cuál es el costo del envío a 14340 y cuánto tiempo tardaría?');


-- Datos ADMINISTRADOR

INSERT INTO `eladoscuro`.`administrador` (`id_admi`, `nombre`, `contrasenia`) VALUES ('1', 'ELADO', 'Oscuro_09');

-- Datos CATEGORÍA

INSERT INTO `eladoscuro`.`categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES ('1', 'PLAYERAS_SUDADERAS', 'Mejores playeras y sudaderas con diseño original de México.');
INSERT INTO `eladoscuro`.`categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES ('2', 'STICKERS', 'Stickers originales con diseños 100% mexicanos.');
INSERT INTO `eladoscuro`.`categoria` (`id_categoria`, `nombre`, `descripcion`) VALUES ('3', 'POSTERS', 'Mejores posters con diseño original de México.');


-- Datos PRODUCTO


INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `tallas`, `CATEGORIA_id_categoria`) VALUES ('1', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016021/yycknbur10gdvqjl53be.jpg', 'Amor a la mexicana', 'Sudadera para hombre', '800', 'Tallas: XS, S, M, L XL', '1');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `tallas`, `CATEGORIA_id_categoria`) VALUES ('2', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016040/tikkbibw5twh16ydt3z1.jpg', 'Amor a la mexicana', 'Playera para mujer', '400', 'Tallas: XS, S, M, L XL', '1');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `tallas`, `CATEGORIA_id_categoria`) VALUES ('3', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016049/gjqqgbcf4h88rcjr2qqi.jpg', 'Lucha libre', 'Playera para hombre', '400', 'Tallas: XS, S, M, L XL', '1');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `tallas`, `CATEGORIA_id_categoria`) VALUES ('4', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016056/cvuwijdjvrrapoyjrtrz.jpg', 'Lucha libre', 'Playera para mujer', '400', 'Tallas: XS, S, M, L XL', '1');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('5', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016114/wmcivssriqf43bmsndw5.jpg', 'Logo', 'Juego de stickers 1', '100', '2');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('6', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016122/df6kattmwxk5zu9tyvol.jpg', 'Logo + amor', 'Juego de stickers 2', '100', '2');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('7', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016129/nowoboxiyepcgdarjoc8.jpg', 'Lucha libre', 'Juego de stickers 3', '100', '2');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('8', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016137/imrvz5p1kftj7pqmch2k.jpg', 'Amor a la mexicana', 'Juego de stickers 4', '100', '2');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('9', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016063/cuklech1igygijcar59r.jpg', 'Lucha libre', 'Poster tamaño carta', '50', '3');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('10', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016073/yx8xczbfzychpuvm45xz.jpg', 'Lucha libre + amor', 'Poster decorativo', '75', '3');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('11', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016082/dxwgki4incbqzu0zun8x.jpg', 'Lucha libre', 'Poster decorativo', '75', '3');
INSERT INTO `eladoscuro`.`producto` (`id_producto`, `imagen`, `nombre`, `descripcion`, `precio`, `CATEGORIA_id_categoria`) VALUES ('12', 'https://res.cloudinary.com/dtcyppikq/image/upload/v1639016092/smmdahwyip0coyxbj3vn.jpg', 'Amor a la mexicana', 'Poster decorativo', '75', '3');



-- Datos CLIENTE

INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contrasenia`) VALUES ('1', 'Cristian Iram Monarres', '5522658909', 'cristian.monarres.mtz@gmail.com', '6bb2cebe073027c4560442abb90624f8564faf6d80882a9a5dfb17a814eb2b30');
INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contrasenia`) VALUES ('2', 'Abigail Muñoz', '5589032710', 'abigail.mrodriguez21@gmail.com', '6bb2cebe073027c4560442abb90624f8564faf6d80882a9a5dfb17a814eb2b30');
INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contrasenia`) VALUES ('3', 'Arturo Islas', '5558173902', 'arturo.islas95@gmail.com', '6bb2cebe073027c4560442abb90624f8564faf6d80882a9a5dfb17a814eb2b30');
INSERT INTO `eladoscuro`.`cliente` (`id_cliente`, `nombre`, `telefono`, `email`, `contrasenia`) VALUES ('4', 'Bernardo Fernandez', '5567890323', 'bernardo.fersan@gmail.com', '6bb2cebe073027c4560442abb90624f8564faf6d80882a9a5dfb17a814eb2b30');



-- Datos VENTA

INSERT INTO `eladoscuro`.`venta` (`id_venta`, `fecha`, `CLIENTE_id_cliente`) VALUES ('1', '2021-12-03', '1');
INSERT INTO `eladoscuro`.`venta` (`id_venta`, `fecha`, `CLIENTE_id_cliente`) VALUES ('2', '2021-12-04', '2');
INSERT INTO `eladoscuro`.`venta` (`id_venta`, `fecha`, `CLIENTE_id_cliente`) VALUES ('3', '2021-12-02', '3');


-- Datos DETALLE_VENTA

INSERT INTO `eladoscuro`.`detalle_venta` (`id_detalle_venta`, `direccion`, `cantidad`, `total`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`) VALUES ('1', 'siempre viva #12', '1', '800', '1', '1', '1', '1');
INSERT INTO `eladoscuro`.`detalle_venta` (`id_detalle_venta`, `direccion`, `cantidad`, `total`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`) VALUES ('2', 'tulipanes #21', '2', '800', '2', '1', '2', '2');
INSERT INTO `eladoscuro`.`detalle_venta` (`id_detalle_venta`, `direccion`, `cantidad`, `total`, `PRODUCTO_id_producto`, `PRODUCTO_CATEGORIA_id_categoria`, `VENTA_id_venta`, `VENTA_CLIENTE_id_cliente`) VALUES ('3', 'jalisco #12', '2', '800', '3', '1', '3', '3');

