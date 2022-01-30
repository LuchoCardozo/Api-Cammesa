const express = require ("express");
const router = express.Router();
const path = require("path");
const productController = require("../controllers/productControllers");
const multer = require ("multer");
const { body, validatorResult } = require ("express-validator");

const fileStorageEngine = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/image'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}--${file.originalname}`) } 
  });

const upload = multer({storage: fileStorageEngine});

const validator = [
 body("name")
         .notEmpty()
         .withMessage("debe completar el nombre del producto"),
 body("description")
         .notEmpty()
         .withMessage ("debe realizar una descripcion breve del producto"),
 body("color")
         .notEmpty()
         .withMessage ("debe completar el color"),
 body("discount")
         .isInt()
         .withMessage ("tiene descuento?"),
 body("price")
         .isInt()
         .withMessage("debe colocar un precio a su producto"),
 body("type")
          .notEmpty()
          .withMessage ("seleccione una de la opciones"),
   ]


router.get("/",productController.products);

router.get("/detail/:id",productController.productDetail);

router.get("/create",productController.formCreate);
router.post ("/create",upload.single('image'),validator,productController.store)

router.get("/edit/:id",productController.formEdit)
router.put("/update/:id",upload.single('image'),productController.update)

router.delete("/delete/:id",productController.delete)

module.exports = router




