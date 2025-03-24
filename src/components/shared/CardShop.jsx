import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiHeart } from "react-icons/fi";
import mainUrl from "./mainUrl";

const CardShop = async ({id}) => {
  // const shop = await mainUrl(`/products?category=${id}`);
  console.log({id});
  
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container m-auto mt-6">
      {/* {shop?.products?.map((item, index) => (
        <div key={index}>
          <div>
            <div className="relative">
              <Link href={"/productDetails"}>
                <Image
                  width={900}
                  height={400}
                  className=" md:h-[360px] object-cover"
                  src={item?.image_urls[0]}
                  alt=""
                />
              </Link>
              <div className="absolute cursor-pointer top-0 right-0 pr-2 pt-2 text-xl">
                <FiHeart />
              </div>
            </div>
            <h1 className=" pt-2">{item?.name}</h1>
            <p className="text-sm">{item?.price}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default CardShop;
