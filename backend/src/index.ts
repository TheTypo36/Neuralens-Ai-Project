import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/dbConnect";
import { importData } from "./utils/importData";

dotenv.config();

const app = express();

dbConnect().then(() => {
  app.on("error", (error) => {
    console.error("error in db connection", error);
    return;
  });
});

// importData(); only runned first time so that data inserted in mongodb

app.get("/", (req, res) => {
  res.send("<H1>hello Neuralens Ai</H1>");
});

//routes for product api
import productRoutes from "./routes/productRoutes";
app.use("/api/v1/product", productRoutes);

const port = process.env.port || 8083;
app.listen(port, () => {
  console.log("server in running on port: ", port);
});
