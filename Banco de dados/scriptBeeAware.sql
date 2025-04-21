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
    CONSTRAINT chkStatus CHECK (statusSen IN ('Ativo' , 'Inativo', 'Manutenção', 'Com problema'))
);

INSERT INTO sensor (numSerie, codInterno, statusSen) VALUES
('SN2H2DUR', 'INTJ0H6VR', 'Inativo'),
('SNC4PN5R', 'INT6ULQMZ', 'Manutenção'),
('SN3CZ0W2', 'INT7427AV', 'Manutenção'),
('SNXRL796', 'INTDNDI46', 'Manutenção'),
('SNPY4JES', 'INTX5RUB3', 'Inativo'),
('SNWQYUQF', 'INT667HOP', 'Inativo'),
('SNEG4C7R', 'INTK5FFGD', 'Inativo'),
('SNZNT9TS', 'INTFUK79S', 'Ativo'),
('SNLQBE8L', 'INTRL7GU2', 'Ativo'),
('SNJOHUJ8', 'INT4ZUUAO', 'Inativo'),
('SNAJNLU2', 'INTIOJRPA', 'Com problema'),
('SNVXO3EO', 'INTF7538A', 'Ativo'),
('SNC11WW8', 'INTBK4A5Y', 'Inativo'),
('SNDPHL18', 'INTSFE0BK', 'Inativo'),
('SNDCZTR7', 'INTIRTY9Y', 'Ativo'),
('SNIK8PJ1', 'INTF1VR82', 'Com problema'),
('SNUXEA83', 'INTNX7J8E', 'Inativo'),
('SNEZOLO1', 'INT12UT9F', 'Manutenção'),
('SNN8OA5G', 'INT8I5J9A', 'Manutenção'),
('SN23UW43', 'INTS287V8', 'Com problema'),
('SN5DJ2VQ', 'INTF6S6QW', 'Com problema'),
('SNZWXT7U', 'INTO1OSSX', 'Ativo'),
('SNZJWLPH', 'INT20Y15K', 'Com problema'),
('SNEIVX2O', 'INTLH2BU4', 'Manutenção'),
('SN15BP97', 'INTIYFHR1', 'Manutenção'),
('SN5K5S5V', 'INTPEI2CJ', 'Ativo'),
('SN4QU1FU', 'INTLZ8TGM', 'Manutenção'),
('SNLRDWAK', 'INTAT78C4', 'Inativo'),
('SNXZD2MO', 'INTI7FXVV', 'Com problema'),
('SNCVYAAY', 'INTL0ZV9C', 'Com problema'),
('SNWB4W56', 'INT4PGYN4', 'Manutenção'),
('SNVBTJUV', 'INTCRTB4A', 'Manutenção'),
('SN1OXA3T', 'INTEJ7NOG', 'Manutenção'),
('SNQJ7EMF', 'INT78U0ZD', 'Inativo'),
('SNH17Z4W', 'INTNJ2TZO', 'Com problema'),
('SNSXROQ2', 'INTW60ZKN', 'Ativo'),
('SN8K8XI7', 'INTOONRVJ', 'Com problema'),
('SN0WEIL3', 'INTJIPWI6', 'Manutenção'),
('SNOXK6RD', 'INTL1KSK9', 'Inativo'),
('SNULANSG', 'INTF3TR83', 'Ativo'),
('SNB4PK2T', 'INTM3OPSB', 'Inativo'),
('SN1GW9AU', 'INT68PSSX', 'Manutenção'),
('SNRSFNAJ', 'INTFIAX5X', 'Manutenção'),
('SNIFABMG', 'INTL3SWWJ', 'Com problema'),
('SN0R6AUV', 'INT84FKZY', 'Inativo'),
('SN668K22', 'INTUDWAGD', 'Inativo'),
('SN44K5XY', 'INTXDOIIX', 'Ativo'),
('SNUTK3K4', 'INT8QHXNV', 'Inativo'),
('SNXPNK60', 'INTXH7LMP', 'Com problema'),
('SNIQFCHE', 'INTXC9R8P', 'Ativo'),
('SNLYEX8V', 'INTNAHJCK', 'Inativo'),
('SN3EN36H', 'INT6R9QUT', 'Inativo'),
('SNL9M88U', 'INTRMSA0G', 'Inativo'),
('SNM2UVT0', 'INTX7G0PC', 'Inativo'),
('SN1MZFP1', 'INT74QY92', 'Com problema'),
('SN6NCXRR', 'INT7KOARA', 'Manutenção'),
('SNJB1FI6', 'INTO6JQAE', 'Ativo'),
('SNZ6NAXQ', 'INTX91JPB', 'Ativo'),
('SN1AM9JS', 'INTQ3AVPW', 'Ativo'),
('SN1K7LOR', 'INTCPMUSU', 'Manutenção'),
('SN1Z1JEM', 'INT1EBHDE', 'Com problema'),
('SNS1AMJQ', 'INTIWS14O', 'Com problema'),
('SNZS74DR', 'INT6WN51P', 'Ativo'),
('SNGE958N', 'INT8P651F', 'Ativo'),
('SN4ETGOE', 'INT9GCWDF', 'Com problema'),
('SN04LJLM', 'INTN4TELE', 'Com problema'),
('SN3C7N6Z', 'INTBVN422', 'Ativo'),
('SNKTTJ3S', 'INTIXEZVZ', 'Ativo'),
('SNVU3UMU', 'INT86QNU4', 'Ativo'),
('SNTWY5NY', 'INTOVVU08', 'Inativo'),
('SNOIJC0R', 'INTSKPG0N', 'Ativo'),
('SN34BQ0O', 'INTDGVGO9', 'Manutenção'),
('SNJM5VVV', 'INTOPLL1W', 'Inativo'),
('SN0GC6WD', 'INTNADY1F', 'Com problema'),
('SNJTZGPP', 'INTIYX0N4', 'Com problema'),
('SNPKH9Y0', 'INT4H6CVD', 'Ativo'),
('SNZCY9EU', 'INTZHJ27P', 'Ativo'),
('SNNPAVZR', 'INTNC0PGW', 'Com problema'),
('SNHK0GZB', 'INTNTLM2O', 'Ativo'),
('SN2WQG2J', 'INTKOMYBC', 'Inativo'),
('SNFRUCIG', 'INTD6XLRN', 'Com problema'),
('SNQHLB0M', 'INTNBNYNR', 'Ativo'),
('SNKLODLA', 'INTSDIQLH', 'Manutenção'),
('SNWPOM3M', 'INT2RVSXC', 'Inativo'),
('SNI7UW5D', 'INT39Y2QV', 'Ativo'),
('SN124G38', 'INT48Z27I', 'Ativo'),
('SN90HDWY', 'INT1IX8NH', 'Manutenção'),
('SNZIAYAE', 'INTGG2UGD', 'Inativo'),
('SNWPM624', 'INTI0P8ZA', 'Manutenção'),
('SNH3E9N7', 'INTB8DZU8', 'Inativo'),
('SNNN67JU', 'INT7U3VXN', 'Com problema'),
('SNBSACYO', 'INTICRDM1', 'Manutenção'),
('SNYJVYUS', 'INT87VM8Z', 'Inativo'),
('SNRBEE7T', 'INTK9I17D', 'Inativo'),
('SN4ASGHA', 'INT4M0DB7', 'Inativo'),
('SNC4IJNA', 'INTD8CDR1', 'Manutenção'),
('SNBZ7NKE', 'INTKYXZB1', 'Inativo'),
('SND8RN9U', 'INTQJOW8A', 'Ativo'),
('SNDYNVLR', 'INTY69VRJ', 'Inativo'),
('SNOEREKK', 'INTZ8QOKE', 'Com problema');

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

