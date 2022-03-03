const path = require ("path");
const {body} = require ("express-validator");

const validationsUser = [
    body("first_name")
       .notEmpty()
       .withMessage("debe completar con su nombre"),
    body("last_name")
       .notEmpty()
       .withMessage("debe completar con su apellido"),
    body("email")
       .notEmpty()
       .withMessage("debes escribir un correo")
       .bail()
       .isEmail()
       .withMessage("debe completar con un email valido"),
    body("password")
       .notEmpty()
       .withMessage("debe completar con una contraseña"),
    body("country")
       .notEmpty()
       .withMessage("debe seleccionar su pais"),
    body("image")
       .custom((value,{ req })=> {
          let file = req.file;
          let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
          if (!file) {
             throw new Error("tienes que subir una imagen")
          } else {
             let fileExtension = path.extname(file.originalname);
             if (!acceptedExtensions.includes(fileExtension)){
                throw new Error(`las extensiones de archivos permitidos son ${acceptedExtensions.join(", ")}`)
             }
          } return true
       })
 ]
 
module.exports = validationsUser