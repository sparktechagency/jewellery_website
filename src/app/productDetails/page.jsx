import React from "react";
import img1 from "../../../public/ring/cc.png";
import img2 from "../../../public/ring/img2.png";
import img3 from "../../../public/ring/img3.png";
import img4 from "../../../public/ring/img4.png";
import img5 from "../../../public/ring/img5.png";
import Image from "next/image";
import DetailsSection from "../../components/shared/DetailsSection";
import DetailsDescription from "../../components/shared/DetailsDescription";

const Page = () => {
  return (
    <div className="container mx-auto mt-6 px-4">
      <h1 className="pb-4 text-gray-600">
        Home / Rings / Willow Diamond Engagement Ring
      </h1>

      <div className="lg:grid lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="lg:flex gap-2">
          {/* Small Thumbnail Images */}
          <div className="flex lg:flex-col flex-row gap-2 md:gap-2 lg:gap-2 xl:gap-2">
            {[img1, img2, img3, img4, img5].map((img, index) => (
              <Image
                key={index}
                className="object-cover cursor-pointer hover:border hover:border-gray-400 
                lg:w-20 lg:h-20 w-full
                xl:w-20 xl:h-20 2xl:w-30 2xl:h-30"
                width={45}
                height={45}
                src={img}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Large Image */}
          <div className="lg:flex-1 mt-2 lg:mt-0">
            <Image
              className=" object-cover 
              w-full sm:w-full md:w-full lg:h-[430px] xl:h-[430px] 2xl:h-[630px]"
              width={500}
              height={500}
              src={img1}
              alt="Main image"
            />
          </div>
        </div>

        {/* Details Section */}
        <DetailsSection />
      </div>

      {/* Description Section */}
      <DetailsDescription />
    </div>
  );
};

export default Page;
