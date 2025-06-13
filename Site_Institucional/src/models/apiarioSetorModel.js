var database = require("../database/config")

// Campo do banco de dados
function carregarApiarioEmpresa(idUsuario) {
    var instrucaoSql = `
SELECT 
    e.idEmpresa,
    st.setor,
    a.idApiario,
    a.identificador_colonia,
	se.statusSen,
    se.numSerie
FROM empresa e
JOIN setor st ON st.fkEmpresa = e.idEmpresa
JOIN apiario a ON a.fkSetor = st.idSetor
JOIN sensor se ON se.fkApiario = a.idApiario
where e.idEmpresa = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

function carregarApiarioEmpresaTemperatura(idUsuario) {
    var instrucaoSql = `
SELECT 
    e.idEmpresa,
	a.idApiario,
    l.temperatura,
    	se.statusSen,
    DATE_FORMAT(l.dtLeitura, '%Y-%m-%d %H:%i') as dataLeitura
FROM empresa e
JOIN setor st ON st.fkEmpresa = e.idEmpresa
JOIN apiario a ON a.fkSetor = st.idSetor
JOIN sensor se ON se.fkApiario = a.idApiario
JOIN leitura l ON l.fkSensor = se.idSensor where e.idEmpresa = ${idUsuario}
order by l.dtLeitura desc  limit 3 ;
    `;

    return database.executar(instrucaoSql);
}

function apiarioAtivos(idUsuario) {
    var instrucaoSql = `
select count(*) as total , (select count(*) from sensor join apiario on fkApiario = idApiario
join setor on fkSetor =  idSetor where fkEmpresa = ${idUsuario} and statusSen = 'Ativo' ) as ativos from sensor join apiario on fkApiario = idApiario
join setor on fkSetor =  idSetor where fkEmpresa = ${idUsuario};
 ;
    `;

    return database.executar(instrucaoSql);
}
function puxarHistorico(apiario) {
    var instrucaoSql = `
    SELECT
    temperatura,
    date_format(dtleitura, "%d/%m/%Y - %h:%i") as dataAlerta,
    CASE
        WHEN temperatura > 36 THEN 'Temperatura elevada'
        when temperatura < 32 then 'Temperatura abaixo do ideal'
    END   as resultado 
FROM leitura
WHERE (temperatura > 36 OR temperatura < 32) AND fkSensor = ${apiario} order by  dtleitura desc limit 20;
    ;
    `;

    return database.executar(instrucaoSql);
}

function carregarApiarioEmpresaAlerta(idUsuario) {
    var instrucaoSql = `
    SELECT 
    DATE_FORMAT(l.dtLeitura, '%d-%m-%Y %H:%i') AS data_formatada,
    l.temperatura,
    r.recomendacao,
    a.identificador_colonia AS apiario
FROM leitura l
JOIN recomendacaoLeitura rl ON rl.fkLeitura = l.idLeitura AND rl.fkSensor = l.fkSensor
JOIN recomendacao r ON r.idRecomendacao = rl.fkRecomendacao
JOIN sensor s ON s.idSensor = l.fkSensor
JOIN apiario a ON a.idApiario = s.fkApiario
JOIN setor st ON st.idSetor = a.fkSetor
JOIN empresa e ON e.idEmpresa = st.fkEmpresa
WHERE e.idEmpresa = ${idUsuario} and rl.fkRecomendacao = 2 or rl.fkRecomendacao = 3
ORDER BY l.dtLeitura DESC
limit 100;

`;

    return database.executar(instrucaoSql);
}

function carregarAlertaSetor(idUsuario) {
    var instrucaoSql = `
select 
st.fkEmpresa as idEmpresa,
count(rl.fkleitura) as TotalAlertas,
date_format(rl.dtRecomendacao, '%d-%m-%Y') as dtRecomendacao
from recomendacaoLeitura rl join leitura l
on rl.fkLeitura = l.idLeitura
join sensor s
on l.fkSensor = s.idSensor
join apiario a
on s.fkApiario = a.idApiario
join setor st
on a.fkSetor = st.idSetor
where (rl.fkRecomendacao = 2 or rl.fkRecomendacao = 3)
group by date_format(rl.dtRecomendacao, '%d-%m-%Y'), st.fkEmpresa 
having st.fkEmpresa = ${idUsuario}
order by date_format(rl.dtRecomendacao, '%d-%m-%Y') desc limit 15;

`;

    return database.executar(instrucaoSql);
}

function carregarAlertaDiario(idUsuario) {
    var instrucaoSql = `
select 
st.fkEmpresa as idEmpresa,
count(rl.fkleitura) as TotalAlertas,
date_format(rl.dtRecomendacao, '%Y-%m') 
from recomendacaoLeitura rl join leitura l
on rl.fkLeitura = l.idLeitura
join sensor s
on l.fkSensor = s.idSensor
join apiario a
on s.fkApiario = a.idApiario
join setor st
on a.fkSetor = st.idSetor
where (rl.fkRecomendacao = 2 or rl.fkRecomendacao = 3)
group by date_format(rl.dtRecomendacao, '%Y-%m'), st.fkEmpresa 
having st.fkEmpresa = ${idUsuario}
order by st.fkEmpresa desc limit 15;

`;

    return database.executar(instrucaoSql);
}

function carregarAlertaMensal(idUsuario) {
    var instrucaoSql = `
select 
st.fkEmpresa as idEmpresa,
count(rl.fkleitura) as TotalAlertas,
date_format(rl.dtRecomendacao, '%Y-%m') 
from recomendacaoLeitura rl join leitura l
on rl.fkLeitura = l.idLeitura
join sensor s
on l.fkSensor = s.idSensor
join apiario a
on s.fkApiario = a.idApiario
join setor st
on a.fkSetor = st.idSetor
where (rl.fkRecomendacao = 2 or rl.fkRecomendacao = 3)
group by date_format(rl.dtRecomendacao, '%Y-%m'), st.fkEmpresa 
having st.fkEmpresa = ${idUsuario}
order by st.fkEmpresa desc limit 15;

`;

    return database.executar(instrucaoSql);
}



function TemperturaAtualApiario(idUsuario, idApiario) {
    var instrucaoSql = `
        SELECT l.temperatura,
		date_format(l.dtLeitura, "%H:%i") as dtLeitura
        FROM leitura l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN apiario a ON s.fkApiario = a.idApiario
        JOIN setor st ON a.fkSetor = st.idSetor
        JOIN empresa e ON st.fkEmpresa = e.idEmpresa
        JOIN usuario u ON e.idEmpresa = u.fkEmpresa
        where e.idEmpresa =  ${idUsuario} AND ${idApiario}
        ORDER BY l.dtLeitura DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);
}

