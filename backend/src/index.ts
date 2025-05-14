import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/dbConnect";

dotenv.config();

const app = express();

dbConnect().then(() => {
  app.on("error", (error) => {
    console.error("error in db connection", error);
    return;
  });
});

app.get("/", (req, res) => {
  res.send("<H1>hello Neuralens Ai</H1>");
});

const port = process.env.port || 8083;
app.listen(port, () => {
  console.log("server in running on port: ", port);
});
