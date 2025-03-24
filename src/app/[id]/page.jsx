import Image from "next/image";
import React from "react";
import hero from "../../../public/ring/ringhero.jpg";
import SubCategories from "../../components/shared/SubCategories";
import CardShop from "../../components/shared/CardShop";
import { Filter } from "../../components/shared/Filter";
import { IoFilterSharp } from "react-icons/io5";
import img1 from "../../../public/ring/img1.png";
import img2 from "../../../public/ring/img2.png";
import img3 from "../../../public/ring/img3.png";
import img4 from "../../../public/ring/img4.png";
import img5 from "../../../public/ring/img5.png";
import img6 from "../../../public/ring/img6.png";
import img11 from "../../../public/ring/img11.jpg";
import img22 from "../../../public/ring/img22.jpg";
import img44 from "../../../public/ring/img4.jpg";
import img55 from "../../../public/ring/img5.jpg";
import img66 from "../../../public/ring/img6.jpg";

import mainUrl from "../../components/shared/mainUrl";

const data = {
  ring: {
    title: "Rings",
    img: hero,
  },
  necklaces: {
    title: "Neckless",
    img: img11,
  },
  earrings: {
    title: "Earrings",
    img: img22,
  },
  watches: {
    title: "Watches",
    img: img44,
  },
  bracelets: {
    title: "Bracelets",
    img: img55,
  },
  pendants: {
    title: "Pendants",
    img: img66,
  },
};

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

const page = async ({ params }) => {
  const { id } = await params;
  const category = await mainUrl(`/categories/${id}`);

  

  // const id = params.get("id")

  console.log(id);
  const componentData = data[id];
  console.log({ componentData });

  return (
    <div className="container mx-auto mt-9 px-4 lg:px-0">
      <div>
        <h1 className="pb-4">Home/{category?.name}</h1>
        <div
          className="relative bg-cover bg-center md:h-[55vh] h-[200px] -mt-[1px]"
          style={{
            width: "100%",
          }}
        >
          <Image
            src={category?.img_url}
            className="rounded-2xl"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute px-4 lg:px-0 inset-0 flex items-center ">
            <div className="">
              <div className="md:pl-20">
                <div className="text-3xl font-semibold md:text-5xl ">
                  <h1 className="">{category?.name}</h1>
                </div>
                <p className="md:py-5 py-2 text-sm  text-gray-600 max-w-2xl">
                  {category?.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubCategories categorys={category}></SubCategories>
      <div className="">
        <Filter></Filter>
      </div>

      <div className=" ">
        <CardShop id={id}></CardShop>
      </div>
    </div>
  );
};

export default page;
