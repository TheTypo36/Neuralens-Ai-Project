import mongoose, { Document, Model, model } from "mongoose";

export interface productDocument extends Document {
  product_name: string;
  price: number;
  category: string;
  description: string;
  manufacturer: string;
  color: string;
  size: string | Array<number | string>;
  dimension: string;
  image_url: string;
}

const productSchema = new mongoose.Schema<productDocument>(
  {
    product_name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    size: {
      type: Array,
    },
    dimension: {
      type: String,
    },
    image_url: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product: Model<productDocument> = model<productDocument>(
  "Product",
  productSchema
);
