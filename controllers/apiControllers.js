const express = require ("express")
const path = require ("path")
const fs = require ("fs");
const fetch = require ("node-fetch");

const chacoFilePath = path.join(__dirname, '../data/chaco.json');
const chacoDem = JSON.parse(fs.readFileSync(chacoFilePath, 'utf-8'));


let chacoFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892')
.then (response => response.json())
.then (data => chaco = data)
.catch (err => console.log(err));

let formosaFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1886')
.then (response => response.json())
.then (data => formosa = data)
.catch (err => console.log(err));

let corrientesFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1893')
.then (response => response.json())
.then (data => corrientes = data)
.catch (err => console.log(err));

let misionesFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=2426')
.then (response => response.json())
.then (data => misiones = data)
.catch (err => console.log(err));

let neaFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=418')
.then (response => response.json())
.then (data => nea = data)
.catch (err => console.log(err));

/*chacoDem.push(data)
const newJSON = JSON.stringify(chacoDem,null,1);
fs.writeFileSync(chacoFilePath,newJSON,"utf-8")*/



const apiController= {
    apiChaco: (req,res)=>{
        res.render("api/apiChaco",{chaco})
    },
    apiCorrientes: (req,res)=>{
        res.render("api/apiCorrientes",{corrientes})
    },
    apiFormosa: (req,res)=>{
        res.render("api/apiFormosa",{formosa})
    },
    apiMisiones: (req,res)=>{
        res.render("api/apiMisiones",{misiones})
    },
    apiNea: (req,res)=>{
        res.render("api/apiNea",{nea})
    }
};



module.exports = apiController

