CREATE DATABASE BeeAware;
USE BeeAware;



/*-------------------------------------------------------------------------------------------- Criação da tabela empresa --------------------------------------------------------------------------------------------------------------- */
CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(45) not null,
    cnpj VARCHAR(18) not null,
    telefone VARCHAR(14),
    email VARCHAR(80) not null,
    cep CHAR(9) not null,
    numero INT not null,
    complemento VARCHAR(255) not null
);
DESCRIBE empresa;
SELECT * FROM empresa;

/*-------------------------------------------------------------------------------------------- Criação da tabela usuário --------------------------------------------------------------------------------------------------------------- */

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    senha VARCHAR(255),
    cpf VARCHAR(15),
    email VARCHAR(80),
    cargo VARCHAR(8),
    fkEmpresa INT,
    CONSTRAINT fkUserEmpresa FOREIGN KEY (fkEmpresa)
        REFERENCES empresa (idEmpresa)
);

DESCRIBE usuario;

SELECT * FROM usuario;

/*-------------------------------------------------------------------------------------------- Criação da tabela setor --------------------------------------------------------------------------------------------------------------- */

CREATE TABLE setor (
    idSetor INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(45),
    fkEmpresa INT,
    CONSTRAINT fkSetorEmpresa FOREIGN KEY (fkEmpresa)
        REFERENCES empresa (idEmpresa)
);

DESCRIBE setor;

SELECT * FROM setor;

/*-------------------------------------------------------------------------------------------- Criação da tabela apiario --------------------------------------------------------------------------------------------------------------- */

CREATE TABLE apiario (
    idApiario INT PRIMARY KEY AUTO_INCREMENT,
    identificador_colonia VARCHAR(45),
    fkSetor INT,
    CONSTRAINT fkSetorSensor FOREIGN KEY (fkSetor)
        REFERENCES setor (idSetor)
);

DESCRIBE apiario;

SELECT * FROM apiario;

/*-------------------------------------------------------------------------------------------- Criação da tabela sensor --------------------------------------------------------------------------------------------------------------- */

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    numSerie VARCHAR(20),
    codInterno VARCHAR(20),
    statusSen VARCHAR(20),
    CONSTRAINT chkStatus CHECK (statusSen IN ('Ativo' , 'Inativo', 'Manutenção', 'Com problema')),
    fkApiario int,
    CONSTRAINT fkSensorApiario FOREIGN KEY (fkApiario)
		REFERENCES apiario(idApiario)
);

DESCRIBE sensor;

SELECT * FROM sensor;

/*-------------------------------------------------------------------------------------------- Criação da tabela leitura --------------------------------------------------------------------------------------------------------------- */

CREATE TABLE leitura (
    idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(3 , 1),
    dtLeitura DATETIME,
    alerta VARCHAR(45),
    fkSensor INT,
    CONSTRAINT fkLeituraSensor FOREIGN KEY (fkSensor)
        REFERENCES sensor (idSensor)
);

DESCRIBE leitura;
SELECT * FROM leitura;

/*-------------------------------------------------------------------------------------------- Criação da tabela Recomendação --------------------------------------------------------------------------------------------------------------- */

CREATE TABLE recomendacao(
idRecomendacao int primary key auto_increment,
recomendacao varchar(45)
);


DESCRIBE recomendacao;
SELECT * FROM recomendacao;

/*-------------------------------------------------------------------------------------------- Criação da tabela recomendação da Leitura --------------------------------------------------------------------------------------------------------------- */

CREATE TABLE recomendacaoLeitura(
fkLeitura int,
fkSensor int,
fkRecomendacao int,
dtRecomendacao datetime,
constraint chaveComposta primary key(fkLeitura, fkSensor,fkRecomendacao),
foreign key (fkLeitura) references leitura(idLeitura),
foreign key (fkSensor) references sensor(idSensor),
foreign key (fkRecomendacao) references recomendacao(idRecomendacao)
);

DESCRIBE recomendacaoLeitura;
SELECT * FROM recomendacaoLeitura;