import { Router } from "express";
import { createProduct, deleteProduct, getPrducts, getSingleProduct, updateProduct } from "../controllers/productController.js";

let router = Router();


router.post("/", createProduct)

router.get("/", getPrducts)
router.get("/:id", getSingleProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)




export default router;