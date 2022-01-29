const express = require ("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productControllers");


router.get("/",productController.products);

router.get("/detail/:id",productController.productDetail);

router.get("/create",productController.formCreate);
router.post ("/save",productController.store)

router.get("/edit/:id",productController.formEdit)
router.put("/update/:id",productController.update)

router.delete("/delete/:id",productController.delete)

module.exports = router