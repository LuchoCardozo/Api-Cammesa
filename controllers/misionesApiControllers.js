const express = require("express")
const fetch = require("node-fetch");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require("moment");

setInterval( async () => {
	const res = await  fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=2426');
    const misiones = await res.json();
       db.DemMisiones.bulkCreate(misiones,{
        updateOnDuplicate:['fecha','demHoy'],
      })

},80000);

const misionesApiController = {
    apiMisiones: (req, res) => {
        db.DemMisiones.findAll()
        .then(misiones =>{
            misiones.forEach(data => {
             data.dataValues.fecha = moment(data.fecha).format('D-M-Y HH:mm');
            })
            res.render("api/apiMisiones", { misiones })
        })
        .catch(err =>{
            console.log(err)
        })
             
    }
};

module.exports = misionesApiController