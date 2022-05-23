const express = require("express");
const router = express.Router();
const path = require("path");
const chacoApiController = require("../controllers/chacoApiControllers");
const formosaApiController = require("../controllers/formosaApiControllers");
const corrientesApiController = require("../controllers/corrientesApiControllers");
const misionesApiController = require("../controllers/misionesApiControllers");
const neaApiController = require("../controllers/neaApiControllers");


router.get("/demandaChaco", chacoApiController.apiChaco);
router.get("/demandaFormosa", formosaApiController.apiFormosa);
router.get("/demandaCorrientes", corrientesApiController.apiCorrientes);
router.get("/demandaMisiones", misionesApiController.apiMisiones);
router.get("/demandaNea", neaApiController.apiNea);

module.exports = router