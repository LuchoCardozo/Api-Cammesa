const express = require("express")
const fetch = require("node-fetch");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require("moment");


setInterval( async () => {
	const res = await  fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1886');
    const formosa = await res.json();
       db.DemFormosa.bulkCreate(formosa,{
        updateOnDuplicate:['fecha','demHoy'],
      })

},80000);

const formosaApiController = {
    apiFormosa: (req, res) => {
        db.DemFormosa.findAll()
        .then(formosa =>{
            formosa.forEach(data => {
             data.dataValues.fecha = moment(data.fecha).format('D-M-Y HH:mm');
            })
            res.render("api/apiFormosa", { formosa })
        })
        .catch(err =>{
            console.log(err)
        })
    }
};



module.exports = formosaApiController