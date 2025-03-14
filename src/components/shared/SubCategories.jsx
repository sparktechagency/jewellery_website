"use client"
import React, { useRef } from 'react'
import img1 from '../../../public/shared/img1.png'
import img2 from '../../../public/shared/img2.png'
import img3 from '../../../public/shared/img3.png'
import img4 from '../../../public/shared/img4.png'
import img5 from '../../../public/shared/img5.png'
import img6 from '../../../public/shared/img6.png'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { MdStar } from 'react-icons/md'
import Image from 'next/image'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const SubCategories = () => {
    const category = [
            {
              img: img1,
              title: "Earings",
            },
            {
              img: img6,
              title: "Bracelets",
            },
            {
              img: img2,
              title: "Necklaces",
            },
            {
              img: img3,
              title: "Rings",
            },
            {
              img: img1,
              title: "Earings",
            },
            {
              img: img6,
              title: "Bracelets",
            },
            {
              img: img4,
              title: "Bracelets",
            },
            {
                img: img5,
                title: "Bracelets",
              },
              {
                img: img1,
                title: "Earings",
              },
              {
                img: img6,
                title: "Bracelets",
              },
              {
                img: img1,
                title: "Earings",
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
      <div>
      <div className="container mx-auto mt-20 ">
        <div className="mb-11">
          <div className="">
            <div className="text-center max-w-2xl mx-auto mb-6 px-4 lg:px-0">
              {/* <Title head={"category"} title={"Browse By Category"}></Title> */}
              <h1 className="md:text-3xl text-xl font-semibold">What Our Happy Customers Say</h1>
              <div className=" text-[#2E2E2E] pt-3 md:text-base text-sm">Real stories of love, elegance, and unforgettable moments—discover why our customers trust us for their most precious jewelry.</div>
            </div>
            <div></div>
          </div>

          <div className="">
            <div className="grid grid-cols-16">
              <div className=" justify-start flex items-center col-span-1" onClick={handlePrevClick}>
                <div className=" rounded-full text-2xl  text-black cursor-pointer">
                <SlArrowLeft />
                </div>
              </div>

              <div className="col-span-14">
                <Splide
                  ref={splideRef}
                  options={{
                    type: "loop",
                    perPage: 6,
                    gap: "1rem",
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                      1724: { perPage: 6 },
                      968: { perPage: 3 },
                      640: { perPage: 2 },
                    },
                  }}
                  aria-label="Category Slide"
                  className="w-full"
                >
                  {category.map((item, index) => (
                    <SplideSlide key={index} className="">
                    <div className="text-center ">
                      <div className="flex justify-center">
                        <Image
                          className="md:h-[220px] h-[145px] object-cover"
                          width={400}
                          height={200}
                          src={item.img}
                          alt=""
                        />
                      </div>
                      <h1 className="text-xl">{item.title}</h1>
                    </div>
                  </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className=" flex items-center justify-end col-span-1" onClick={handleNextClick}>
                <div className="   rounded-full text-2xl  text-black cursor-pointer">
                <SlArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SubCategories