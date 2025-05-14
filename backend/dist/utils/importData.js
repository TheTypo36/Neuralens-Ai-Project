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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importData = void 0;
const dbConnect_1 = require("../db/dbConnect"); // needed
const productSchema_1 = require("../models/productSchema");
const xlsx_1 = __importDefault(require("xlsx"));
const path_1 = __importDefault(require("path"));
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield (0, dbConnect_1.dbConnect)();
        const workbook = xlsx_1.default.readFile(path_1.default.join(__dirname, "../data/demo_data.xls"));
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = xlsx_1.default.utils.sheet_to_json(sheet, { defval: "" });
        for (const raw of jsonData) {
            const prd = raw;
            yield productSchema_1.Product.create({
                product_name: prd.product_name,
                price: prd.price,
                category: prd.category,
                manufacturer: prd.manufacturer,
                color: prd.color,
                size: (_a = prd.size) === null || _a === void 0 ? void 0 : _a.split(","),
                dimension: prd.dimension,
                image_url: prd.image_url,
            });
        }
        console.log("✅ Data imported successfully");
        const allProducts = yield productSchema_1.Product.find();
        console.log("📦 Fetched products:", allProducts);
    }
    catch (error) {
        console.error("❌ Error during import:", error);
    }
    finally {
        // Optional but clean
        process.exit();
    }
});
exports.importData = importData;
