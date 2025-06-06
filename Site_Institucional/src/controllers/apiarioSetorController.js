var apiarioSetorModel = require("../models/apiarioSetorModel");

function carregarApiario(req, res) {
    idUsuario = req.params.idUsuario
    
    apiarioSetorModel.carregarApiarioEmpresa(idUsuario)
.then(resultado => {
res.json(resultado);

})
.catch(

        )
}
            
function carregarApiarioTemp(req, res){
idUsuario = req.params.idUsuario
    
apiarioSetorModel.carregarApiarioEmpresaTemperatura(idUsuario)

.then(resultado => {
res.json(resultado);

})
.catch(

)
}

function carregarSetorAlerta(req, res){
idUsuario = req.params.idUsuario
    
apiarioSetorModel.carregarApiarioEmpresaAlerta(idUsuario)

.then(resultado => {
res.json(resultado);

})
.catch(

)
}

function carregarAlerta15dias(req, res){
idUsuario = req.params.idUsuario
    
apiarioSetorModel.carregarAlertaSetor(idUsuario)

.then(resultado => {
res.json(resultado);

})
.catch(

)
}

module.exports = {
    carregarApiario,
    carregarApiarioTemp,
    carregarSetorAlerta,
    carregarAlerta15dias
}