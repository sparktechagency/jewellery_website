"use client";
import { Calendar, Form, Input, Modal, TimePicker, theme } from "antd";
import React, { useState } from "react";
import { useAddAppointmentMutation, useGetUnavailableQuery } from "@/redux/Api/webmanageApi";

const AppoinmentModal = ({ openResponsive, setOpenResponsive }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [form] = Form.useForm();

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { data: unAvailableAppointment } = useGetUnavailableQuery({
    month: currentMonth,
    year: currentYear,
  });
  const [appApointment] = useAddAppointmentMutation();
  
  const unavailableDates =
    unAvailableAppointment?.availableTimes?.map(
      (item) => new Date(item.start).toISOString().split("T")[0]
    ) || [];

  const disabledDate = (current) => {
    const formattedDate = current.format("YYYY-MM-DD");
    return unavailableDates.includes(formattedDate);
  };

  const onFinish = (values) => {

    const formatDateTime = (date, time) => {
      console.log(date,time)
      if (!date || !time) return null;
      const formattedTime = time.format("HH:mm:ss");
      const dateTime = new Date(`${date}T${formattedTime}`);
      console.log(`${date}T${formattedTime}`)
      return dateTime.toISOString();
    };

    const appointmentData = {
      start: formatDateTime(selectedDate, values.fromTime),
      end: formatDateTime(selectedDate, values.toTime),
      name: values.fullName,
      email: values.email,
      phone: values.number,
      notes: values.message || "",
    };
    
    console.log("Appointment Data:", appointmentData);
  };
  
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    <div key="1">
      <h1 className="text-xl font-semibold pt-5">Select Date & Time</h1>
      <Calendar
        className="w-full"
        fullscreen={false}
        onPanelChange={(value) => {
          setCurrentMonth(value.month() + 1);
          setCurrentYear(value.year());
        }}
        onSelect={(value) => setSelectedDate(value.format("YYYY-MM-DD"))}
        disabledDate={disabledDate}
      />
      <div className="md:grid grid-cols-2 gap-3 mt-11">
        <div>
          <h1 className="text-lg font-semibold pb-2">Available Time</h1>
          <h1>From</h1>
          <Form.Item name="fromTime" rules={[{ required: true, message: "Please select start time" }]}>
            <TimePicker
              style={{ borderRadius: "0px" }}
              className="w-full"
              use12Hours
              format="h:mm a"
            />
          </Form.Item>
        </div>
        <div>
          <h1 className="text-lg font-semibold pb-2 pt-5 md:pt-0">To</h1>
          <Form.Item name="toTime" rules={[{ required: true, message: "Please select end time" }]}>
            <TimePicker
              style={{ borderRadius: "0px" }}
              className="w-full"
              use12Hours
              format="h:mm a"
            />
          </Form.Item>
        </div>
      </div>
      <button
        className="w-full bg-black text-white py-2 mt-6 cursor-pointer"
        onClick={() => setActiveTab(1)}
      >
        Continue
      </button>
    </div>,
    <div key="2">
      <h1 className="text-xl font-semibold pt-5 pb-4">Personal Information</h1>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item name="fullName" label="Name" rules={[{ required: true, message: "Please write a Name" }]}>
          <Input style={{ padding: "9px", borderRadius: "0px" }} placeholder="Enter your Full Name" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please write an Email" }]}>
          <Input style={{ padding: "9px", borderRadius: "0px" }} placeholder="Enter Email" />
        </Form.Item>
        <Form.Item name="number" label="Phone Number" rules={[{ required: true, message: "Please write a Number" }]}>
          <Input style={{ padding: "9px", borderRadius: "0px" }} placeholder="Enter Phone Number" />
        </Form.Item>
        <Form.Item label="Note (Optional)" name="message">
          <Input.TextArea style={{ borderRadius: "0px" }} rows={4} placeholder="Write your review here..." />
        </Form.Item>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setActiveTab(0)}
            className="w-full border text-black py-2"
          >
            Back
          </button>
          <button type="submit" className="w-full bg-black text-white py-2">
            Book
          </button>
        </div>
      </Form>
    </div>
  ];

  return (
    <Modal
      title=""
      centered
      open={openResponsive}
      onCancel={() => setOpenResponsive(false)}
      footer={null}
      width={{ xs: "90%", sm: "80%", md: "60%", lg: "50%", xl: "40%", xxl: "30%" }}
    >
      <div>
        <h1 className="text-xl font-semibold text-center pb-4">Book An Appointment</h1>
        <div className="bg-[#F5F5F5] p-4">
          <h1>Showroom Location</h1>
          <p>Dhaka, Banasree</p>
        </div>
        {tabContent[activeTab]}
      </div>
    </Modal>
  );
};

export default AppoinmentModal;