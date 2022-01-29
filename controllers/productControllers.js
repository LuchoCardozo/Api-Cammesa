const express = require ("express")
const path = require ("path")
const fs = require ("fs")

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productController = {

    products: (req,res)=>{
        res.render("products/products",{products})
    },

    productDetail:(req,res)=>{
        let idProduct = req.params.id
        const productDetail = products.filter(prod => prod.id == idProduct)
        res.render("products/productDetail",{productDetail})
    },

    formCreate: (req,res)=>{
        res.render("products/formCreate")
    },

    store: (req,res)=>{
     let newProduct = {
         id: products[products.length-1].id +1,
         ...req.body,
         image: "default.jpg"
     }
    products.push(newProduct);
     const newJson = JSON.stringify(products,null,1);
     fs.writeFileSync(productsFilePath,newJson,"utf-8");
     res.render("products/formCreate")
    }

}


module.exports = productController