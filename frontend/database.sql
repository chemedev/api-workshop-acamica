
-- Username: QuQlttFnSQ

-- Database name: QuQlttFnSQ

-- Password: OJSsG6KcS2

-- Server: remotemysql.com

-- Port: 3306



CREATE DATABASE QuQlttFnSQ;
USE QuQlttFnSQ;

CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
fullname VARCHAR(255) NOT NULL,
contrasenia VARCHAR(100)
);

CREATE TABLE productos(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
titulo varchar(50),
descripcion VARCHAR(255),
precio INT NOT NULL,
estado VARCHAR(50),
forma_pago VARCHAR(50),
id_usuario INT,
foreign key(id_usuario) references users(id)
);



INSERT INTO users (username,email,fullname,contrasenia)
 VALUES ("John1","johngonzalez@gmail.com","John Gonzalez","contrasenia") ,
 ("Jose","josegdiaz@gmail.com","Jose Diaz","contrasenia2"),
 ("Rolando","rolandogarcia@gmail.com","Rolando Garcia ","contrasenia3");


INSERT INTO productos (titulo,descripcion,precio,estado,forma_pago,id_usuario)
VALUES ("Camara fotos","camara de fotos marca samsung..",800,"en venta","efectivo",1),
("Secador de pelo","secador marca atma..",1000,"en venta","efectivo",2),
("Heladera","heladera no frost..",60000,"en venta","efectivo",3),
("Mesa","mesa maciza con sillas..",16000,"comprado","efectivo",1);