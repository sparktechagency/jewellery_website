import Image from "next/image";
import React from "react";
import hero from "../../../public/shared/sss.jpg";
import CardShop from "../../components/shared/CardShop";
import img1 from "../../../public/ring/img1.png";
import img2 from "../../../public/ring/img2.png";
import img3 from "../../../public/ring/img3.png";
import img4 from "../../../public/ring/img4.png";
import img5 from "../../../public/ring/img5.png";
import img6 from "../../../public/ring/img6.png";
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

  return (
    <div className="container m-auto mt-9 px-4 lg:px-0">
      <div>
        <h1 className="pb-4">Home/Favorite</h1>
        <div
          className="relative bg-cover bg-center md:h-[55vh] h-[200px] -mt-[1px]"
          style={{
            width: "100%",
          }}
        >
          <Image
            src={hero}
            className="rounded-2xl"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute px-4 lg:px-0 inset-0 flex justify-center items-center ">
            <div className="">
              <div className="">
                <div className="text-3xl font-semibold md:text-5xl ">
                  <h1 className="">Favorite</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" pt-16">Showing 58 result</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container m-auto mt-4 ">
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
