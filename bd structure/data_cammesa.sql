CREATE DATABASE data_cammesa;
USE data_cammesa;
CREATE TABLE dem_chaco (
id BIGINT NOT NULL auto_increment,
fecha datetime,
demHoy int,
demAyer int,
demSemAnt int,
primary key (id)
);
CREATE TABLE dem_corrientes (
id BIGINT NOT NULL auto_increment,
fecha datetime,
demHoy int,
demAyer int,
demSemAnt int,
primary key (id)
);
CREATE TABLE dem_formosa (
id BIGINT NOT NULL auto_increment,
fecha datetime,
demHoy int,
demAyer int,
demSemAnt int,
primary key (id)
);
CREATE TABLE dem_misiones (
id BIGINT NOT NULL auto_increment,
fecha datetime,
demHoy int,
demAyer int,
demSemAnt int,
primary key (id)
);
CREATE TABLE dem_nea (
id BIGINT NOT NULL auto_increment,
fecha datetime,
demHoy int,
demAyer int,
demSemAnt int,
tempHoy double,
tempAyer double,
tempSemAnt double,
primary key (id)
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


