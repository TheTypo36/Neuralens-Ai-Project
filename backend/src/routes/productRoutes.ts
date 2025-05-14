import { Router } from "express";
import {
  getAllProducts,
  getLimitedProducts,
} from "../controllers/productController";
const router = Router();

router.route("/get-allproducts").post(getAllProducts);
router.route("./get-limitedProducts/:min/:max").get(getLimitedProducts);

export default router;
