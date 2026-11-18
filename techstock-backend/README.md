# no inicio so eu e DEUS sabiamos como o codigo funcionava... agora é so Deus que sabe

1 Docker e mysql

docker run -d  --name techstock-db-mysql -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATANASE=techstock_db -p 3307:3306 mysql:8

CREATE DATABASE techstock_db;
USE techstock_db

CREATE TABLE estoque (
    id VARCHAR(100) PRIMARY KEY NOT NULL UNIQUE, 
    nome VARCHAR(100) NOT NULL, 
    categoria VARCHAR(100) NOT NULL, 
    numero_de_serie INT NOT NULL UNIQUE, 
    estatus VARCHAR(100) NOT NULL, 
    data DATE NOT NULL
);

INSERT INTO estoque (id, nome, categoria, numero_de_serie, estatus, data) VALUES ("001", "abelha", "inseto", 21212212, "em manuteno", "20260101");

 SELECT * FROM estoque

 fim da documentação :3 

 nota IMPORTANTE: se funciona, favor não mexer