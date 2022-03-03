const path = require("path");
const multer = require("multer");


const fileStorageEngine = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/image/users'); 
    }, 
    filename: function (req, file, cb) { 

    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
       cb(null, fileName) } 
  });

const upload = multer({storage: fileStorageEngine});


module.exports = upload