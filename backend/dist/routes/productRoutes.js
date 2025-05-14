"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
router.route("/get-allproducts").get(productController_1.getAllProducts);
router.route("/get-limitedProducts").get(productController_1.getLimitedProducts);
exports.default = router;
