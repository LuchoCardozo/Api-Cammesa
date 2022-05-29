CREATE DATABASE data_cammesa;
USE data_cammesa;
CREATE TABLE dem_chaco (
fecha datetime not null,
demHoy int,
demAyer int,
demSemanaAnt int,
primary key (fecha)
);
CREATE TABLE dem_corrientes (
fecha datetime not null,
demHoy int,
demAyer int,
demSemanaAnt int,
primary key (fecha)
);
CREATE TABLE dem_formosa (
fecha datetime not null,
demHoy int,
demAyer int,
demSemanaAnt int,
primary key (fecha)
);
CREATE TABLE dem_misiones (
fecha datetime not null,
demHoy int,
demAyer int,
demSemanaAnt int,
primary key (fecha)
);
CREATE TABLE dem_nea (
fecha datetime not null,
demHoy int,
demAyer int,
demSemanaAnt int,
demPrevista int,
tempHoy double,
tempAyer double,
tempSemanaAnt double,
primary key (fecha)
);
CREATE TABLE users_managements (
id INT NOT NULL auto_increment,
name varchar(100) NOT NULL,
primary key (id)
);
CREATE TABLE users_categories (
id INT NOT NULL auto_increment,
name varchar(50) NOT NULL,
primary key (id)
);
CREATE TABLE users (
id INT NOT NULL auto_increment,
first_name varchar(100) NOT NULL,
last_name varchar(100) NOT NULL,
legajo int NOT NULL,
management_id int NOT NULL,
email varchar(150) NOT NULL unique,
avatar varchar(255) NOT NULL,
password varchar(255) NOT NULL,
category_id int NOT NULL,
createdAt datetime,
updatedAt datetime,
primary key (id),
foreign key (management_id) references users_managements(id),
foreign key (category_id) references users_categories(id)
);


