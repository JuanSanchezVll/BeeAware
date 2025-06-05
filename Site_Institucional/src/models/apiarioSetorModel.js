var database = require("../database/config")

// Campo do banco de dados
function carregarApiarioEmpresa(idUsuario) {
    var instrucaoSql = `
SELECT 
    e.idEmpresa,
    st.setor,
    a.idApiario,
    a.identificador_colonia,
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

function carregarApiarioEmpresaAlerta(idUsuario){
    var instrucaoSql = `
    SELECT 
    DATE_FORMAT(l.dtLeitura, '%Y-%m-%d %H:%i') AS data_formatada,
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
WHERE e.idEmpresa = ${idUsuario}
ORDER BY l.dtLeitura DESC
limit 100;

`; 

    return database.executar(instrucaoSql);
}

function carregarAlertaSetor(idUsuario){
    var instrucaoSql = `
select 
st.fkEmpresa as idEmpresa,
count(rl.fkleitura) as TotalAlertas,
date_format(rl.dtRecomendacao, '%Y-%m-%d') 
from recomendacaoLeitura rl join leitura l
on rl.fkLeitura = l.idLeitura
join sensor s
on l.fkSensor = s.idSensor
join apiario a
on s.fkApiario = a.idApiario
join setor st
on a.fkSetor = st.idSetor
where (rl.fkRecomendacao = 2 or rl.fkRecomendacao = 3)
group by date_format(rl.dtRecomendacao, '%Y-%m-%d'), st.fkEmpresa 
having st.fkEmpresa = ${idUsuario}
order by st.fkEmpresa desc limit 15;

`; 

    return database.executar(instrucaoSql);
}



module.exports = {
    carregarApiarioEmpresa,
    carregarApiarioEmpresaTemperatura,
    carregarApiarioEmpresaAlerta,
    carregarAlertaSetor
};