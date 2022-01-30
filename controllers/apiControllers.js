const express = require ("express")
const path = require ("path")
const fs = require ("fs");
const fetch = require ("node-fetch");


const chacoFilePath = path.join(__dirname, '../data/chaco.json');
const chacoDem = JSON.parse(fs.readFileSync(chacoFilePath, 'utf-8'));

let data = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892')
.then (response => response.json())
.then (data => obj = data)
.catch (err => console.log(err));


/*chacoDem.push(obj)
const newJSON = JSON.stringify(chacoDem,null,1);
fs.writeFileSync(chacoFilePath,newJSON,"utf-8")*/


const apiController= {
    api: (req,res)=>{
        res.render("api/api",{obj})
    }
};



module.exports = apiController

