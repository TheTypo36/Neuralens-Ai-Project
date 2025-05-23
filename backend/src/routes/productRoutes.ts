import { Router } from "express";
import {
  getAllProducts,
  getLimitedProducts,
} from "../controllers/productController";
const router = Router();

router.route("/get-allproducts").get(getAllProducts);
router.route("/get-limitedProducts").get(getLimitedProducts);

export default router;
