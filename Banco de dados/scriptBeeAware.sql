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

INSERT INTO empresa (razaoSocial, fantasia, cnpj, telefone, email, cep, numero, complemento, statusAtividade)
VALUES
('ApisTech Soluções Apícolas LTDA', 'ApisTech', '12.345.678/0001-01', '(11)91234-5678', 'contato@apistech.com.br', '12345-678', 101, 'Sala 3', 1),
('Mel & Cia Tecnologia Apícola', 'Mel&Cia', '23.456.789/0001-02', '(11)93456-7890', 'suporte@melecia.com', '23456-789', 250, '', 1),
('BioBee Sistemas Inteligentes', 'BioBee', '34.567.890/0001-03', '(11)95678-9012', 'info@biobee.io', '34567-890', 30, 'Bloco A', 1),
('Colmeia Conectada S.A.', 'ColmeiaNet', '45.678.901/0001-04', '(11)97890-1234', 'contato@colmeianet.com', '45678-901', 500, 'Andar 2', 1),
('BeeGuard Segurança Apícola', 'BeeGuard', '56.789.012/0001-05', '(11)99012-3456', 'faleconosco@beeguard.com', '56789-012', 75, '', 1),
('Doce Dados Apícolas ME', 'DoceDados', '67.890.123/0001-06', '(11)90123-4567', 'contato@docedados.com.br', '67890-123', 10, 'Casa 1', 1),
('Harmonia da Colmeia Ltda', 'HarmoniaColmeia', '78.901.234/0001-07', '(11)91234-6789', 'suporte@harmoniacolmeia.com', '78901-234', 300, 'Fundos', 0),
('Buzz Inteligência Apícola', 'BuzzIA', '89.012.345/0001-08', '(11)92345-7890', 'contato@buzzia.com', '89012-345', 42, '', 1),
('NectarTech Soluções em Mel', 'NectarTech', '90.123.456/0001-09', '(11)93456-8901', 'vendas@nectartech.com', '90123-456', 88, 'Sala 1B', 1),
('BeeLink Conexões Naturais', 'BeeLink', '01.234.567/0001-10', '(11)94567-9012', 'contato@beelink.com', '01234-567', 60, '', 1),
('Hexágono Verde Tecnologia', 'HexVerde', '11.223.344/0001-11', '(11)95678-0123', 'info@hexverde.com', '11223-344', 404, 'Galpão', 0),
('Flor do Campo Digital', 'FlorCampo', '22.334.455/0001-12', '(11)96789-1234', 'atendimento@florcampo.com', '22334-455', 12, 'Loja 2', 1),
('Zangão Monitoramento Apícola', 'ZangãoMonitora', '33.445.566/0001-13', '(11)97890-2345', 'contato@zangaomonitora.com', '33445-566', 19, '', 1),
('Pólen e Bytes S.A.', 'PólenBytes', '44.556.677/0001-14', '(11)98901-3456', 'bytes@poleneb.com.br', '44556-677', 78, '3º andar', 1),
('EcoMel Sustentabilidade LTDA', 'EcoMel', '55.667.788/0001-15', '(11)99012-4567', 'eco@melverde.com', '55667-788', 23, 'Térreo', 1);

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

