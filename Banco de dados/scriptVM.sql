use BeeAware;

show tables;

/*-------------------------------------------------------------------------------------------- Criação da tabela empresa --------------------------------------------------------------------------------------------------------------- */
-- Criação da tabela empresa, onde serão amazenados os dados de cada empresa.

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
-- Criação da tabela usuário, onde serão armazenados os dados de acesso.


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
-- Criação da tabela setor, onde serão armazenados dos dados de cada setor, relacionados com a sua respectiva empresa. 

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
-- Criação da tabela apiário, onde serão armazenados os dados de identificação de cada apiário, relacionados com o setor em que estão localizados.

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
-- Criação da tabela sensor, onde serão armazenados os dados coletados por cada sensor, seu status de funcionamento e o apiário em que está instalado.

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
-- Criação da tabela leitura, onde serão armazenados os dados das leituras feitas pelo sensor, e qual sensor fez a leitura.

CREATE TABLE leitura (
    idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(3 , 1),
    dtLeitura DATETIME,
    fkSensor INT,
    CONSTRAINT fkLeituraSensor FOREIGN KEY (fkSensor)
        REFERENCES sensor (idSensor)
);

DESCRIBE leitura;

SELECT * FROM leitura;

/*-------------------------------------------------------------------------------------------- Criação da tabela Recomendação --------------------------------------------------------------------------------------------------------------- */
-- Criação da tabela recomendação, onde serão armazenados os dados das recomendações geradas pelo sistema.

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

/*-------------------------------------------------------------------------------------------- Alimentação das tabelas criadas para testes --------------------------------------------------------------------------------------------------------------- */
-- Criação de inserts fictícios para fins de testes.

INSERT INTO empresa (nome, cnpj, telefone, email, cep, numero, complemento)
VALUES 
('ApisTech Soluções', '12.345.678/0001-99', '(11)91234-5678', 'contato@apistech.com', '09210-080', 123, 'Sala 101'),
('Mel Puro Ltda', '98.765.432/0001-88', '(11)99876-5432', 'suporte@melpuro.com.br', '04567-230', 456, 'Galpão 2');

INSERT INTO usuario (nome, senha, cpf, email, cargo, fkEmpresa)
VALUES 
('João da Silva', 'senha123', '123.456.789-00', 'joao@apistech.com', 'admin', 1),
('Ana Beatriz', 'senha456', '987.654.321-00', 'ana@melpuro.com.br', 'tecnico', 2);

INSERT INTO setor (setor, fkEmpresa)
VALUES 
('Controle de Colmeias', 1),
('Manutenção de Equipamentos', 1),
('Monitoramento de Temperatura', 2);

INSERT INTO apiario (identificador_colonia, fkSetor)
VALUES 
('COL-A01', 1),
('COL-A02', 1),
('COL-M01', 3);

INSERT INTO sensor (numSerie, codInterno, statusSen, fkApiario)
VALUES 
('SN123456', 'INT001', 'Ativo', 1),
('SN123457', 'INT002', 'Manutenção', 1),
('SN987654', 'INT003', 'Inativo', 2),
('SN321000', 'INT004', 'Com problema', 3);