INSERT INTO apiario (identificador, fkSensor, fkSetor) VALUES
-- Empresa 1 (3 setores)
('APIARIO1', 1, 1),
('APIARIO2', 2, 1),
('APIARIO3', 3, 1),
('APIARIO4', 4, 1),

('APIARIO1', 5, 2),
('APIARIO2', 6, 2),
('APIARIO3', 7, 2),
('APIARIO4', 8, 2),

('APIARIO1', 9, 3),
('APIARIO2', 10, 3),
('APIARIO3', 11, 3),
('APIARIO4', 12, 3),

-- Empresa 2 (2 setores)
('APIARIO1', 13, 4),
('APIARIO2', 14, 4),
('APIARIO3', 15, 4),
('APIARIO4', 16, 4),

('APIARIO1', 17, 5),
('APIARIO2', 18, 5),
('APIARIO3', 19, 5),
('APIARIO4', 20, 5),

-- Empresa 3 (1 setor)
('APIARIO1', 21, 6),
('APIARIO2', 22, 6),
('APIARIO3', 23, 6),
('APIARIO4', 24, 6),

-- Empresa 4 (3 setores)
('APIARIO1', 25, 7),
('APIARIO2', 26, 7),
('APIARIO3', 27, 7),
('APIARIO4', 28, 7),

