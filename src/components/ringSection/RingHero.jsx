import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const RingHero = () => {
  return (
    <div className="">
        <div className="absolute ">
        <SearchOutlined className="mt-3 ml-3" style={{color:'black', fontSize:'22px'}}/>
        </div>
      <input className="bg-white p-3 md:min-w-2xl pl-11 text-black" type="text" />
    </div>
  );
};

export default RingHero;
