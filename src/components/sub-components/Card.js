import React from "react";
import defaultImage from "../../assets/images/defaultImage.jpg";

function Card({
  title,
  description,
  price,
  color,
  os,
  processor,
  model,
  memory,
  brand,
}) {
  return (
    <div className="relative w-full max-h-fit border-b px-6 py-8">
      <div className="flex">
        <img
          src={defaultImage}
          className="w-1/2 md:w-[200px] lg:w-[250px]"
          alt="mobile"
        />
        <div className="pl-4 flex flex-col gap-2">
          <h1 className="text-lg">
            {title} | {memory} | {processor} processor | {os} | {color} |{" "}
            {brand} | {model}
          </h1>
          <p className="font-semibold">${price}</p>
          <p className="text-sm">
            {" "}
            <span className="line-through">${price + 100}</span>
            <span className="text-green-500"> 10% off</span>
          </p>

          <div className="hidden md:block lg:block">{description}</div>
          <div className="hidden md:block lg:block text-gray-500 text-sm">
            10,101 ratings and 101 reviews
          </div>
          <div className="hidden md:block lg:block text-xs">
            5k+ bought in last week
          </div>
          <div className="hidden lg:block absolute bottom-8">
            <button className="bg-amber-400 rounded-full px-8 py-2 mr-4">
              Add to Cart
            </button>
            <button className="bg-orange-500 rounded-full px-8 py-2 mr-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-around mt-4">
        <button className="bg-amber-400 rounded-full px-4 py-1 ">
          Add to Cart
        </button>
        <button className="bg-orange-500 rounded-full px-4  py-1">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
