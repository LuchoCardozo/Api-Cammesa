const express = require("express")
const path = require("path")
const fs = require("fs");
const fetch = require("node-fetch");

const formosaFilePath = path.join(__dirname, '../data/formosa.json');
const formosaDem = fs.readFileSync(formosaFilePath, 'utf-8');

const formosaApiController = {
    apiFormosa: (req, res) => {
        fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1886')
            .then(response => response.json())
            .then(data => {
                let formosa = data;
                const newJSON = JSON.stringify(formosa, null, 1);
                fs.writeFileSync(formosaFilePath, newJSON, "utf-8")
                res.render("api/apiFormosa", { formosa: JSON.parse(formosaDem) })
            })
            .catch(err => console.log(err));
    },

};

module.exports = formosaApiController