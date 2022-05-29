const express = require("express")
const fetch = require("node-fetch");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require("moment");


setInterval( async () => {
	const res = await  fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1893');
    const corrientes = await res.json();
       db.DemCorrientes.bulkCreate(corrientes,{
        updateOnDuplicate:['fecha','demHoy'],
      })

},80000);

const corrientesApiController = {
    apiCorrientes: (req, res) => {
        db.DemCorrientes.findAll()
        .then(corrientes =>{
            corrientes.forEach(data => {
             data.dataValues.fecha = moment(data.fecha).format('D-M-Y HH:mm');
            })
            res.render("api/apiCorrientes", { corrientes })
        })
        .catch(err =>{
            console.log(err)
        })

}};

module.exports = corrientesApiController