INSERT INTO usuario (nome, senha, cpf, email, cargo, fkEmpresa)
VALUES
('Lucas Almeida', 'J8@vN5l#zR', '103.472.918-54', 'lucasalmeida@gmail.com', 'gestor', 1),
('Marina Costa', 'M#92qvL!xp', '294.381.657-22', 'marinacosta@hotmail.com', 'técnico', 2),
('Rafael Souza', 'R@f33l!Xyz', '398.264.105-77', 'rafaelsouza@outlook.com', 'técnico', 3),
('Beatriz Lima', 'Bz!1rT7*kA', '458.193.746-81', 'bealima@gmail.com', 'gestor', 4),
('João Pereira', 'Jo@P9v!d1', '527.804.613-65', 'joaop@hotmail.com', 'técnico', 5),
('Ana Carolina', 'AnaC!74#xR', '612.307.589-10', 'anacarol@gmail.com', 'gestor', 6),
('Thiago Martins', 'Tm@98!vQz', '783.912.460-09', 'thiagom@outlook.com', 'técnico', 7),
('Fernanda Rocha', 'Fe#Rox!202', '843.206.719-30', 'ferrocha@hotmail.com', 'gestor', 8),
('Carlos Henrique', 'Ch!98@qWe', '910.234.688-77', 'carloshenrique@gmail.com', 'técnico', 9),
('Juliana Torres', 'JtR#2!lZx', '021.498.375-42', 'julianatorres@outlook.com', 'gestor', 10),
('Pedro Antunes', 'Pa!xT902#', '134.672.981-05', 'pedro.antunes@hotmail.com', 'técnico', 11),
('Larissa Nogueira', 'Ln*2024@w!', '278.913.604-88', 'larissanogueira@gmail.com', 'técnico', 12),
('Bruno Fernandes', 'Bf#xT3!89', '369.580.412-37', 'brunofernandes@outlook.com', 'gestor', 13),
('Natália Ribeiro', 'Nr@!21KZx', '412.793.065-70', 'nataliaribeiro@hotmail.com', 'técnico', 14),
('Igor Monteiro', 'Ig!Mo@89#', '557.402.189-94', 'igormonteiro@gmail.com', 'gestor', 15);

CREATE TABLE setor (
    idSetor INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(45),
    fkEmpresa INT,
    CONSTRAINT fkSetorEmpresa FOREIGN KEY (fkEmpresa)
        REFERENCES empresa (idEmpresa)
);

INSERT INTO setor (setor, fkEmpresa)
VALUES
-- Empresa 1 (3 setores)
('Setor 1', 1),
('Setor 2', 1),
('Setor 3', 1),

-- Empresa 2 (2 setores)
('Setor 1', 2),
('Setor 2', 2),

-- Empresa 3 (1 setor)
('Setor 1', 3),

-- Empresa 4 (3 setores)
('Setor 1', 4),
('Setor 2', 4),
('Setor 3', 4),

-- Empresa 5 (2 setores)
('Setor 1', 5),
('Setor 2', 5),

-- Empresa 6 (1 setor)
('Setor 1', 6),

-- Empresa 7 (2 setores)
('Setor 1', 7),
('Setor 2', 7),

-- Empresa 8 (1 setor)
('Setor 1', 8),

-- Empresa 9 (3 setores)
('Setor 1', 9),
('Setor 2', 9),
('Setor 3', 9),

-- Empresa 10 (1 setor)
('Setor 1', 10),

-- Empresa 11 (2 setores)
('Setor 1', 11),
('Setor 2', 11),

-- Empresa 12 (1 setor)
('Setor 1', 12),

-- Empresa 13 (1 setor)
('Setor 1', 13),

-- Empresa 14 (1 setor)
('Setor 1', 14),

-- Empresa 15 (1 setor)
('Setor 1', 15);

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

INSERT INTO sensor (numSerie, codInterno, statusSen) VALUES
();

CREATE TABLE apiario (
    idApiario INT PRIMARY KEY AUTO_INCREMENT,
    identificador VARCHAR(45),
    fkSetor INT,
    CONSTRAINT fkSetorSensor FOREIGN KEY (fkSetor)
        REFERENCES setor (idSetor)
);

INSERT INTO apiario (identificador, fkSensor, fkSetor) VALUES
();

CREATE TABLE leitura (
    idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(3 , 1),
    dtLeitura DATETIME,
    alerta VARCHAR(45),
    fkSensor INT,
    CONSTRAINT fkLeituraSensor FOREIGN KEY (fkSensor)
        REFERENCES sensor (idSensor)
);