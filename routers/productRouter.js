const express = require ("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productControllers");
const multer = require ("multer")

const fileStorageEngine = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/image'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}--${file.originalname}`) } 
  })
const upload = multer({storage: fileStorageEngine})

router.get("/",productController.products);

router.get("/detail/:id",productController.productDetail);

router.get("/create",productController.formCreate);
router.post ("/save",upload.single('image'),productController.store)

router.get("/edit/:id",productController.formEdit)
router.put("/update/:id",upload.single('image'),productController.update)

router.delete("/delete/:id",productController.delete)

module.exports = router




