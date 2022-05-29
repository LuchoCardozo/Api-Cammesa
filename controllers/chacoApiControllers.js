const express = require("express")
const fetch = require("node-fetch");
const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require("moment");

// const path = require("path")
// const fs = require("fs");
// const chacoFilePath = path.join(__dirname, '../data/chaco.json');
// const chacoDem = fs.readFileSync(chacoFilePath, 'utf-8');

function vamos() {
    let actualizarHora = function () {
        let fecha = new Date();
        let hora = fecha.getHours();
        let min = fecha.getMinutes();
        let sec = fecha.getSeconds();
        let diaSemana = fecha.getDay();
        let dia = fecha.getDate()
        let mes = fecha.getMonth();
        let año = fecha.getFullYear();
        let semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    
        if(hora<10){
            hora = '0'+hora
        };
        if(min<10){
            min = '0'+min
        };
        if (sec<10){
            sec = '0'+sec
        };
      //  console.log(hora, ':', min, ':', sec, semana[diaSemana], dia, 'de', meses[mes], 'de', año)
    }
    actualizarHora(); 
}
vamos();
let intervalo = setInterval(vamos, 1000);


setInterval(async () => {
    const res = await fetch('https://api.cammesa.com/demanda-svc/demanda/ObtieneDemandaYTemperaturaRegion?id_region=1892');
    const chaco = await res.json();
    db.DemChaco.bulkCreate(chaco, {
        updateOnDuplicate: ['fecha', 'demHoy'],
    })

}, 80000);

const chacoApiController = {
    apiChaco: (req, res) => {
        db.DemChaco.findAll()
            .then(chaco => {
                chaco.forEach(data => {
                    data.dataValues.fecha = moment(data.fecha).format('D-M-Y HH:mm');
                })
                res.render("api/apiChaco", { chaco })
            })
            .catch(err => {
                console.log(err)
            })
        // const newJSON = JSON.stringify(chaco, null, 1);
        // fs.writeFileSync(chacoFilePath, newJSON, "utf-8")

    }
};
module.exports = chacoApiController

