import { Product } from "../models/productSchema";
import { Request, Response } from "express";

interface NEWREQUEST extends Request {
  query: {
    min: string;
    max: string;
  };
}
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();

    if (!products) {
      res.status(404).json({ message: "no products are found" });
      return;
    }

    res.status(202).json(products);
    console.log("successfully fetched the product");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in fetching data" });
  }
};

export const getLimitedProducts = async (req: NEWREQUEST, res: Response) => {
  const min = parseFloat(req.query.min) || 0;
  const max = parseFloat(req.query.max) || Number.MAX_VALUE;

  try {
    const filteredProducts = await Product.find({
      price: { $gte: min, $lte: max },
    });

    if (!filteredProducts) {
      res.status(404).json({ message: "no product is present in this range" });
      return;
    }
    res.status(202).json(filteredProducts);
    console.log(`sucessully fetch product in this range ${min} and ${max}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "unable to fetch the limited products" });
  }
};
