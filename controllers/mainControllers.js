const express = require("express")


const maincontroller = {
    index: (req, res) => {
        res.render("main/index")
    },

}


module.exports = maincontroller