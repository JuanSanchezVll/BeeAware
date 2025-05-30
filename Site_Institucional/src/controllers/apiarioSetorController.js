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


module.exports = {
    carregarApiario,
    carregarApiarioTemp
}