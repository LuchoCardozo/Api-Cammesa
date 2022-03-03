const express = require ("express");
const app = express();
const path = require ("path");
const bodyParser = require('body-parser')
const  methodOverride = require('method-override');
const mainRouter = require ("./routers/mainRouter");
const productRouter = require ("./routers/productRouter");
//const apiRouter = require ("./routers/apiRouter");
const userRouter = require ("./routers/userRouter");
const session = require ("express-session")
const publicPath = "public";
const cookies = require ("cookie-parser")

const userLoggedMiddleware = require ("./middlewares/userLoggedMiddleware")


app.use(express.static(publicPath));

app.set("view engine","ejs");

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use (cookies())

app.use(userLoggedMiddleware)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(methodOverride("_method"))

app.listen( process.env.PORT || 3000,()=> {
    console.log("el servidor esta corriendo en el puerto 3000")
});


app.use("/", mainRouter);
app.use("/products", productRouter)
//app.use("/api", apiRouter);
app.use("/users",userRouter)



/*
localhost:  3000                index

localhost:3000/products/       products

localhost:3000/products/detail/:id       productDetail

localhost:3000/products/create      formCreate

*/

