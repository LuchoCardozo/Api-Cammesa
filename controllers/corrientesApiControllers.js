const express = require("express")
const path = require("path")
const fs = require("fs");
const fetch = require("node-fetch");

const corrientesFilePath = path.join(__dirname, '../data/corrientes.json');
const corrientesDem = fs.readFileSync(corrientesFilePath, 'utf-8');

const corrientesApiController = {
    apiCorrientes: (req, res) => {
        fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1893')
            .then(response => response.json())
            .then(data => {
                let corrientes = data;
                const newJSON = JSON.stringify(corrientes, null, 1);
                fs.writeFileSync(corrientesFilePath, newJSON, "utf-8");
                res.render("api/apiCorrientes", { corrientes: JSON.parse(corrientesDem) })
            })
            .catch(err => console.log(err));
    }

};

module.exports = corrientesApiController