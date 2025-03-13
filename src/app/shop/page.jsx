import React from "react";
import RingHero from "../../components/ringSection/RingHero";
import hero from "../../../public/ring/hero.jpg";
import Image from "next/image";
import img1 from "../../../public/ring/img1.png";
import img2 from "../../../public/ring/img2.png";
import img3 from "../../../public/ring/img3.png";
import img4 from "../../../public/ring/img4.png";
import img5 from "../../../public/ring/img5.png";
import img6 from "../../../public/ring/img6.png";
import RingCategory from "../../components/ringSection/RingCategory";
import CardShop from "../../components/shared/CardShop";
import { IoFilterSharp } from "react-icons/io5";
import { Dropdown, Select } from "antd";
import { Filter } from "../../components/shared/Filter";
const page = () => {
  const shops = [
    {
      img: img1,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img4,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img2,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img1,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img6,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img3,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img1,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img4,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img6,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img5,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img4,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
    {
      img: img6,
      title: "Willow Diamond Engagement Ring",
      price: "$10.99",
    },
  ];

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className="container mx-auto mt-9 px-4 lg:px-0">
      <div>
        <h1 className="pb-4">Home/Search</h1>
        <div
          className="relative bg-cover bg-center md:h-[50vh] h-[500px] -mt-[1px] "
          style={{
            width: "100%",
          }}
        >
          <Image
            className="rounded-2xl "
            src={hero}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white md:px-32">
            <RingHero></RingHero>
          </div>
        </div>
      </div>
      <RingCategory></RingCategory>

      <div className="">
        
        <Filter></Filter>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container m-auto mt-6 ">
        {shops.map((item, index) => (
          <div key={index}>
            <CardShop item={item}></CardShop>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
