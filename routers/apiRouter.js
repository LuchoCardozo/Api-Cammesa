const express = require ("express");
const router = express.Router();
const path = require("path");
const apiController = require("../controllers/apiControllers");
/*



router.get ("/demandaChaco",apiController.apiChaco);
router.get ("/demandaFormosa",apiController.apiFormosa);
router.get ("/demandaCorrientes",apiController.apiCorrientes);
router.get ("/demandamisiones",apiController.apiMisiones);
router.get ("/demandaNea",apiController.apiNea);
router.get ("/grafico", apiController.grafico)





module.exports = router