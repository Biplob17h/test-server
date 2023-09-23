import express from "express";
import { getAllData, postATest } from "../controller/testController.js";
const router = express.Router();

router.get("/", getAllData);
router.post("/", postATest);

export default router;
