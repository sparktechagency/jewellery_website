"use client";
import React from "react";
import { Form, Input, Button, Upload, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ChatBox from "./ChatBox";

const { Title } = Typography;

const Custom = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="container mx-auto mt-10 lg:flex justify-between space-x-12">
      {/* Left Column: Steps */}
      <div className="lg:flex-1 lg:space-y-6">
        <Title level={3}>How It Works?</Title>
        <ul className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Step 1:</strong> Share Your Idea – Upload a sketch, reference image, or describe your concept.
          </li>
          <li>
            <strong>Step 2:</strong> Select Materials – Choose your preferred metal, gemstones, and settings.
          </li>
          <li>
            <strong>Step 3:</strong> Approve the Design – Our expert jewelers will create a 3D design for your approval.
          </li>
          <li>
            <strong>Step 4:</strong> Crafting Begins – Once approved, we bring your vision to life with expert craftsmanship.
          </li>
          <li>
            <strong>Step 5:</strong> Receive Your Custom Piece – Your personalized jewelry is delivered to your doorstep.
          </li>
        </ul>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 space-y-6">
        <Title level={3}>Input Details</Title>
        <Form
          name="customForm"
          onFinish={onFinish}
          labelCol={{ span: 24 }} // Full width for labels
          wrapperCol={{ span: 24 }} // Full width for inputs
          labelAlign="left" // Makes labels appear vertically above inputs
          className="space-y-4"
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input style={{borderRadius:"0px" , padding:'10px'}} placeholder="Enter your full name"  />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input style={{borderRadius:"0px" , padding:'10px'}}  placeholder="Enter your email" className="p-2 border border-gray-300 rounded-md w-full" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input style={{borderRadius:"0px" , padding:'10px'}}  placeholder="Enter your phone number" className="p-2 border border-gray-300 rounded-md w-full" />
          </Form.Item>

          <Form.Item
            label="Delivery Address"
            name="address"
            rules={[{ required: true, message: "Please input your delivery address!" }]}
          >
            <Input style={{borderRadius:"0px" , padding:'10px'}}  placeholder="Enter your address" className="p-2 border border-gray-300 rounded-md w-full" />
          </Form.Item>

          <Form.Item
            label="Jewelry Type"
            name="jewelryType"
            rules={[{ required: true, message: "Please input jewelry type!" }]}
          >
            <Input style={{borderRadius:"0px" , padding:'10px'}}  placeholder="Enter jewelry type" className="p-2 border border-gray-300 rounded-md w-full" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea style={{borderRadius:"0px" }}  placeholder="Write here" className="p-2 border border-gray-300 rounded-md w-full" rows={4} />
          </Form.Item>

          <Form.Item  label="Upload Image" name="upload" valuePropName="fileList">
            <Upload
            
              name="file"
              action="/upload"
              listType="picture"
              showUploadList={{ showPreviewIcon: false }}
              maxCount={1}
            >
              <Button style={{borderRadius:"0px" }}  icon={<UploadOutlined />} className="bg-gray-800 text-white">
                Upload Image
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item >
            <button type="primary" htmlType="submit" className="w-full py-3 bg-black text-white ">
              Place Order
            </button>
          </Form.Item>
        </Form>
        <ChatBox></ChatBox>
      </div>
    </div>
  );
};

export default Custom;
