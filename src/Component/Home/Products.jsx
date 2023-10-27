import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import ProductDetails from "./ProductDetails";

const Products = () => {
  const [dataLength, setDataLength] = useState(6);
  const [showResults, setShowResults] = useState(false);
  const {
    data: products,
    error,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      return res.json();
    },
  });
  if (isPending) {
    <div>Loading....</div>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  const handleDonatedBtn = () => {
    setDataLength(products.length);
    setShowResults(true);
  };

  return (
    <div className=" my-10">
      <div className=" text-center space-y-3">
        <h1 className=" text-[#FF3811] font-bold text-lg">Popular Products</h1>
        <h1 className=" font-bold text-5xl">Browse Our Products</h1>
        <p className=" text-gray-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-10 my-5">
        {products?.slice(0, dataLength).map((na) => (
          <ProductDetails key={na._id} product={na}></ProductDetails>
        ))}
      </div>
      <div
        className={`text-center mb-20 ${
          showResults == true || products <= 6 ? "hidden" : ""
        }`}
      >
        <button
          onClick={handleDonatedBtn}
          className="btn py-3 px-8 btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-none"
        >
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
