import React from 'react'
import img66 from "../../../public/ring/img7.jpg";
import Image from 'next/image';
import Custom from '../../components/customize/Custom';
const app = () => {
  return (
    <div className='container mx-auto mt-9 px-4 lg:px-0'>
      <div>
              <h1 className="pb-4">Home/Customize</h1>
              <div
                className="relative bg-cover bg-center md:h-[55vh] h-[200px] -mt-[1px]"
                style={{
                  width: "100%",
                }}
              >
                <Image
                  src={img66}
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
                        <h1 className="">Customize</h1>
                      </div>
                      <p className="md:py-5 py-2 text-gray-600 max-w-2xl">
                        Discover timeless elegance with our stunning collection of
                        rings, designed for every occasion—from engagement to everyday
                        luxury.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Custom></Custom>
    </div>
  )
}

export default app