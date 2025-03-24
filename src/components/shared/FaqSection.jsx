"use client"

import { useGetAllFaqQuery } from "@/redux/Api/webmanageApi";
import { Collapse } from "antd";
import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const FaqSection = () => {
  const { data: faq, isLoading } = useGetAllFaqQuery();

  if (isLoading) {
    return <div className="text-center text-white">Loading...</div>;
  }
  const items = faq?.map((item, index) => ({
    key: item._id,
    label: item.question,
    children: <p>{item.answer}</p>,
  }));

  return (
    <div className="text-white mt-11 max-w-5xl m-auto">
      <Collapse
      
        ghost
        items={items}
        expandIconPosition="right"
        expandIcon={({ isActive }) =>
          isActive ? (
            <div
              style={{
                fontSize: "20px",
                color: "white",
                borderRadius: "50px",
                padding: "8px",
                backgroundColor: "black",
              }}
            >
              <IoIosArrowDown />
            </div>
          ) : (
            <div
              style={{
                fontSize: "20px",
                color: "black",
                borderRadius: "50px",
                border: "1px solid gray",
                padding: "6px",
              }}
            >
              <IoIosArrowForward />
            </div>
          )
        }
      />
    </div>
  );
};

export default FaqSection;
