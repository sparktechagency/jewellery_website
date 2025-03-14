"use client";
import { Calendar, Form, Input, Modal, theme } from "antd";
import React, { useState } from "react";
import { Space, TimePicker } from "antd";

const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
const AppoinmentModal = ({ openResponsive, setOpenResponsive }) => {

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    <div>
      <div>
        <div>
          <h1 className="text-xl font-semibold pt-5">Select Date & Time</h1>
          <div className="">
            <Calendar
              className="w-full "
              fullscreen={false}
              onPanelChange={onPanelChange}
            />
          </div>
        </div>

        <div className="md:grid grid-cols-2 gap-3 mt-11">
          <div>
            <h1 className="text-lg font-semibold pb-2">Available Time</h1>
            <h1>From</h1>
            <TimePicker
            style={{borderRadius:'0px'}}
              className="w-full"
              use12Hours
              format="h:mm a"
              onChange={onChange}
            />
          </div>

          <div>
            <h1 className="text-lg font-semibold pb-2 pt-5 md:pt-0">Sunday, 20 March</h1>
            <h1>To</h1>
            <TimePicker
            style={{borderRadius:'0px'}}
              className="w-full"
              use12Hours
              format="h:mm a"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <button className="w-full bg-black text-white py-2 mt-6 cursor-pointer" onClick={() => setActiveTab(1)}>Continue</button>
    </div>,
    <div>
      <div>
      <h1 className="text-xl font-semibold pt-5 pb-4">Personal Information</h1>
        <Form layout="vertical">
          <Form.Item name="fullName" label="Name">
            <Input
              style={{ padding: "9px", borderRadius: "0px" }}
              placeholder="Enter your Full Name"
              rules={[{ required: true, message: "Please write a Name" }]}
            />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input
              style={{ padding: "9px", borderRadius: "0px" }}
              placeholder="Enter Email"
              rules={[{ required: true, message: "Please write a Email" }]}
            />
          </Form.Item>

          <Form.Item name="number" label="Phone Number">
            <Input
              style={{ padding: "9px", borderRadius: "0px" }}
              placeholder="Enter Phone Number"
              rules={[{ required: true, message: "Please write a Number" }]}
            />
          </Form.Item>

          <Form.Item
            label="Note (Optional)"
            name="message"
            rules={[{ required: true, message: "Please write a Message" }]}
          >
            <Input.TextArea
              style={{ borderRadius: "0px" }}
              rows={4}
              placeholder="Write your review here..."
            />
          </Form.Item>

          <div className="grid grid-cols-2 gap-3">
          <button onClick={() => setActiveTab(0)} type="primary" className="w-full border text-black py-2">
            Back
          </button>
          <button type="primary" className="w-full bg-black text-white py-2">
            Book
          </button>
          </div>
        </Form>
      </div>
    </div>,
    <div>
      <h1>Tab 3</h1>
      <button onClick={() => setActiveTab(3)}>Next</button>
    </div>,
  ];
  return (
    <div>
      <Modal
        title=""
        centered
        open={openResponsive}
        
        onCancel={() => setOpenResponsive(false)}
        footer={null}
        width={{
          xs: "90%",
          sm: "80%",
          md: "60%",
          lg: "50%",
          xl: "40%",
          xxl: "30%",
        }}
      >
        <div>
          <h1 className="text-xl font-semibold text-center pb-4">
            Book An Appointment
          </h1>
          <div className="bg-[#F5F5F5] p-4">
            <h1>Showroom Location</h1>
            <p>Dhaka, Banasree</p>
          </div>

          <h2>{tabContent[activeTab]}</h2>
        </div>
      </Modal>
    </div>
  );
};

export default AppoinmentModal;
