-- CRIAÇÃO DO BANCO DE DADOS
CREATE DATABASE ProjetoBeeAware;

-- USO DO BANCO DE DADOS
USE ProjetoBeeAware;

-- TABELA CADASTRO DE USUÁRIO
CREATE TABLE Cadastro (
    idFunc INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(60) NOT NULL,
    Empresa VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Tipo_Usuario VARCHAR(15) NOT NULL,
    CONSTRAINT chkTipo CHECK(Tipo_Usuario IN ('admin', 'apicultor')),
    Senha CHAR(20) NOT NULL
);

-- MODIFICAÇÃO DO TAMANHO DA SENHA 
ALTER TABLE Cadastro MODIFY COLUMN Senha VARCHAR(25) NOT NULL; 

-- INSERÇÃO DE DADOS NA TABELA CADASTRO
INSERT INTO Cadastro (Nome, Empresa, Email, Tipo_Usuario, Senha) VALUES
    ('Carlinhos', 'Bee Tech', 'joao.carlos@gmail.com', 'apicultor', '01234567'),
    ('Mariana Silva', 'Bee Tech', 'mariana.silva@gmail.com', 'apicultor', '87654321'),
    ('Roberto Lima', 'Bee Hive', 'roberto.lima@gmail.com', 'apicultor', 'abcdef12');

-- EXIBIÇÃO DA ESTRUTURA DA TABELA CADASTRO
DESC Cadastro;

-- SELEÇÃO NA TABELA CADASTRO POR ORDEM CRESCENTE
SELECT * FROM Cadastro ORDER BY Nome ASC;

-- SELEÇÃO NA TABELA CADASTRO POR NOME DO USUÁRIO DA EMPRESA 'BEE TECH'
SELECT Nome FROM Cadastro WHERE Empresa = 'Bee Tech';

-- SELEÇÃO NA TABELA CADASTRO POR NOME QUE COMEÇA COM 'R'
SELECT * FROM Cadastro WHERE Nome LIKE 'R%';

-- REMOÇÃO DE UM USUÁRIO ESPECÍFICO
DELETE FROM Cadastro WHERE Email = 'roberto.lima@gmail.com'; 

-- USO DE IFNULL PARA EVITAR VALORES NULOS
SELECT Nome, IFNULL(Empresa, 'Empresa não informada') AS Empresa FROM Cadastro; 

-- USO DE CASE PARA CLASSIFICAR O TIPO DE USUÁRIO
SELECT Nome, Tipo_Usuario,
    CASE 
        WHEN Tipo_Usuario = 'admin' THEN 'Administrador'
        ELSE 'Apicultor'
    END AS Tipo_Descricao
FROM Cadastro; 

-- CONCATENANDO NOME E EMPRESA
SELECT CONCAT(Nome, ' - ', Empresa) AS Nome_Empresa FROM Cadastro; 

-- TABELA EMPRESA
CREATE TABLE Empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    Nome_Empresa VARCHAR(60) NOT NULL,
    Email VARCHAR(40) UNIQUE,
    CNPJ CHAR(18) UNIQUE NOT NULL,
    Endereco VARCHAR(100) NOT NULL,
    Telefone_Empresa CHAR(15) UNIQUE,
    Senha CHAR(20) NOT NULL,
    Data_Criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- MODIFICAÇÃO DO TAMANHO DA COLUNA TELEFONE PARA ACEITAR MAIS DÍGITOS
ALTER TABLE Empresa MODIFY COLUMN Telefone_Empresa CHAR(20); 

-- INSERÇÃO DE DADOS NA TABELA EMPRESA
INSERT INTO Empresa (Nome_Empresa, Email, CNPJ, Endereco, Telefone_Empresa, Senha ) VALUES
    ('Bee Tech', 'beetech@gmail.com', '62.173.620/0001-80', 'Rua das Abelhas, 123', '12345678', '6867578h'),
    ('Bee Hive', 'beehive@gmail.com', '45.987.321/0001-65', 'Avenida do Mel, 456', '87654321', 'hfhvgffgfd'),
    ('Honey Corp', 'honeycorp@gmail.com', '89.654.123/0001-99', 'Travessa do Néctar, 789', '99887766', '1255798');

-- EXIBIÇÃO DA ESTRUTURA DA TABELA EMPRESA
DESC Empresa; 

-- -- ORDENA AS EMPRESAS EM ORDEM DECRESCENTE
SELECT * FROM Empresa ORDER BY Nome_Empresa DESC; 

-- EXCLUSÃO DE UMA EMPRESA ESPECÍFICA
DELETE FROM Empresa WHERE idEmpresa = 1;

-- USO DE IFNULL PARA EVITAR VALORES NULOS
SELECT Nome_Empresa, IFNULL(Telefone_Empresa, 'Sem telefone cadastrado') FROM Empresa;

-- CONCATENANDO NOME DA EMPRESA E CNPJ
SELECT CONCAT(Nome_Empresa, ' - ', CNPJ) AS Empresa_CNPJ FROM Empresa; 

