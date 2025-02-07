import { Router } from "express";
import { createProduct, getPrducts } from "../controllers/productController.js";

let router = Router();

router.get("/", getPrducts)
router.post("/", createProduct)


export default router;