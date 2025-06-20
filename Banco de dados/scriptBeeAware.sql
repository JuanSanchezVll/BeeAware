CREATE DATABASE BeeAware;

USE BeeAware;

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
    complemento VARCHAR(255) not null,
	senha VARCHAR(100) not null 
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
-- Criação da tabela auxiliar da tabela leitura, onde serão armazenados os dados para identificação da recomendação para cada sensor.

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

select * from leitura;
select * from apiario;
select * from sensor;
select * from setor;
SELECT * FROM recomendacaoLeitura order by fkLeitura ;


INSERT INTO empresa (nome, cnpj, telefone, email, cep, numero, complemento, senha) VALUES
('BeeTech', '12.345.678/0001-01', '(11)90000-0001', 'beetech@empresa.com', '01000-000', 10, 'Sala 1', 'senha1'),
('MelPuro', '12.345.678/0001-02', '(11)90000-0002', 'melpuro@empresa.com', '01000-001', 20, 'Sala 2', 'senha2'),
('DoceVida', '12.345.678/0001-03', '(11)90000-0003', 'docevida@empresa.com', '01000-002', 30, 'Sala 3', 'senha3'),
('ApisMel', '12.345.678/0001-04', '(11)90000-0004', 'apismel@empresa.com', '01000-003', 40, 'Sala 4', 'senha4'),
('FlorMel', '12.345.678/0001-05', '(11)90000-0005', 'flormel@empresa.com', '01000-004', 50, 'Sala 5', 'senha5'),
('PuraDoçura', '12.345.678/0001-06', '(11)90000-0006', 'puradocura@empresa.com', '01000-005', 60, 'Sala 6', 'senha6'),
('MelNatural', '12.345.678/0001-07', '(11)90000-0007', 'melnatural@empresa.com', '01000-006', 70, 'Sala 7', 'senha7'),
('ReiMel', '12.345.678/0001-08', '(11)90000-0008', 'reimel@empresa.com', '01000-007', 80, 'Sala 8', 'senha8'),
('AbelhaRainha', '12.345.678/0001-09', '(11)90000-0009', 'abelharainha@empresa.com', '01000-008', 90, 'Sala 9', 'senha9'),
('ColmeiaDourada', '12.345.678/0001-10', '(11)90000-0010', 'colmeiadourada@empresa.com', '01000-009', 100, 'Sala 10', 'senha10');

INSERT INTO usuario (nome, senha, cpf, email, cargo, fkEmpresa) VALUES
('Ana Silva', 'senhaAna', '000.000.001-01', 'ana@beetech.com', 'Gerente', 1),
('Carlos Souza', 'senhaCarlos', '000.000.002-02', 'carlos@melpuro.com', 'Técnico', 2),
('Beatriz Ramos', 'senhaBea', '000.000.003-03', 'beatriz@docevida.com', 'Analista', 3),
('Daniel Costa', 'senhaDan', '000.000.004-04', 'daniel@apismel.com', 'Gerente', 4),
('Elisa Martins', 'senhaEli', '000.000.005-05', 'elisa@flormel.com', 'Super', 5),
('Felipe Alves', 'senhaFelipe', '000.000.006-06', 'felipe@puradocura.com', 'Anali', 6),
('Gabriela Rocha', 'senhaGabi', '000.000.007-07', 'gabriela@melnatural.com', 'Técca', 7),
('Henrique Lima', 'senhaHenrique', '000.000.008-08', 'henrique@reimel.com', 'Gere', 8),
('Isabela Nunes', 'senhaIsabela', '000.000.009-09', 'isabela@abelharainha.com', 'Anal', 9),
('João Pedro', 'senhaJoao', '000.000.010-10', 'joao@colmeiadourada.com', 'Super', 10);

INSERT INTO setor (setor, fkEmpresa) VALUES
('Setor 1', 2),
('Setor 2', 2);

INSERT INTO apiario (identificador_colonia, fkSetor) VALUES
('Colônia A', 1),
('Colônia B', 1),
('Colônia C', 2);

select * from apiario;

INSERT INTO sensor (numSerie, codInterno, statusSen, fkApiario) VALUES
('SN-001', 'INT-001', 'Ativo', 1),
('SN-002', 'INT-002', 'Ativo', 2),
('SN-003', 'INT-003', 'Ativo', 3),
('SN-005', 'INT-005', 'Inativo', 4);

INSERT INTO recomendacao(recomendacao) values
('Nenhuma'),
('Atenção'),
('Cuidado');