const express = require ("express");
const router = express.Router();
const path = require("path");
const maincontroller = require("../controllers/mainControllers");





router.get ("/",maincontroller.index);




module.exports = router