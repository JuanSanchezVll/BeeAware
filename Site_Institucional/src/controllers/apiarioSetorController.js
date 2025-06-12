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
function apiarioAtivos(req, res) {
    idUsuario = req.params.idUsuario

    apiarioSetorModel.apiarioAtivos(idUsuario)
        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}

function carregarApiarioTemp(req, res) {
    idUsuario = req.params.idUsuario

    apiarioSetorModel.carregarApiarioEmpresaTemperatura(idUsuario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}

function carregarSetorAlerta(req, res) {
    idUsuario = req.params.idUsuario

    apiarioSetorModel.carregarApiarioEmpresaAlerta(idUsuario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}

function carregarAlerta15dias(req, res) {
    idUsuario = req.params.idUsuario

    apiarioSetorModel.carregarAlertaSetor(idUsuario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}

function carregarAlertaMensal(req, res) {
    idUsuario = req.params.idUsuario

    apiarioSetorModel.carregarAlertaMensal(idUsuario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}
function carregarAlertaMensal(req, res) {
    idUsuario = req.params.idUsuario

    apiarioSetorModel.carregarAlertaMensal(idUsuario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}
function puxarHistorico(req, res) {
    apiario = req.params.apiario

    apiarioSetorModel.puxarHistorico(apiario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}

function TemperturaAtualApiario(req, res) {
    idUsuario = req.params.idUsuario
    idApiario = req.params.idApiario

    apiarioSetorModel.TemperturaAtualApiario(idUsuario, idApiario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}

function TemperturaMediaApiario(req, res) {
    idUsuario = req.params.idUsuario
    idApiario = req.params.idApiario

    apiarioSetorModel.TemperturaMediaApiario(idUsuario, idApiario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}


function TotalAlertas(req, res) {
    idApiario = req.params.idApiario
    apiarioSetorModel.TotalAlertas(idApiario)

        .then(resultado => {
            res.json(resultado);

        })
        .catch(

    )
}

function HistoricoTemperatura(req, res) {
    idUsuario = req.params.idUsuario
    idApiario = req.params.idApiario

    apiarioSetorModel.HistoricoTemperatura(idUsuario, idApiario)

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
    carregarAlerta15dias,
    carregarAlertaMensal,
    apiarioAtivos,
    puxarHistorico,
    TemperturaAtualApiario,
    TemperturaMediaApiario,
    TotalAlertas,
    HistoricoTemperatura
}