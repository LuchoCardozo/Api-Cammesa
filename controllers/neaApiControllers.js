const express = require("express");
const fetch = require("node-fetch");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require("moment");


setInterval( async () => {
	const res = await  fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=418');
    const nea = await res.json();
       db.DemNea.bulkCreate(nea,{
        updateOnDuplicate:['fecha','demHoy','tempHoy'],
      })

},80000);

const neaApiController = {
    apiNea: (req, res) => {
        db.DemNea.findAll()
        .then(nea =>{
            nea.forEach(data => {
             data.dataValues.fecha = moment(data.fecha).format('D-M-Y HH:mm');
            })
            res.render("api/apiNea", { nea })
        })
        .catch(err =>{
            console.log(err)
        })
    }
};


module.exports = neaApiController