import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/slices/cartSlice";

// const products = [
//   {
//     id: 1,
//     image: img1,
//     name: "Willow Diamond Engagement Ring",
//     price: 40,
//     quantity: 2,
//   },
//   {
//     id: 2,
//     image: img2,
//     name: "Solitaire Lab Diamond Pendant",
//     price: 84,
//     quantity: 2,
//   },
//   {
//     id: 3,
//     image: img3,
//     name: "Paperclip Chain Bracelet",
//     price: 78,
//     quantity: 2,
//   },
// ];

const AddCart = () => {
  const cart = useSelector((store) => store.cart);

  const totalPrice = cart.reduce((acc, item) => {
    const price = item.discount_price ? item.discount_price : item.price;
    return acc + price * item.quantity;
  }, 0);

  const dispatch = useDispatch();
  const handleMinus = (product) => {
    dispatch(
      updateQuantity({
        ...product,
        quantity: product.quantity - 1,
      })
    );
  };
  const handlePlus = (product) => {
    dispatch(
      updateQuantity({
        ...product,
        quantity: product.quantity + 1,
      })
    );
  };
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="mt-16">
      <h2 className="text-lg font-semibold pb-4">Product</h2>
      <div className="lg:grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="">
            <div className="hidden md:block">
              <div className="grid grid-cols-12 gap-5 border-b py-4 font-semibold">
                <div className="col-span-9 px-4">
                  <h1>Product</h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1 className="pl-2">Quantity</h1>
                </div>
                <div className="col-span-1 text-right pr-4">
                  <h1>Total</h1>
                </div>
              </div>
            </div>

            <div>
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="md:flex justify-between items-center border-b py-4"
                >
                  <div className="md:flex items-center hidden">
                    <Image
                      src={item.image_urls?.[0]}
                      width={80}
                      height={80}
                      className="rounded"
                      alt={item.name}
                    />
                  </div>

                  <div className="flex-1 px-4 hidden md:block">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">
                      {Number(item.discount_price || item.price).toLocaleString(
                        "en-US",
                        {
                          currency: "USD",
                          style: "currency",
                        }
                      )}
                    </p>
                  </div>

                  <div className="block md:hidden">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <Image
                          src={item.image_urls?.[0]}
                          width={80}
                          height={80}
                          className="rounded"
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-1 px-4 md:hidden">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">
                          {Number(
                            item.discount_price || item.price
                          ).toLocaleString("en-US", {
                            currency: "USD",
                            style: "currency",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-5 md:mt-0 justify-between md:justify-start">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleMinus(item)}
                        className="px-2 py-1 border"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => handlePlus(item)}
                        className="px-2 py-1 border"
                      >
                        +
                      </button>
                    </div>
                    <p className="px-4 font-semibold">
                      {Number(
                        (item.discount_price || item.price) * item.quantity
                      ).toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                      })}
                    </p>
                    <button
                      onClick={() => handleRemove(item)}
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-l col-span-4 mt-9 md:mt-0">
          <div className=" p-4 rounded-md">
            <h2 className="text-lg font-semibold pb-4">Order Overview</h2>
            <p>Total Items: {cart?.length}</p>
            <p>
              Sub Total:{" "}
              {Number(totalPrice).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <Link href={"/checkOut"}>
              {" "}
              <button className="w-full cursor-pointer bg-black text-white py-2 mt-4">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
