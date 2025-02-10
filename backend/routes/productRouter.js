import { Router } from "express";
import { createProduct, getPrducts, getSingleProduct } from "../controllers/productController.js";

let router = Router();

router.get("/", getPrducts)
router.get("/:id", getSingleProduct)
router.post("/", createProduct)


export default router;