import { dbConnect } from "../db/dbConnect"; // needed
import { Product } from "../models/productSchema";
import xlsx from "xlsx";
import path from "path";

export const importData = async () => {
  try {
    await dbConnect();

    const workbook = xlsx.readFile(
      path.join(__dirname, "../data/demo_data.xls")
    );
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(sheet, { defval: "" });

    for (const raw of jsonData) {
      const prd = raw as any;
      await Product.create({
        product_name: prd.product_name,
        price: prd.price,
        category: prd.category,
        manufacturer: prd.manufacturer,
        color: prd.color,
        size: prd.size?.split(","),
        dimension: prd.dimension,
        image_url: prd.image_url,
      });
    }

    console.log("✅ Data imported successfully");
    const allProducts = await Product.find();
    console.log("📦 Fetched products:", allProducts);
  } catch (error) {
    console.error("❌ Error during import:", error);
  } finally {
    // Optional but clean
    process.exit();
  }
};
