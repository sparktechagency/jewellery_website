"use client";
import React from "react";
import { Form, Input, Radio, Button } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
const EditAddress = () => {
  return (
    <div>
      <div>
        <div className=" mt-10 md:grid grid-cols-12 gap-6">
          {/* Order Details */}
          <div className="col-span-6">
            <h2 className="text-2xl font-semibold">Welcome to your account!</h2>
            <p className="text-gray-600 mt-2">
              Update your details, manage addresses, store payment methods, and
              keep your account secure.
            </p>

            <p className="text-gray-600 mt-4">
              If you need any help{" "}
              <Link
                href="/contactUs"
                className="text-blue-600 underline font-medium"
              >
                contact us
              </Link>
              :
            </p>

            <div className="mt-5">
              <p className="flex items-center mb-2">
                <span className="mr-2">
                  <FaPhoneAlt />
                </span>{" "}
                (307) 555-0133
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2">
                  <IoMail />
                </span>{" "}
                debra.holt@example.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">
                  <FaLocationDot />
                </span>
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
            </div>
          </div>

          <div className="col-span-6  md:pl-6 mt-9 md:mt-0">
            <h1 className="text-xl font-semibold pb-4">Shipping Address</h1>
            <Form layout="vertical">
              <Form.Item name="street" label="Street Address">
                <Input
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Enter your street address"
                />
              </Form.Item>

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

              <Form.Item name="zip" label="Zip Code">
                <Input
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Enter zip code"
                />
              </Form.Item>
              <button
                type="primary"
                className="w-full bg-black text-white py-2"
              >
                Update
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
