"use client";
import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardShop from "../../components/shared/CardShop";
import { useGetPopularProductQuery } from "@/redux/Api/webmanageApi";
import ProductSkeleton from "../../components/Skeleton/ProductSkeleton";

const OurPopularItems = () => {
  const { data: popularProduct, isLoading } = useGetPopularProductQuery();
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
        <div>
          <div className="flex justify-between mb-6">
            <h1 className="text-2xl font-semibold">Our Popular Items</h1>
            <div className="flex gap-2">
              <div>
                <div className="rounded-full text-2xl p-2 text-black cursor-pointer">
                  <IoIosArrowBack onClick={handlePrevClick} />
                </div>
              </div>
              <div>
                <div className="rounded-full text-2xl p-2 text-black cursor-pointer">
                  <IoIosArrowForward onClick={handleNextClick} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container m-auto mt-6 ">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>
        ) : (
          <div>
            <Splide
              ref={splideRef}
              options={{
                // type: "loop",
                perPage: 5,
                gap: "2rem",
                arrows: false, // Disable default arrows as custom ones are used
                pagination: false,
                breakpoints: {
                  1024: { perPage: 3 },
                  768: { perPage: 2 },
                  640: { perPage: 1 },
                },
              }}
              aria-label="Popular Items Carousel"
            >
              {popularProduct?.map((item, index) => (
                <SplideSlide key={index}>
                  <CardShop item={item} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurPopularItems;