('APIARIO1', 29, 8),
('APIARIO2', 30, 8),
('APIARIO3', 31, 8),
('APIARIO4', 32, 8),

('APIARIO1', 33, 9),
('APIARIO2', 34, 9),
('APIARIO3', 35, 9),
('APIARIO4', 36, 9),

-- Empresa 5 (2 setores)
('APIARIO1', 37, 10),
('APIARIO2', 38, 10),
('APIARIO3', 39, 10),
('APIARIO4', 40, 10),

('APIARIO1', 41, 11),
('APIARIO2', 42, 11),
('APIARIO3', 43, 11),
('APIARIO4', 44, 11),

-- Empresa 6 (1 setor)
('APIARIO1', 45, 12),
('APIARIO2', 46, 12),
('APIARIO3', 47, 12),
('APIARIO4', 48, 12),

-- Empresa 7 (2 setores)
('APIARIO1', 49, 13),
('APIARIO2', 50, 13),
('APIARIO3', 51, 13),
('APIARIO4', 52, 13),

('APIARIO1', 53, 14),
('APIARIO2', 54, 14),
('APIARIO3', 55, 14),
('APIARIO4', 56, 14),

-- Empresa 8 (1 setor)
('APIARIO1', 57, 15),
('APIARIO2', 58, 15),
('APIARIO3', 59, 15),
('APIARIO4', 60, 15),

-- Empresa 9 (3 setores)
('APIARIO1', 61, 16),
('APIARIO2', 62, 16),
('APIARIO3', 63, 16),
('APIARIO4', 64, 16),

('APIARIO1', 65, 17),
('APIARIO2', 66, 17),
('APIARIO3', 67, 17),
('APIARIO4', 68, 17),

('APIARIO1', 69, 18),
('APIARIO2', 70, 18),
('APIARIO3', 71, 18),
('APIARIO4', 72, 18),

-- Empresa 10 (1 setor)
('APIARIO1', 73, 19),
('APIARIO2', 74, 19),
('APIARIO3', 75, 19),
('APIARIO4', 76, 19),

-- Empresa 11 (2 setores)
('APIARIO1', 77, 20),
('APIARIO2', 78, 20),
('APIARIO3', 79, 20),
('APIARIO4', 80, 20),

('APIARIO1', 81, 21),
('APIARIO2', 82, 21),
('APIARIO3', 83, 21),
('APIARIO4', 84, 21),

-- Empresa 12 (1 setor)
('APIARIO1', 85, 22),
('APIARIO2', 86, 22),
('APIARIO3', 87, 22),
('APIARIO4', 88, 22),

-- Empresa 13 (1 setor)
('APIARIO1', 89, 23),
('APIARIO2', 90, 23),
('APIARIO3', 91, 23),
('APIARIO4', 92, 23),

-- Empresa 14 (1 setor)
('APIARIO1', 93, 24),
('APIARIO2', 94, 24),
('APIARIO3', 95, 24),
('APIARIO4', 96, 24),

-- Empresa 15 (1 setor)
('APIARIO1', 97, 25),
('APIARIO2', 98, 25),
('APIARIO3', 99, 25),
('APIARIO4', 100, 25);

CREATE TABLE leitura (
    idLeitura INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(3 , 1),
    dtLeitura DATETIME,
    alerta VARCHAR(45),
    fkSensor INT,
    CONSTRAINT fkLeituraSensor FOREIGN KEY (fkSensor)
        REFERENCES sensor (idSensor)
);