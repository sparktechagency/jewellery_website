import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import img1 from "../../../public/home/pop1.png";
import img2 from "../../../public/home/pop2.png";
import img3 from "../../../public/home/pop3.png";
import img4 from "../../../public/home/pop4.png";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: img1,
    name: "Willow Diamond Engagement Ring",
    price: 40,
    quantity: 2,
  },
  {
    id: 2,
    image: img2,
    name: "Solitaire Lab Diamond Pendant",
    price: 84,
    quantity: 2,
  },
  {
    id: 3,
    image: img3,
    name: "Paperclip Chain Bracelet",
    price: 78,
    quantity: 2,
  },
];

const AddCart = () => {
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
              {products.map((item) => (
                <div
                  key={item.id}
                  className="md:flex justify-between items-center border-b py-4"
                >
                  <div className="md:flex items-center hidden">
                    <input type="checkbox" className="mr-2" />
                    <Image
                      src={item.image}
                      width={80}
                      height={80}
                      className="rounded"
                      alt={item.name}
                    />
                  </div>

                  <div className="flex-1 px-4 hidden md:block">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="block md:hidden">
                    <div className="flex items-center"> 
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <Image
                          src={item.image}
                          width={80}
                          height={80}
                          className="rounded"
                          alt={item.name}
                        />
                      </div>
                      <div className="flex-1 px-4 md:hidden">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-5 md:mt-0 justify-between md:justify-start">
                    <div className="flex items-center">
                      <button className="px-2 py-1 border">-</button>
                      <span className="px-3">{item.quantity}</span>
                      <button className="px-2 py-1 border">+</button>
                    </div>
                    <p className="px-4 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button className="text-red-500">
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
            <p>Total Items: 2</p>
            <p>Sub Total: $80.00</p>
           <Link href={'/checkOut'}> <button className="w-full cursor-pointer bg-black text-white py-2 mt-4">
              Check Out
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
