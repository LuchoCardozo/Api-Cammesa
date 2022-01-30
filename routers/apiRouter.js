const express = require ("express");
const router = express.Router();
const path = require("path");
const apiController = require("../controllers/apiControllers");



router.get ("/",apiController.api);




module.exports = router