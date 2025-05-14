import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, type propDocument } from "./Card";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
function ProductPage() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const handleFilter = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8083/api/v1/product/get-limitedProducts?min=${min}&max=${max}`
      )
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
  };
  useEffect(() => {
    axios
      .get("http://localhost:8083/api/v1/product/get-allproducts")
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
    <>
      <div className="p-4 max-w-4xl mx-auto mt-20">
        <div className="bg-white shadow rounded p-4 mb-4 flex flex-col md:flex-row gap-4">
          <input
            type="number"
            placeholder="Min price"
            onChange={(e) => setMin(Number(e.target.value))}
            className="border p-2 rounded w-full bg-white"
          />
          <input
            type="number"
            placeholder="Max price"
            onChange={(e) => setMax(Number(e.target.value))}
            className="border p-2 rounded w-full"
          />
          <Button variant="outline" onClick={handleFilter}>
            Filter
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mt-10">
        <h1 className="w-full z-10 fixed top-0 left-0 h-20 bg-gray-400 flex flex-row justify-between p-3 items-center text-white text-3xl">
          <span
            className="text-purple-500 text-5xl cursor-pointer"
            onClick={handleNavigate}
          >
            Neuralens AI
          </span>{" "}
          <span>product page</span>
        </h1>
        {loading && <h1>Loading ...</h1>}
        {!loading &&
          products.map((product: propDocument, index: number) => (
            <Card key={product.product_name || index} {...product} />
          ))}
      </div>
    </>
  );
}

export default ProductPage;
