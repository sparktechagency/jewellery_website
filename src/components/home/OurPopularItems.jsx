"use client";
import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../../public/home/pop1.png";
import img2 from "../../../public/home/pop2.png";
import img3 from "../../../public/home/pop3.png";
import img4 from "../../../public/home/pop4.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardShop from '../../components/shared/CardShop'
const OurPopularItems = () => {
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
    <div className="container m-auto mt-20 px-4 lg:px-0">
      <div className="mb-11">
        <div className="">
          <div className="flex justify-between mb-6">
            {/* <Title head={"category"} title={"Browse By Category"}></Title> */}
            <h1 className="text-2xl font-semibold">Our Popular Items</h1>
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
  );
};

export default OurPopularItems;
