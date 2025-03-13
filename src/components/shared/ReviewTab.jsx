import React from "react";
import { MdStar } from "react-icons/md";
import { Form, Input, Button, Rate, Select } from "antd";
const ReviewTab = () => {
  // const handleChange = (value) => {
  //     console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  //   };
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  return (
    <div>
      <div className="w-full md:p-4 p-2 bg-[#F5F5F5] ">
        {/* Overall Rating */}
        <div className="bg-white p-6 text-center">
          <h2 className=" font-bold">
            <div className="flex gap-1 justify-center items-center pt-5">
              <span className="text-3xl"> 4.5 </span>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
          </h2>
          <p className="text-gray-600">Overall Rating</p>
        </div>

        {/* Filter Options */}
        <div className="md:flex gap-4 items-center mt-6">
          <div>
            <h1 className="pb-2">Rating</h1>
            <Select
              labelInValue
              defaultValue={{
                value: "lucy",
                label: "Lucy (101)",
              }}
              style={{
                width: 220,
              }}
              // onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack (100)",
                },
                {
                  value: "lucy",
                  label: "Lucy (101)",
                },
              ]}
            />
          </div>
          <div>
            <h1 className="pb-2">Sort By</h1>
            <Select
              labelInValue
              defaultValue={{
                value: "lucy",
                label: "Lucy (101)",
              }}
              style={{
                width: 220,
              }}
              // onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack (100)",
                },
                {
                  value: "lucy",
                  label: "Lucy (101)",
                },
              ]}
            />
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-6 space-y-4">
          {[1, 2, 3].map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold">User Name</h3>
                <p className="text-sm text-gray-500">05 January, 2025</p>
                <div>
                  <p className="text-yellow-500">★★★★☆</p>
                  <p className="text-gray-600 mt-2">
                    This is a sample review text showcasing user feedback.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button className="p-2 bg-gray-300 rounded">&lt;</button>
          <span className="text-gray-600">3 of 24</span>
          <button className="p-2 bg-gray-300 rounded">&gt;</button>
        </div>
      </div>

      <div className="mt-11">
        <h2 className="text-2xl font-semibold mb-4">Add a Review</h2>

        <Form layout="vertical" onFinish={onFinish}>
          {/* Rating */}
          <Form.Item label="Your Rating" name="rating">
            <Rate allowHalf />
          </Form.Item>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input style={{borderRadius:'0px', padding:'10px'}} placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              label="Your Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input style={{borderRadius:'0px', padding:'10px'}} placeholder="Enter your email" />
            </Form.Item>
          </div>

          {/* Review Text Area */}
          <Form.Item
            label="Review"
            name="review"
            rules={[{ required: true, message: "Please write a review" }]}
          >
            <Input.TextArea style={{borderRadius:'0px'}} rows={4} placeholder="Write your review here..." />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <button
              type="primary"
              htmlType="submit"
              className="bg-black text-white p-2 px-5"
            >
              Submit Review
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ReviewTab;
