import Image from "next/image";
import React from "react";
import hero from "../../../public/shared/nnn.jpg";
import ProfileDetails from "../../components/shared/ProfileDetails";
const page = () => {
  return (
    <div className="container m-auto mt-9 px-4 lg:px-0">
      <div>
        <h1 className="pb-4">Home/Profile</h1>
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
          <div className="absolute px-4 lg:px-0 inset-0 flex max-w-2xl items-center ">
            <div className="">
              <div className="md:pl-20">
                <p className="text-xl">Leslie Alexander</p>
                <div className="text-3xl font-semibold md:text-5xl ">
                  <h1 className="">My Account</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileDetails></ProfileDetails>
    </div>
  );
};

export default page;
