import express from "express";
import { getProductController } from "../controller/productController.js";

const router = express.Router();

//routes

//get products
router.get("/get-product", getProductController);

export default router;
