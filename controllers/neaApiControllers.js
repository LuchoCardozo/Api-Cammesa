const express = require("express")
const path = require("path")
const fs = require("fs");
const fetch = require("node-fetch");

const neaFilePath = path.join(__dirname, '../data/nea.json');
const neaDem = fs.readFileSync(neaFilePath, 'utf-8');

const neaApiController = {
    apiNea: (req, res) => {
        fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=418')
            .then(response => response.json())
            .then(data => {
                let nea = data;
                const newJSON = JSON.stringify(nea, null, 1);
                fs.writeFileSync(neaFilePath, newJSON, "utf-8");
                res.render("api/apiNea", { nea: JSON.parse(neaDem) })
            })
            .catch(err => console.log(err));

    }
};


module.exports = neaApiController