function TemperturaMediaApiario(idUsuario, idApiario) {
    var instrucaoSql = `
        select ROUND(AVG(l.temperatura), 2) AS 'mediaTemperatura'
FROM leitura l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN apiario a ON s.fkApiario = a.idApiario
        JOIN setor st ON a.fkSetor = st.idSetor
        JOIN empresa e ON st.fkEmpresa = e.idEmpresa
        JOIN usuario u ON e.idEmpresa = u.fkEmpresa
        where e.idEmpresa = ${idUsuario} AND s.fkApiario = ${idApiario}
        AND l.dtLeitura >= NOW() - INTERVAL 1 DAY;
    `;

    return database.executar(instrucaoSql);
}


function TotalAlertas(idApiario) {
    var instrucaoSql = `
SELECT
count(*) as dtLeitura
FROM leitura
WHERE (temperatura > 36 OR temperatura < 32) 
AND fkSensor = ${idApiario} and 
dtLeitura >= now() - INTERVAL 1 DAY;
    `;

    return database.executar(instrucaoSql);
}


function HistoricoTemperatura(idUsuario, idApiario) {
    var instrucaoSql = `
        SELECT 
	DATE_FORMAT(l.dtLeitura, '%H:00') AS hora,
	ROUND(AVG(l.temperatura), 2) AS temperaturaMedia
FROM leitura l
        JOIN sensor s ON l.fkSensor = s.idSensor
        JOIN apiario a ON s.fkApiario = a.idApiario
        JOIN setor st ON a.fkSetor = st.idSetor
        JOIN empresa e ON st.fkEmpresa = e.idEmpresa
        JOIN usuario u ON e.idEmpresa = u.fkEmpresa
        where e.idEmpresa = ${idUsuario} AND s.fkApiario = ${idApiario}
          AND l.dtLeitura >= NOW() - INTERVAL 1 DAY
        GROUP BY hora
        ORDER BY hora DESC;
    `;

    return database.executar(instrucaoSql);
}









module.exports = {
    carregarApiarioEmpresa,
    carregarApiarioEmpresaTemperatura,
    carregarApiarioEmpresaAlerta,
    carregarAlertaDiario,
    carregarAlertaSetor,
    carregarAlertaMensal,
    apiarioAtivos,
    puxarHistorico,
    TemperturaAtualApiario,
    TemperturaMediaApiario,
    TotalAlertas,
    HistoricoTemperatura
};