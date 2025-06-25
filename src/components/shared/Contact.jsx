"use client";
import React from "react";
import { Form, Input, Radio, Button } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useAddContactMutation } from "@/redux/Api/webmanageApi";
import { toast } from "react-toastify";
import { useGetProfileQuery } from "@/redux/Api/userAPi";
const Contact = () => {
  const [addContact] = useAddContactMutation();
  const { data: profile } = useGetProfileQuery();
  const onFinish = async (values) => {
    const data = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message,
    };
    try {
      const response = await addContact(data).unwrap();
      toast.success(response.message);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <div>
      <div>
        <div className=" mt-10 md:grid grid-cols-12 gap-6">
          {/* Order Detail */}
          <div className="col-span-5  ">
            <h2 className="text-lg font-semibold pb-4">Contact Details</h2>
            <p className="pb-5">
              We’re here to help! If you have any questions, concerns, or
              feedback, feel free to reach out to us.
            </p>

            <div>
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

          <div className="col-span-7   md:pl-6 mt-9 md:mt-0">
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                name="name"
                label="Full Name"
               
              >
                <Input
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder={profile?.name || "Enter Name"}
                  rules={[{ required: true, message: "Please write a Name" }]}
                />
              </Form.Item>

              <Form.Item name="email" label="Email">
                <Input
                 initialValue={profile?.email} 
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder={profile?.email || "Enter Email"}
                  rules={[{ required: true, message: "Please write a Email" }]}
                />
              </Form.Item>

              <Form.Item name="phone" label="Phone Number">
                <Input
                  style={{ padding: "9px", borderRadius: "0px" }}
                  placeholder="Enter Phone Number"
                  type="Number"
                  rules={[{ required: true, message: "Please write a Number" }]}
                />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please write a Message" }]}
              >
                <Input.TextArea
                  style={{ borderRadius: "0px" }}
                  rows={4}
                  placeholder="Write your review here..."
                />
              </Form.Item>

              <button
                type="primary"
                className="w-full bg-black text-white py-2"
              >
                Message Sent
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
