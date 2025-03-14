import React from "react";
import hero from "../../../public/shared/sss.jpg";
import Image from "next/image";
const page = () => {
  return (
    <div className="container m-auto mt-9 px-4 lg:px-0">
      <div>
        <h1 className="pb-4">Home/Terms & Condition</h1>
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
                  <h1 className="">Terms & Condition</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-6 mt-11">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          Crafting Timeless Beauty, Just for You
        </h1>
        <p className=" text-lg text-gray-600">
          At Cathy’s Jewelry, we believe that jewelry is more than just an
          accessory—it’s a reflection of love, style, and unforgettable moments.
          Whether you’re looking for the perfect engagement ring, a personalized
          piece, or a statement accessory, we are here to bring your vision to
          life with elegance and craftsmanship.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800  mb-2">
          Our Story
        </h2>
        <p className="text-lg text-gray-600 ">
          Born from a passion for fine jewelry, Cathy’s Jewelry was founded to
          offer unique, high-quality designs that blend tradition with modern
          artistry. Our team of expert jewelers and designers work meticulously
          to craft pieces that are as special as the moments they celebrate.
        </p>
      </div>

      <div className="mb-6 ">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          What We Offer
        </h2>
        <div className="">
          <div className="flex gap-2 items-center">
            <div className=" text-indigo-600 ">💎</div>
            <h3 className=" font-medium text-gray-800">
              Exquisite Jewelry Collection
            </h3>
            <p className="text-gray-600">
              - From engagement rings to everyday essentials, discover pieces that
              suit every style.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <div className=" text-indigo-600 ">💍</div>
            <h3 className="font-medium text-gray-800">
              Custom Jewelry Creations
            </h3>
            <p className="text-gray-600">
              - Turn your dream design into reality with our easy customization
              process.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <div className=" text-indigo-600">✨</div>
            <h3 className=" font-medium text-gray-800">
              Premium Craftsmanship
            </h3>
            <p className="text-gray-600">
             - Made with the finest materials, ensuring lasting beauty and
              durability.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <div className=" text-indigo-600 ">🌍</div>
            <h3 className=" font-medium text-gray-800">
              Ethically Sourced Materials
            </h3>
            <p className="text-gray-600">
              We prioritize sustainability, using responsibly sourced diamonds
              and gemstones.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800  mb-2">
          Why Choose Us?
        </h2>
        <div className="">
          <div className="flex gap-2 items-center">
            <span className="text-green-500  ">✔</span>
            <p className="font-medium">
              Personalized Service – Every order is handled with care to ensure
              a seamless experience.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-green-500 text-xl ">✔</span>
            <p className="font-medium">
              Quality You Can Trust – Expertly handcrafted jewelry designed to
              last a lifetime.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-green-500 text-xl ">✔</span>
            <p className="font-medium">
              Secure & Insured Shipping – Safe delivery to your doorstep,
              anywhere in the world.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-green-500 text-xl ">✔</span>
            <p className="font-medium">
              Satisfaction Guaranteed – Your happiness is our priority, with
              excellent customer support at every step.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Join Our Story
        </h2>
        <p className=" text-gray-600 ">
          We invite you to explore our collections and create something truly
          special with us. Whether you’re celebrating love, marking a milestone,
          or treating yourself, Cathy’s Jewelry is here to make every moment
          shine.
        </p>
      </div>
    </div>
  );
};

export default page;
