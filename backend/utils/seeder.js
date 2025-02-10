import Product from "../model/productModel.js"
// import products from "../data/products.json" assert { type: "json" };

import dotenv from "dotenv"
import db from "../config/db.js"

import { readFileSync } from "fs";

const products = JSON.parse(readFileSync(new URL("../data/products.json", import.meta.url), "utf-8"));


dotenv.config()
db()


const seedProduct = async() =>{
    try{
     await Product.deleteMany()
     console.log("All Product Deleted")

     await Product.insertMany(products)
     console.log(" All Product added")
     process.exit()
    }catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

seedProduct()
// export default seedProduct

