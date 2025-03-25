"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdStar, MdStarOutline } from "react-icons/md";

const DetailsSection = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const savings =
    ((product?.price - product?.discount_price) / product?.price) * 100;

  const availability = {
    in_stock: "In Stock",
    stock_out: "Stock Out",
    upcoming: "Upcoming",
  };

  const averageRating =
    product.ratings.length > 0
      ? product.ratings.reduce((sum, rating) => sum + rating, 0) /
        product.ratings.length
      : 0;
  console.log(product, averageRating);

  return (
    <div>
      <div>
        {product.discount_price && (
          <button className="px-4 py-1 mt-9 lg:mt-0 border border-black rounded-full">
            Save {savings.toFixed(2)}%
          </button>
        )}
        <h1 className="text-2xl font-semibold py-5">{product.name}</h1>
        <div className="flex items-center gap-5 ">
          <div>
            <button className="rounded px-4  py-1 bg-gray-200">
              {availability?.[product.availability]}
            </button>
          </div>
          <div>
            <div className="flex gap-1 justify-center items-center ">
              {[...Array(5)].map((_, index) =>
                index < averageRating ? (
                  <MdStar key={index} />
                ) : (
                  <MdStarOutline key={index} />
                )
              )}
              <span className="text-neutral-800 ">
                ({product?.ratings?.length} Review)
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center py-5">
          <h1 className="text-xl">
            {Number(product?.discount_price || product?.price).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            )}
          </h1>
          {product?.discount_price && (
            <del className="text-gray-600 text-sm">
              {Number(product?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </del>
          )}
        </div>
        <p className="text-gray-600">{product?.details}</p>
        <div>
          <div className=" flex items-center space-x-4 mb-4">
            <div>
              <p className="font-semibold">Color</p>
              <div className="flex space-x-2">
                {product?.colors?.map((size) => (
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
          {/* Size Selector */}
          <div className=" flex items-center space-x-4">
            <div>
              <p className="font-semibold">Size</p>
              <div className="flex space-x-2">
                {product?.sizes?.map((size) => (
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
