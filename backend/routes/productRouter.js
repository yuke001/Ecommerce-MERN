import { Router } from "express";
import { get } from "mongoose";
import { getPrducts } from "../controllers/productController.js";

let router = Router();

router.get("/", getPrducts)


export default router;