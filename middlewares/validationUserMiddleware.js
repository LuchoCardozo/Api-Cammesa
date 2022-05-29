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
    body("managements")
       .notEmpty()
       .withMessage("debe seleccionar su gerencia"),
    body("avatar")
       .custom((value,{ req })=> {
          let file = req.file;
          let avDef = req.body.avatar_def
          let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
          if (!file && !avDef) {
            throw new Error('Tienes que subir una imagen o tildar Usar avatar');
        } else if (file && !avDef) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`las extensiones del archivo permitidas son ${acceptedExtensions.join(',')} `);
            }
        } 
          
          return true
       })
 ]
 
module.exports = validationsUser