"use client";
import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../../public/home/user1.png";
import img2 from "../../../public/home/user2.png";
import img3 from "../../../public/home/user3.png";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdStar } from "react-icons/md";
const Review = () => {
  const category = [
    {
      img: img1,
      title: "Earings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      img: img2,
      title: "Necklaces",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      img: img3,
      title: "Rings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },

    {
      img: img1,
      title: "Earings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      img: img2,
      title: "Necklaces",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    },
    {
      img: img3,
      title: "Rings",
      location: "New York, USA",
      review:
        "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
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
    <div>
      <div className="container mx-auto mt-20 ">
        <div className="mb-11">
          <div className="">
            <div className="text-center max-w-2xl mx-auto mb-6 px-4 lg:px-0">
              {/* <Title head={"category"} title={"Browse By Category"}></Title> */}
              <h1 className="text-3xl font-semibold">
                What Our Happy Customers Say
              </h1>
              <div className=" text-[#2E2E2E] pt-3 ">
                Real stories of love, elegance, and unforgettable
                moments—discover why our customers trust us for their most
                precious jewelry.
              </div>
            </div>
            <div></div>
          </div>

          <div className="">
            <div className="grid grid-cols-16">
              <div
                className=" justify-start flex items-center col-span-1"
                onClick={handlePrevClick}
              >
                <div className=" rounded-full text-2xl  text-black cursor-pointer">
                  <SlArrowLeft />
                </div>
              </div>

              <div className="col-span-14">
                <Splide
                  ref={splideRef}
                  options={{
                    type: "loop",
                    perPage: 3,
                    gap: "1rem",
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                      1724: { perPage: 3 },
                      968: { perPage: 2 },
                      640: { perPage: 1 },
                    },
                  }}
                  aria-label="Category Slide"
                  className="w-full"
                >
                  {category.map((item, index) => (
                    <SplideSlide key={index} className="">
                      <div className="text-center border p-4 py-8">
                        <div className="flex justify-center">
                          <Image
                            className="rounded-full"
                            width={80}
                            height={80}
                            src={item.img}
                            alt=""
                          />
                        </div>
                        <h1 className="text-xl">{item.title}</h1>
                        <h1 className="text-lg py-2">{item.location}</h1>
                        <p className="text-sm">{item.review}</p>
                        <div className="flex gap-1 justify-center pt-5">
                          <MdStar />
                          <MdStar />
                          <MdStar />
                          <MdStar />
                          <MdStar />
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div
                className=" flex items-center justify-end col-span-1"
                onClick={handleNextClick}
              >
                <div className=" rounded-full text-2xl  text-black cursor-pointer">
                  <SlArrowRight />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
