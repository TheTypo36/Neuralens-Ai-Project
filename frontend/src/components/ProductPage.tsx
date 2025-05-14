import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, type propDocument } from "./Card";
function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post("http://localhost:8083/api/v1/product/get-allproducts")
      .then((Response) => {
        console.log(Response.data);
        setProducts(Response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error in getting products: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mt-20">
      <h1 className="w-full z-10 fixed top-0 left-0 h-20 bg-gray-400 flex flex-row justify-between p-3 items-center text-white text-3xl">
        <span className="text-purple-500 text-5xl">Neuralens</span>{" "}
        <span>AI product page</span>
      </h1>
      {loading && <h1>Loading ...</h1>}
      {!loading &&
        products.map((product: propDocument, index: number) => (
          <Card key={product.product_name || index} {...product} />
        ))}
    </div>
  );
}

export default ProductPage;
