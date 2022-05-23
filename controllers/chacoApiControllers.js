const express = require("express")
const path = require("path")
const fs = require("fs");
const fetch = require("node-fetch");

const chacoFilePath = path.join(__dirname, '../data/chaco.json');
const chacoDem = fs.readFileSync(chacoFilePath, 'utf-8');

const chacoApiController = {
    apiChaco: (req, res) => {
        fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892')
            .then(response => response.json())
            .then(chaco => { 
                const newJSON = JSON.stringify(chaco, null, 1);
                fs.writeFileSync(chacoFilePath, newJSON, "utf-8")
                res.render("api/apiChaco", {chaco})
            })
            .catch(err => console.log(err));
    }
};

module.exports = chacoApiController