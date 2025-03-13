import React from "react";
import img1 from "../../../public/home/cat1.png";
import img2 from "../../../public/home/cat2.png";
import img3 from "../../../public/home/cat3.png";
import img4 from "../../../public/home/cat4.png";
import Image from "next/image";
const DiscoverCollection = () => {
  const category = [
    {
      img: img1,
      title: "Earings",
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
      img: img4,
      title: "Bracelets",
    },
  ];
 
  return (
    <div className="px-4 lg:px-0">
      <div className="mt-24 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold">
          Discover Our Bestselling Collections
        </h1>
        <p className="pt-3 text-[#2E2E2E]">
          From timeless classics to modern designs, explore jewelry crafted to
          make every moment shine.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container m-auto mt-11 text-center">
        {category.map((item,index) => (
          <div key={index}>
            <div>
                <Image width={900} height={400} className="h-[360px] rounded-4xl" src={item.img} alt="image" />
                <h1 className="text-xl font-semibold pt-2">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverCollection;
