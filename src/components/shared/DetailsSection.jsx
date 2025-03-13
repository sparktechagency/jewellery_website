"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdStar } from "react-icons/md";

const DetailsSection = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div>
        
      <div>
        <button className="px-4 py-1 mt-9 lg:mt-0 border border-black rounded-full">
          Save 30%
        </button>
        <h1 className="text-2xl font-semibold py-5">Willow Diamond Engagement Ring</h1>
        <div className="flex items-center gap-5 ">
          <div>
            <button className="rounded px-4  py-1 bg-gray-200">In Stock</button>
          </div>
          <div>
            <div className="flex gap-1 justify-center items-center ">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <span className="text-neutral-800 ">(26 Review)</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center py-5">
          <h1 className="text-xl">$89.00</h1>
          <del className="text-gray-600 text-sm">$95.00</del>
        </div>
        <p className="text-gray-600">
          This chic crescent-shaped ring showcases a cascade of graduated round
          diamonds, alternating between three- and four-prong settings, with a
          brilliant center stone.{" "}
        </p>
        <div>
          <div className="flex items-center space-x-4 py-5">
            <div>
            <p className="font-semibold">Color</p>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-yellow-400"></button>
              <button className="w-8 h-8 rounded-full bg-gray-300"></button>
              <button className="w-8 h-8 rounded-full bg-green-400"></button>
              <button className="w-8 h-8 rounded-full bg-pink-400"></button>
            </div>
            </div>
          </div>

          {/* Size Selector */}
          <div className=" flex items-center space-x-4">
           <div>
           <p className="font-semibold">Size</p>
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="md:px-4 px-2 md:py-2 py-1 border text-sm hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
           </div>
          </div>

          
          <div className="flex md:gap-4 gap-2 my-5">
         
          <div className=" flex items-center space-x-4">
            
            <div className="flex items-center space-x-4 border py-1 md:py-2">
              <button
                className="md:w-11 w-8 border-r  text-lg "
                onClick={decreaseQuantity}
              >
                -
              </button>
              <p className="md:px-4 px-2 ">{quantity}</p>
              <button
                className="md:w-11 w-8 border-l text-lg "
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className=" w-full">
            <button className="w-full md:py-[11px] py-[7px] bg-black text-white font-semibold ">
              Add To Cart
            </button>
          </div>
          <button className="border px-4 text-2xl ">
            <FaRegHeart />
          </button>
          </div>

          {/* Estimated Delivery Time */}
          <div className="mt-4 text-sm text-gray-500 flex items-center space-x-1">
            <p>Estimated delivery time: 5-6 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
