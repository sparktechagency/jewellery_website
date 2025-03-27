"use client";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdStar, MdStarOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateColor,
  updateQuantity,
  updateSize,
} from "../../redux/slices/cartSlice";

const DetailsSection = ({ product }) => {
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

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart).find(
    (item) => item._id === product._id
  );

  const [selectedColor, setSelectedColor] = useState(
    cart?.color || product.colors?.[0] || ""
  );
  const [selectedSize, setSelectedSize] = useState(
    cart?.size || product.sizes?.[0] || ""
  );

  useEffect(() => {
    if (cart) {
      setSelectedColor(cart.color);
      setSelectedSize(cart.size);
    } else {
      setSelectedColor(product.colors?.[0] || "");
      setSelectedSize(product.sizes?.[0] || "");
    }
  }, [cart, product]);

  useEffect(() => {
    if (!cart) {
      dispatch(updateColor({ ...product, color: selectedColor }));
      dispatch(updateSize({ ...product, size: selectedSize }));
    }
  }, [dispatch, product, selectedColor, selectedSize, cart]);

  const handleColor = (color) => {
    setSelectedColor(color);
    dispatch(updateColor({ ...product, color }));
  };

  const handleSize = (size) => {
    setSelectedSize(size);
    dispatch(updateSize({ ...product, size }));
  };

  const quantity = cart?.quantity || 0;

  const handleAddToCart = () => {
    if (cart && quantity) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(
        addToCart({ ...product, color: selectedColor, size: selectedSize })
      );
    }
  };

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        ...product,
        quantity: quantity + 1,
      })
    );
  };
  const decreaseQuantity = () =>
    dispatch(
      updateQuantity({
        ...product,
        quantity: quantity - 1,
      })
    );
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
                {product?.colors?.map((color) => (
                  <button
                    onClick={() => handleColor(color)}
                    key={color}
                    className={`cursor-pointer md:px-4 px-2 md:py-2 py-1 border text-sm hover:bg-gray-200 ${
                      selectedColor === color && "bg-gray-200"
                    }`}
                  >
                    {color}
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
                    onClick={() => handleSize(size)}
                    key={size}
                    className={`cursor-pointer md:px-4 px-2 md:py-2 py-1 border text-sm hover:bg-gray-200 ${
                      selectedSize === size && "bg-gray-200"
                    }`}
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
                  className="md:w-11 w-8 border-r  text-lg cursor-pointer"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <p className="md:px-4 px-2 ">{quantity}</p>
                <button
                  className="md:w-11 w-8 border-l text-lg cursor-pointer"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className=" w-full">
              <button
                onClick={handleAddToCart}
                className={`w-full md:py-[11px] py-[7px] bg-black text-white font-semibold cursor-pointer`}
              >
                {!quantity ? "Add To Cart" : "Added To Cart"}
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
