import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products/";

  async function getProductData() {
    setLoading(true);
    let response = await fetch(url + id);
    let data = await response.json();
    setProduct(data);
    setLoading(false);
  }
  useEffect(() => {
    getProductData();
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto pt-16">
      {loading ? "Fetching Product Data" : <ProductDetails product={product} />}
    </div>
  );
}

function ProductDetails(props) {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src={props.product.image}
          className="h-96"
          alt={props.product.title}
        />
      </div>

      <div className="w-1/2">
        <h1 className="text-3xl text-blue-700">{props.product.title}</h1>
        <p className="my-12">{props.product.description}</p>
        <span className="capitalize bg-blue-400 p-2 rounded-md">
          {props.product.category}
        </span>
        <div className="flex justify-between items-center">
          <h3 className=" text-lg mt-4">Rating: {props.product.rating.rate}</h3>
          <h3>Price: {props.product.price}</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-sm">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