-- TABELA SENSOR
CREATE TABLE Sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(20) UNIQUE NOT NULL,
    DTmanutencao DATETIME,
    DTinstalacao DATE,
    Statussensor VARCHAR(30),
    Temperatura DECIMAL(4,2),
    Descricao_Manutencao VARCHAR(200),  
    Responsavel_Manutencao VARCHAR(100),
    CONSTRAINT chkStatus CHECK (Statussensor IN ('Ativo', 'Inativo', 'Manutenção'))
);

-- INSERÇÃO DE DADOS NA TABELA SENSOR
INSERT INTO Sensor (Nome, DTmanutencao, DTinstalacao, Statussensor, Temperatura, Descricao_Manutencao, Responsavel_Manutencao) VALUES
    ('Colmeia 12', '2025-02-24 18:00:00', '2024-02-25', 'Ativo', 25.00, 'Manutenção preventiva realizada.', 'Carlos Silva'),
    ('Colmeia 13', '2025-02-24 18:10:00', '2024-03-10', 'Inativo', 22.50, 'Falha detectada no sensor.', 'Mariana Lima'),
    ('Colmeia 14', '2025-02-24 18:20:00', '2024-04-15', 'Ativo', 26.80, 'Substituição de bateria.', 'Roberto Lima');

-- MODIFICAÇÃO PARA PERMITIR NULOS NA DATA DE MANUTENÇÃO
ALTER TABLE Sensor MODIFY COLUMN DTmanutencao DATETIME; 

-- EXIBIÇÃO DA ESTRUTURA DA TABELA SENSOR
DESC Sensor;

-- ORDENA POR DATA DE INSTALAÇÃO CRESCENTE
SELECT * FROM Sensor ORDER BY DTinstalacao ASC; 

-- REMOÇÃO DE UM SENSOR ESPECÍFICO
DELETE FROM Sensor WHERE Nome = 'Colmeia 13'; 

-- USO DE IFNULL PARA SUBSTITUIR VALORES NULOS
SELECT Nome, IFNULL(Descricao_Manutencao, 'Sem manutenção registrada') AS 'Manutenção' FROM Sensor; 

-- CONCATENANDO NOME DO SENSOR E STATUS
SELECT CONCAT(Nome, ' - ', Statussensor) AS Sensor_Status FROM Sensor; 

-- TABELA COLMEIA
CREATE TABLE Colmeia (
    idColmeia INT PRIMARY KEY AUTO_INCREMENT,
    Nome_Colmeia VARCHAR(100) UNIQUE NOT NULL,
    OBS_Descricao VARCHAR(200),
    Producao_mel DECIMAL(6,2) NOT NULL,
    TemperaturaColmeia DECIMAL(4,2) NOT NULL,
    DTconsulta DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- INSERÇÃO DE DADOS NA TABELA COLMEIA
INSERT INTO Colmeia (Nome_Colmeia, OBS_Descricao, Producao_mel, TemperaturaColmeia, DTconsulta) VALUES
    ('Colmeia 1', 'Colmeia bem ativa, produção acima da média.', 12.50, 34.20, '2025-02-24 18:00:00'),
    ('Colmeia 2', 'Produção reduzida, possível infestação de ácaros.', 8.75, 32.50, '2025-02-24 18:15:00'),
    ('Colmeia 3', 'Colmeia nova, ainda em fase de adaptação.', 5.30, 33.00, '2025-02-24 18:30:00');

-- EXIBIÇÃO DA ESTRUTURA DA TABELA COLMEIA
DESC Colmeia;

-- ORDENAÇÃO POR PRODUÇÃO DE MEL EM ORDEM DECRESCENTE
SELECT * FROM Colmeia ORDER BY Producao_mel DESC; 

-- EXCLUSÃO DE UMA COLMEIA ESPECÍFICA
DELETE FROM Colmeia WHERE Nome_Colmeia = 'Colmeia 2'; 

-- USO DE IFNULL PARA SUBSTITUIR VALORES NULOS
SELECT Nome_Colmeia, IFNULL(OBS_Descricao, 'Sem observações') FROM Colmeia; 

-- CONCATENANDO NOME DA COLMEIA E PRODUÇÃO
SELECT CONCAT(Nome_Colmeia, ' - ', Producao_mel, 'kg') AS Colmeia_Producao FROM Colmeia; 

-- TABELAS FEITAS FUTURAMENTE

CREATE TABLE Medicao_Temperatura (
    id_medicao INT PRIMARY KEY AUTO_INCREMENT,
    id_colmeia INT, 
    id_sensor INT, 
    temperatura DECIMAL(5,2) NOT NULL,  
    data_medicao DATETIME DEFAULT CURRENT_TIMESTAMP 
); -- NECESSITARÁ DE CHAVE ESTRANGEIRA

CREATE TABLE Producao_Mel (
    id_producao INT PRIMARY KEY AUTO_INCREMENT,
    id_colmeia INT,  -- PARA SABER A COLMEIA QUE PRODUZIU O MEL
    quantidade_kg DECIMAL(6,2) NOT NULL,  
    data_coleta DATE NOT NULL  -- PARA SABER QUANDO FOI COLETADO 
); -- NECESSITARÁ DE CHAVE ESTRANGEIRA


