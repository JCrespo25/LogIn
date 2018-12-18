create database LogINBD;

use LogINBD;

create table departamentos
(
    departamento_id int not null primary key AUTO_INCREMENT,
    depa_name varchar(50)
    
)

create table cuentas
(
    cuentas_id int not null primary key AUTO_INCREMENT,
    cuentas_usuario varchar(50);
    cuentas_contraseña varchar(50);
)