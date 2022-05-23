const express = require("express")
const path = require("path")
const fs = require("fs");
const fetch = require("node-fetch");

const misionesFilePath = path.join(__dirname, '../data/misiones.json');
const misionesDem = fs.readFileSync(misionesFilePath, 'utf-8');

const misionesApiController = {
    apiMisiones: (req, res) => {
        fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=2426')
            .then(response => response.json())
            .then(data => {
                let misiones = data;
                const newJSON = JSON.stringify(misiones, null, 1);
                fs.writeFileSync(misionesFilePath, newJSON, "utf-8");
                res.render("api/apiMisiones", { misiones: JSON.parse(misionesDem) })
            })
            .catch(err => console.log(err));
    }
};


module.exports = misionesApiController