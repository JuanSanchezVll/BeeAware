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
l.temperatura
FROM empresa e
JOIN setor st ON st.fkEmpresa = e.idEmpresa
JOIN apiario a ON a.fkSetor = st.idSetor
JOIN sensor se ON se.fkApiario = a.idApiario
JOIN leitura l ON l.fkSensor = se.idSensor where e.idEmpresa = ${idUsuario};
    `; 

    return database.executar(instrucaoSql);
}


module.exports = {
    carregarApiarioEmpresa,
    carregarApiarioEmpresaTemperatura
};