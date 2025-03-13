"use client";
import React from "react";
import Image from "next/image";
import { Form, Input, Radio, Button } from "antd";
import { FaRegCreditCard } from "react-icons/fa";
import img1 from "../../../public/home/pop1.png";
import img2 from "../../../public/home/pop2.png";
import img3 from "../../../public/home/pop3.png";
import Visa from "../../../public/ring/visa.png";
import Master from "../../../public/ring/money.png";
import Paypal from "../../../public/ring/paypal.png";

export const Check = () => {
  const products = [
    {
      id: 1,
      image: img1,
      name: "Willow Diamond Engagement Ring",
      price: 80,
      quantity: 2,
    },
    {
      id: 2,
      image: img2,
      name: "Solitaire Lab Diamond Pendant",
      price: 78,
      quantity: 1,
    },
  ];
  return (
    <div>
      <div className=" mt-10 md:grid grid-cols-12 gap-6">
        {/* Order Details */}
        <div className="col-span-5  ">
          <h2 className="text-lg font-semibold pb-4">Order Details</h2>
          <div className=" pb-3">
            <div className="grid grid-cols-12 font-medium text-gray-600">
              <span className="col-span-8">Product</span>
              <span className="col-span-4 text-right">Price</span>
            </div>
          </div>

          <div className="border-b">
            {products.map((item) => (
              <div key={item.id} className="flex items-center  py-4">
                <Image
                  src={item.image}
                  width={70}
                  height={70}
                  alt={item.name}
                />
                <div className="flex-1 px-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="py-4">
            <div className="flex justify-between  ">
              <p>Sub Total:</p>
              <p>$158.00</p>
            </div>
            <div className="flex justify-between border-b py-4">
              <p>Shipping Fee:</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between  text-lg">
              <p>Total:</p>
              <p>$158.00</p>
            </div>
          </div>
        </div>

        {/* Shipping & Payment */}
        <div className="col-span-7  md:border-l md:pl-6 mt-9 md:mt-0">
          <h2 className="text-lg font-semibold pb-4">Shipping Address</h2>
          <Form layout="vertical">
            <Form.Item name="street" label="Street Address">
              <Input
                style={{ padding: "9px", borderRadius: "0px" }}
                placeholder="Enter your street address"
              />
            </Form.Item>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item name="city" label="City">
                <Input
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Enter city"
                />
              </Form.Item>
              <Form.Item name="state" label="State">
                <Input
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Enter state"
                />
              </Form.Item>
            </div>
            <Form.Item name="zip" label="Zip Code">
              <Input
                style={{ padding: "9px", borderRadius: "0px" }}
                placeholder="Enter zip code"
              />
            </Form.Item>

            <h2 className="text-lg font-semibold pt-4 pb-2">Payment Options</h2>
            <Form.Item name="payment">
              <Radio.Group className="flex items-center gap-4">
                <Radio value="visa">
                  <Image
                    className="mt-[6px]"
                    src={Visa}
                    width={50}
                    height={30}
                    alt="Visa"
                  />
                </Radio>
                <Radio value="mastercard">
                  <Image
                    className="mt-[6px]"
                    src={Master}
                    width={50}
                    height={30}
                    alt="MasterCard"
                  />
                </Radio>
                <Radio value="paypal">
                  <Image
                    className="mt-[6px]"
                    src={Paypal}
                    width={50}
                    height={30}
                    alt="PayPal"
                  />
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="cardNumber" label="Cardholder Number">
              <Input
                style={{ padding: "9px", borderRadius: "0px" }}
                prefix={<FaRegCreditCard />}
                placeholder="Enter card number"
              />
            </Form.Item>
            <Form.Item name="cardName" label="Cardholder's Name">
              <Input
                style={{ padding: "9px", borderRadius: "0px" }}
                placeholder="Enter name"
              />
            </Form.Item>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item name="expiry" label="Expiry Date">
                <Input
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="mm/yy"
                />
              </Form.Item>
              <Form.Item name="cvc" label="CVC">
                <Input
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Input here"
                />
              </Form.Item>
            </div>

            <button type="primary" className="w-full bg-black text-white py-2">
              Pay Now
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
