const { urlencoded } = require("express");
const express = require ("express");
const app = express();
const path = require ("path");
const bodyParser = require('body-parser')
const  methodOverride = require('method-override');
const mainRouter = require ("./routers/mainRouter");
const productRouter = require ("./routers/productRouter");
const apiRouter = require ("./routers/apiRouter");



const publicPath = "public";
app.use(express.static(publicPath));

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(methodOverride("_method"))

app.listen( process.env.PORT || 3000,()=> {
    console.log("el servidor esta corriendo en el puerto 3000")
});


app.use("/", mainRouter);
app.use("/products", productRouter)
app.use("/api", apiRouter)

/*
localhost:  3000                index

localhost:3000/products/       products

localhost:3000/products/detail/:id       productDetail

localhost:3000/products/create      formCreate

*/

