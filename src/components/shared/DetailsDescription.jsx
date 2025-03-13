"use client";
import React, { useRef, useState } from "react";
import img from "../../../public/ring/bb.png";
import Image from "next/image";
import ReviewTab from "./ReviewTab";
import img1 from "../../../public/ring/img1.png";
import img2 from "../../../public/ring/img2.png";
import img3 from "../../../public/ring/img3.png";
import img4 from "../../../public/ring/img4.png";
import img5 from "../../../public/ring/img5.png";
import img6 from "../../../public/ring/img6.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CardShop from "./CardShop";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const DetailsDescription = () => {
  const [activeTab, setActiveTab] = useState("description");
  const category = [
    {
      img: img1,
      title: "Willow Diamond Engagement Ring",
      price:"$20.00"
    },
    {
      img: img2,
      title: "Willow Diamond Engagement Ring",
      price:"$20.00"

    },
    {
      img: img3,
      title: "Willow Diamond Engagement Ring",
      price:"$20.00"
    },
    {
      img: img4,
      title: "Willow Diamond Engagement Ring",
      price:"$20.00"
    },
    {
      img: img1,
      title: "Willow Diamond Engagement Ring",
      price:"$20.00"
    },
    {
      img: img2,
      title: "Willow Diamond Engagement Ring",
      price:"$20.00"
    },
    {
      img: img3,
      title: "Willow Diamond Engagement Ring",
      price:"$20.00"
    },
    {
      img: img4,
      title: "Willow Diamond Engagement Ring",
      price:"$20.00"
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
          Reviews (48)
        </button>
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === "description" && (
          <div className="text-gray-600">
            <h2 className=" font-semibold">Product Description</h2>
            <p className="mt-2 text-gray-700 text-sm">
              This exquisite engagement ring is a timeless symbol of love and
              commitment. Featuring a brilliant round-cut diamond at its center,
              expertly set to maximize sparkle, this ring radiates elegance and
              sophistication. The band is crafted from premium diamond, ensuring
              durability and a luxurious finish. Delicate accent stones add
              extra brilliance, enhancing the overall allure of the piece.
            </p>

            <div className="grid grid-cols-2">
              <div>
                <h3 className="mt-4  font-semibold">Product Details:</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  <li>Center Stone: [Diamond Shape & Carat Weight]</li>
                  <li>Setting Type: [Prong/Pavé/Halo/etc.]</li>
                  <li>Metal Type: [White Gold/Yellow Gold/Platinum/etc.]</li>
                  <li>Band Width: [Measurement]</li>
                  <li>Total Carat Weight: [If applicable]</li>
                  <li>
                    Side Stones: [If applicable, mention type, cut, and setting]
                  </li>
                  <li>
                    Ring Size Options: [Available sizes, with resizing options]
                  </li>
                  <li>Certification: [GIA/IGI/etc., if applicable]</li>
                  <li>Engraving: Custom engraving available</li>
                  <li>
                    Customization: Available in different metals and stone sizes
                  </li>
                </ul>

                <h3 className="mt-4  font-semibold">Product Details:</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  <li>Center Stone: [Diamond Shape & Carat Weight]</li>
                  <li>Setting Type: [Prong/Pavé/Halo/etc.]</li>
                  <li>Metal Type: [White Gold/Yellow Gold/Platinum/etc.]</li>
                  <li>Band Width: [Measurement]</li>
                  <li>Total Carat Weight: [If applicable]</li>
                  <li>
                    Side Stones: [If applicable, mention type, cut, and setting]
                  </li>
                  <li>
                    Ring Size Options: [Available sizes, with resizing options]
                  </li>
                  <li>Certification: [GIA/IGI/etc., if applicable]</li>
                  <li>Engraving: Custom engraving available</li>
                  <li>
                    Customization: Available in different metals and stone sizes
                  </li>
                </ul>
              </div>
              <div className="m-11 hidden md:block">
                <Image width={1000} height={1000} src={img} alt="image"/>
              </div>
            </div>
            
            <div className="mt-11">
        <div className="">
          <div className="flex justify-between mb-6">
            {/* <Title head={"category"} title={"Browse By Category"}></Title> */}
            <h1 className="text-2xl font-semibold">Related Product</h1>
            <div className="flex gap-2  ">
              <div onClick={handlePrevClick}>
                <div className=" rounded-full text-2xl p-2 text-black cursor-pointer">
                  <IoIosArrowBack />
                </div>
              </div>
              <div onClick={handleNextClick}>
                <div className="   rounded-full text-2xl p-2 text-black cursor-pointer">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div>
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: 5,
              gap: "1rem",
              arrows: false,
              pagination: false,
              breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                640: { perPage: 1 },
              },
            }}
            aria-label="Category Slide"
          >
            {category.map((item, index) => (
              <SplideSlide key={index}>
                <div>
                  <CardShop item={item}></CardShop>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <ReviewTab></ReviewTab>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsDescription;
