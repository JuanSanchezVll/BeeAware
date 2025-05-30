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
    l.dtLeitura
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
    DATE_FORMAT(l.dtLeitura, '%Y-%m-%d %H:%i:%s') AS data_formatada,
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
ORDER BY l.dtLeitura DESC;

`; 

    return database.executar(instrucaoSql);
}

module.exports = {
    carregarApiarioEmpresa,
    carregarApiarioEmpresaTemperatura,
    carregarApiarioEmpresaAlerta
};