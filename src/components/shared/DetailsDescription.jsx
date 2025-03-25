"use client";
import React, { useRef, useState } from "react";
import img from "../../../public/ring/bb.png";
import Image from "next/image";
import ReviewTab from "./ReviewTab";
import img1 from "../../../public/ring/img1.png";
import img2 from "../../../public/ring/img2.png";
import img3 from "../../../public/ring/img3.png";
import img4 from "../../../public/ring/img4.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CardShop from "./CardShop";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {  useGetReviewTotalQuery } from "@/redux/Api/webmanageApi";

const DetailsDescription = ({ product,id }) => {
  const { data: reviewData } = useGetReviewTotalQuery(id);
  const [activeTab, setActiveTab] = useState("description");
  const category = [
    {
      img: img1,
      title: "Willow Diamond Engagement Ring",
      price: "$20.00",
    },
    {
      img: img2,
      title: "Willow Diamond Engagement Ring",
      price: "$20.00",
    },
    {
      img: img3,
      title: "Willow Diamond Engagement Ring",
      price: "$20.00",
    },
    {
      img: img4,
      title: "Willow Diamond Engagement Ring",
      price: "$20.00",
    },
    {
      img: img1,
      title: "Willow Diamond Engagement Ring",
      price: "$20.00",
    },
    {
      img: img2,
      title: "Willow Diamond Engagement Ring",
      price: "$20.00",
    },
    {
      img: img3,
      title: "Willow Diamond Engagement Ring",
      price: "$20.00",
    },
    {
      img: img4,
      title: "Willow Diamond Engagement Ring",
      price: "$20.00",
    },
  ];
  const splideRef = useRef(null);

  const handlePrevClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<");
    }
  };

  const handleNextClick = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">");
    }
  };
  return (
    <div className=" md:mt-20 mt-11">
      {/* Tab Navigation */}
      <div className="flex border-b justify-center mb-8">
        <button
          className={`px-4 py-2  text-gray-700 ${
            activeTab === "description" ? "border-b-2 border-black " : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 text-gray-700 ${
            activeTab === "reviews" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews {reviewData?.pagination?.totalReviews || 0}
        </button>
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === "description" && (
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        )}

        {activeTab === "reviews" && (
          <div>
            <ReviewTab id = {id} product={product}></ReviewTab>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsDescription;
