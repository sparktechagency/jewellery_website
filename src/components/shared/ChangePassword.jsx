"use client";
import React from "react";
import { Form, Input, Radio, Button } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
const ChangePassword = () => {
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

          <div className="col-span-6 md:pl-6 mt-9 md:mt-0">
            <h1 className="text-xl font-semibold pb-4">Change Password</h1>
            <Form layout="vertical">
              {/* Current Password */}
              <Form.Item
                name="currentPassword"
                label="Current Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your current password",
                  },
                ]}
              >
                <Input.Password
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Enter your current password"
                />
              </Form.Item>

              {/* New Password */}
              <Form.Item
                name="newPassword"
                label="New Password"
                rules={[
                  { required: true, message: "Please enter a new password" },
                ]}
              >
                <Input.Password
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Enter your new password"
                />
              </Form.Item>

              {/* Confirm Password */}
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                rules={[
                  { required: true, message: "Please confirm your password" },
                ]}
              >
                <Input.Password
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Confirm your password"
                />
              </Form.Item>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-black text-white py-2">
                Change Password
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
