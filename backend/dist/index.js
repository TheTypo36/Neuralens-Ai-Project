"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect_1 = require("./db/dbConnect");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, dbConnect_1.dbConnect)().then(() => {
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
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
app.use("/api/v1/product", productRoutes_1.default);
const port = process.env.port || 8083;
app.listen(port, () => {
    console.log("server in running on port: ", port);
});
