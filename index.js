import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testRouter from "./routes/testRoute.js";
import productRoutes from "./routes/productRoute.js";


// app
const app = express();

//config env
dotenv.config();
const PORT = process.env.PORT || 5050;

// middlewires
app.use(cors());
app.use(express.json());

// homepage
app.get("/", (req, res) => {
  res.send("flux server is running");
});

// custom middlewires
app.use("/api/v1/test", testRouter);
app.use("/api/v1/product", productRoutes);


//server run
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgMagenta);
  connectDB();
});
