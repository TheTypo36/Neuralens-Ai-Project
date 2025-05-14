"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect_1 = require("./db/dbConnect");
const importData_1 = require("./utils/importData");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, dbConnect_1.dbConnect)().then(() => {
    app.on("error", (error) => {
        console.error("error in db connection", error);
        return;
    });
});
(0, importData_1.importData)();
app.get("/", (req, res) => {
    res.send("<H1>hello Neuralens Ai</H1>");
});
const port = process.env.port || 8083;
app.listen(port, () => {
    console.log("server in running on port: ", port);
});
