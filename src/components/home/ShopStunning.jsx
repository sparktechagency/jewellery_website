import React from "react";
import img1 from "../../../public/home/add.png";
import img2 from "../../../public/home/over.png";
import img3 from "../../../public/home/pop5.png";
import Image from "next/image";
const ShopStunning = () => {
  return (
    <div className="container m-auto mt-28 px-4 lg:px-0">
      <div className="md:flex items-center gap-11 bg-[#F5F5F5]">
        <div className="flex items-center">
          <Image
            width={700}
            className="md:h-[600px] h-[500px]"
            height={300}
            src={img1}
            alt=""
          />
          <div className="-ml-52">
            <Image width={500} height={300} src={img2} alt="" />
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-4xl ">
            Shop Stunning <br />
            Earrings
          </h1>
          <p className="py-7">
            From classic studs to statement hoops, shop our bestselling earrings
            designed to add the perfect touch of elegance to any outfit.
          </p>
          <button className="border px-6 py-2 text-black">Explore Now</button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row bg-[#F5F5F5] mt-28 ">
        <div className="flex items-center md:px-20 px-6 py-4">
          <div>
            <div className="lg:text-4xl text-2xl">
              <h1>Create Your</h1>
              <h2>Dream Jewelry</h2>
            </div>
            <p className="py-6">
              Turn your vision into reality! Share a description and upload an
              image of your dream design, and our expert jewelers will craft a
              one-of-a-kind piece tailored just for you.
            </p>
            <button className="border px-6 py-2 text-black">Explore Now</button>
          </div>
        </div>
      
          <Image width={1500} height={600} src={img3} alt="image"/>
      
      </div>
    </div>
  );
};

export default ShopStunning;
