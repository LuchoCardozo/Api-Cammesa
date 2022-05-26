const express = require("express")
const fetch = require("node-fetch");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require("moment")

// const path = require("path")
// const fs = require("fs");
// const chacoFilePath = path.join(__dirname, '../data/chaco.json');
// const chacoDem = fs.readFileSync(chacoFilePath, 'utf-8');

setInterval( async () => {
	const res = await  fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892');
    const chaco = await res.json();
    chaco.forEach(data => {
        db.DemChaco.create({
            fecha: data.fecha,
            demHoy: data.demHoy,
            demAyer: data.demAyer,
            demSemAnt: data.demSemanaAnt
        })
    })
},120000);

const chacoApiController = {
    apiChaco: (req, res) => {
        db.DemChaco.findAll()
        .then(chaco =>{
            chaco.forEach(data => {
             data.dataValues.fecha = moment(data.fecha).format('D-M-Y HH:mm');
            })
            res.render("api/apiChaco", { chaco })
        })
        .catch(err =>{
            console.log(err)
        })
                // const newJSON = JSON.stringify(chaco, null, 1);
                // fs.writeFileSync(chacoFilePath, newJSON, "utf-8")

    }
};
module.exports = chacoApiController