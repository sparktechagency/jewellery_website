import React from "react";
import image from "../../../public/home/hero.jpg";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center md:h-[80vh] h-[500px] -mt-[1px]"
        style={{
          width: "100%",
        }}
      >
        <Image
          src={image}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute px-4 lg:px-0 inset-0 flex items-center container m-auto">
          <div className="">
            <div>
              <div className="text-3xl font-semibold md:text-5xl ">
                <h1>{"Timeless, Elegant, and Meaningful"}</h1>
                <h1 className="pt-2">—Jewelry That Tells Your Story</h1>
              </div>
              <p className="py-5 text-gray-600 max-w-2xl">
                Each piece is a reflection of who you are—express yourself with
                our collection of fine jewelry made just for you.
              </p>
              <Link href={'/shop'}><button className="bg-black cursor-pointer px-6 py-2 text-white">
                Shop Now
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
