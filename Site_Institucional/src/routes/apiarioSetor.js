var express = require("express");
var router = express.Router();

var apiarioSetorController = require("../controllers/apiarioSetorController");

router.get("/carregarApiarioSetor/:idUsuario", function (req, res) {
    apiarioSetorController.carregarApiario(req, res);
})

router.get("/carregarApiarioTemperatura/:idUsuario", function (req, res) {
    apiarioSetorController.carregarApiarioTemp(req, res);
})

router.get("/carregarSetorAlerta/:idUsuario", function (req, res) {
    apiarioSetorController.carregarSetorAlerta(req, res);
}
)
router.get("/carregarAlertas/:idUsuario", function (req, res) {
    apiarioSetorController.carregarAlerta15dias(req, res);
})



module.exports = router;