const express = require ("express")
const path = require ("path")
const fs = require ("fs");





/*fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892')
.then (response => response.json())
.then (data => console.log(data))
.catch (err => console.log(err));*/


const apiController= {
    api: (req,res)=>{
        res.render("api/api")
    }
};



module.exports = apiController

