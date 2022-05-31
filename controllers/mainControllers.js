const express = require("express")


const maincontroller = {
    index: (req, res) => {
        res.render("main/index")
    },
    about: (req, res) => {
        res.render("main/about")
    },
    contact: (req, res) => {
        res.render("main/contact")
    },

}


module.exports = maincontroller