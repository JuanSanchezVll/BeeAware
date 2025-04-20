CREATE DATABASE BeeAware;
USE BeeAware;

CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    razaoSocial VARCHAR(255),
    fantasia VARCHAR(255),
    cnpj VARCHAR(18),
    telefone VARCHAR(14),
    email VARCHAR(80),
    cep CHAR(9),
    numero INT,
    complemento VARCHAR(255),
    statusAtividade TINYINT
);

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

CREATE TABLE setor (
    idSetor INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(45),
    fkEmpresa INT,
    CONSTRAINT fkSetorEmpresa FOREIGN KEY (fkEmpresa)
        REFERENCES empresa (idEmpresa)
);

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    numSerie VARCHAR(20),
    codInterno VARCHAR(20),
    statusSen VARCHAR(20),
    CONSTRAINT chkStatus CHECK (statusSen IN ('Ativo' , 'Inativo', 'Manutenção', 'Com problema'))
);

CREATE TABLE apiario (
    idApiario INT PRIMARY KEY AUTO_INCREMENT,
    identificador VARCHAR(45),
    fkSensor INT,
    CONSTRAINT fkApiarioSensor FOREIGN KEY (fkSensor)
        REFERENCES sensor (idSensor),
    fkSetor INT,
    CONSTRAINT fkSetorSensor FOREIGN KEY (fkSetor)
        REFERENCES setor (idSetor)
);

CREATE TABLE leitura (
    idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(3 , 1),
    dtLeitura DATETIME,
    alerta VARCHAR(45),
    fkSensor INT,
    CONSTRAINT fkLeituraSensor FOREIGN KEY (fkSensor)
        REFERENCES sensor (idSensor)
);