"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLimitedProducts = exports.getAllProducts = void 0;
const productSchema_1 = require("../models/productSchema");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productSchema_1.Product.find();
        if (!products) {
            res.status(404).json({ message: "no products are found" });
            return;
        }
        res.status(202).json(products);
        console.log("successfully fetched the product");
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "error in fetching data" });
    }
});
exports.getAllProducts = getAllProducts;
const getLimitedProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const min = parseFloat(req.query.min) || 0;
    const max = parseFloat(req.query.max) || Number.MAX_VALUE;
    try {
        const filteredProducts = yield productSchema_1.Product.find({
            price: { $gte: min, $lte: max },
        });
        if (!filteredProducts) {
            res.status(404).json({ message: "no product is present in this range" });
            return;
        }
        res.status(202).json(filteredProducts);
        console.log(`sucessully fetch product in this range ${min} and ${max}`);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "unable to fetch the limited products" });
    }
});
exports.getLimitedProducts = getLimitedProducts;
