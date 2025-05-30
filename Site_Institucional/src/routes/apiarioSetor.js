var express = require("express");
var router = express.Router();

var apiarioSetorController = require("../controllers/apiarioSetorController");

router.get("/carregarApiarioSetor/:idUsuario", function (req, res) {
    apiarioSetorController.carregarApiario(req, res);
})

router.get("/carregarApiarioTemperatura/:idUsuario", function (req, res) {
    apiarioSetorController.carregarApiarioTemp(req, res);
})



module.exports = router;