import React from "react";
import { Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const ProfileDetails = () => {
  return (
    <div className=" mt-10 md:grid grid-cols-12 gap-6">
      {/* Left Section */}
      <div className="col-span-6">
        <h2 className="text-2xl font-semibold">Welcome to your account!</h2>
        <p className="text-gray-600 mt-2">
          Update your details, manage addresses, store payment methods, and keep
          your account secure.
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

      {/* Right Section */}
      <div className="col-span-6">
        <h2 className="text-xl font-semibold md:pb-6 pt-9 md:pt-0">Account Details</h2>

        {/* Login Details */}

        <div className="md:flex justify-between">
          <p className="font-medium ">Login Details:</p>
          <div className="mt-1 space-y-4">
            <p>
              <span className="">Full Name:</span>{" "}
              <h1 className="font-semibold">Leslie Alexander</h1>
            </p>
            <p>
              <span className="">Email:</span>{" "}
              <h1 className="font-semibold">debra.holt@example.com</h1>
            </p>
            <p>
              <span className="">Phone Number:</span>{" "}
              <h1 className="font-semibold">(208) 555-0112</h1>
            </p>
          </div>

          <div>
            <Link href={'/editProfile'}><button className="mt-4 cursor-pointer border px-7 py-2 border-gray-400">
              Edit Account
            </button></Link>
          </div>
        </div>

        {/* Password Section */}
        <div className="mt-6 md:flex justify-between">
          <p className="font-medium ">Password:</p>
          <p className="">
            Current Password: <h1>●●●●●●●●</h1>
          </p>
          <div>
            <Link href={'/changPass'}><button className="mt-2 border cursor-pointer px-7 py-2 border-gray-400">
              Change Password
            </button></Link>
          </div>
        </div>

        {/* Address Book */}
        <div className="mt-6 md:flex justify-between">
          <p className="font-medium text-gray-700">Address Book:</p>
          <p className="">
            <span className="font-medium">Shipping Address:</span>
            <br />
            2118 Thornridge Syracuse, Connecticut 35624
          </p>
          <div>
            <Link href={'/changeAddress'}><button className="mt-2 cursor-pointer border px-7 py-2 border-gray-400">
              Change Address
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
