import React from "react";

const ProductDetails = ({ product }) => {
  const { product_name,image_url,price } = product;
  return (
    <div className="card bg-base-100 shadow-xl border">
     <div className="m-5">
     <figure className="rounded-lg h-52 w-full bg-slate-100">
        <img className="  rounded-lg h-52 w-full" src={image_url} />
      </figure>
     </div>
      <div className=" px-5 pb-5 text-center">
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div>
        <h2 className=" text-xl font-bold">{product_name}</h2>
          <p className="font-bold text-lg text-[#FF3811]">${price}</p>
        
      </div>
    </div>
  );
};

export default ProductDetails;
