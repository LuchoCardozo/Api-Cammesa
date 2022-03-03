const express = require ("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/userController");
const validationsUser = require("../middlewares/validationUserMiddleware");
const upload = require("../middlewares/multerUserMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");



router.get ("/register", guestMiddleware  ,userController.register)
router.post("/register",upload.single("image"),validationsUser,userController.processRegister)

router.get("/login",guestMiddleware,userController.login);
router.post("/login",userController.loginProcess)

router.get("/profile",authMiddleware,userController.profile);
router.get("/logout",authMiddleware,userController.logout);



module.exports = router