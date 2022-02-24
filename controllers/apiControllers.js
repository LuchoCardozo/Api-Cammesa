const express = require ("express")
const path = require ("path")
const fs = require ("fs");
const fetch = require ("node-fetch");

const chacoFilePath = path.join(__dirname, '../data/chaco.json');
const chacoDem = fs.readFileSync(chacoFilePath, 'utf-8');

const corrientesFilePath = path.join(__dirname, '../data/corrientes.json');
const corrientesDem = fs.readFileSync(corrientesFilePath, 'utf-8');

const formosaFilePath = path.join(__dirname, '../data/formosa.json');
const formosaDem = fs.readFileSync(formosaFilePath, 'utf-8');

const misionesFilePath = path.join(__dirname, '../data/misiones.json');
const misionesDem = fs.readFileSync(misionesFilePath, 'utf-8');

const neaFilePath = path.join(__dirname, '../data/nea.json');
const neaDem = fs.readFileSync(neaFilePath, 'utf-8');


let chacoFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892')
.then (response => response.json())
.then (data => { let chaco = data;
 const newJSON = JSON.stringify(chaco,null,1);
fs.writeFileSync(chacoFilePath,newJSON,"utf-8")
})
.catch (err => console.log(err));

let formosaFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1886')
.then (response => response.json())
.then (data => { let formosa = data;
    const newJSON = JSON.stringify(formosa,null,1);
   fs.writeFileSync(formosaFilePath,newJSON,"utf-8")
   } )
.catch (err => console.log(err));

let corrientesFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1893')
.then (response => response.json())
.then (data => { let corrientes = data;
    const newJSON = JSON.stringify(corrientes,null,1);
   fs.writeFileSync(corrientesFilePath,newJSON,"utf-8")
   } )
.catch (err => console.log(err));

let misionesFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=2426')
.then (response => response.json())
.then (data =>  { let misiones = data;
    const newJSON = JSON.stringify(misiones,null,1);
   fs.writeFileSync(misionesFilePath,newJSON,"utf-8")
   } )
.catch (err => console.log(err));

let neaFetch = fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=418')
.then (response => response.json())
.then (data => { let nea = data;
    const newJSON = JSON.stringify(nea,null,1);
   fs.writeFileSync(neaFilePath,newJSON,"utf-8")
   } )
.catch (err => console.log(err));



const apiController= {
    apiChaco: (req,res)=>{
        res.render("api/apiChaco",{chaco: JSON.parse(chacoDem)})
    },
    apiCorrientes: (req,res)=>{
        res.render("api/apiCorrientes",{corrientes:JSON.parse(corrientesDem)})
    },
    apiFormosa: (req,res)=>{
        res.render("api/apiFormosa",{formosa:JSON.parse(formosaDem)})
    },
    apiMisiones: (req,res)=>{
        res.render("api/apiMisiones",{misiones:JSON.parse(misionesDem)})
    },
    apiNea: (req,res)=>{
        res.render("api/apiNea",{nea:JSON.parse(neaDem)})
    }
};


module.exports = apiController