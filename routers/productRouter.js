const express = require ("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productControllers");


router.get("/",productController.products);

router.get("/detail/:id",productController.productDetail);

router.get("/create",productController.formCreate);

router.post ("/create",productController.store)


module.exports = router