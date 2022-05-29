const db = require("../database/models");

function userLoggedMiddleware (req,res,next){
    res.locals.isLogged = false
    res.locals.admin = false
    if (req.cookies.userEmail) {
        let emailInCookie = req.cookies.userEmail;
        db.User.findOne({ where: { email: emailInCookie } })
            .then((userFromCookie) => {
                delete userFromCookie.dataValues.password
                delete userFromCookie._previousDataValues.password
                req.session.userLogged = userFromCookie;  
            }).catch(err => { console.log(err) });

            if (req.session.userLogged && req.session.userLogged.category_id == 2) {
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
                res.locals.admin = true;
            } else {
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
            }
    }

next()
}


module.exports = userLoggedMiddleware