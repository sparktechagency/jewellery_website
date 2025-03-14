"use client";
import { Checkbox, Rate, Select, Slider } from "antd";
import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const handleChange = (value) => {
    console.log(value);
  };

  const [priceRange, setPriceRange] = useState([null, null]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  const handleInputChange = (index, event) => {
    const newValue =
      event.target.value === "" ? null : Number(event.target.value);
    const newRange = [...priceRange];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };
  return (
    <div className="md:flex justify-between items-center md:pt-20 pt-5">
      <div className="flex justify-between md:flex-col">
        <h1 className="pb-4">Showing 58 results</h1>
        {/* <div>
        <h1 className="pb-4">Showing 58 results</h1>

        <button className="bg-black text-white px-4 py-2 flex  gap-2">
          <span className="pt-[3px]">
            <IoFilterSharp />
          </span>
          Filter
        </button>
      </div> */}
        <div className="relative">
          {/* ✅ Filter Button */}
          <button
            className="bg-black text-white px-4 py-2 flex items-center gap-2 "
            onClick={() => setShowFilter(!showFilter)}
          >
            <span className="pt-[3px]">
              <IoFilterSharp />
            </span>
            Filter
          </button>

          {/* ✅ Filter Card (Show/Hide) */}
          {showFilter && (
            <div className="absolute z-50 top-12  bg-white shadow-lg border p-4 w-72 md:w-96">
              <div className="flex justify-between mb-5">
                <h3 className="text-lg font-semibold ">Filter </h3>
                <button onClick={() => setShowFilter(!showFilter)}>
                  <RxCross2 className="text-2xl cursor-pointer" />
                </button>
              </div>

              {/* Example Filter Inputs */}

              <div className="mb-3">
                <label className="block text-lg ">Price Range</label>

                {/* ✅ Slider */}
                <Slider
                  range
                  draggableTrack
                  min={0}
                  max={2500}
                  value={priceRange.map((val) => (val === null ? 0 : val))}
                  onChange={handleSliderChange}
                />

                <div className="flex gap-4 mt-2">
                  <input
                    type="number"
                    className="w-full border p-1 "
                    value={priceRange[0] === null ? "" : priceRange[0]}
                    onChange={(e) => handleInputChange(0, e)}
                    min={0}
                    max={priceRange[1] || 2500}
                  />
                  <input
                    type="number"
                    className="w-full border p-1 "
                    value={priceRange[1] === null ? "" : priceRange[1]}
                    onChange={(e) => handleInputChange(1, e)}
                    min={priceRange[0] || 0}
                    max={2500}
                  />
                </div>
                <div>
                  <h1 className="py-2 pt-4 text-lg">Availability</h1>
                  <div className="flex flex-col gap-2">
                    <Checkbox>In Stock</Checkbox>
                    <Checkbox>Up Coming</Checkbox>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 pb-2">
                  <h1 className=" text-lg">Rating</h1>
                  <Rate allowHalf defaultValue={null} />
                </div>
              </div>

              {/* ✅ Submit Button */}
              <button className="bg-black text-white px-4 py-2 w-full  mt-2">
                Apply
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between md:flex-col mt-5 md:mt-0">
        <h1 className="pb-4">Short By</h1>
        <Select
          labelInValue
          defaultValue={{
            value: "lowToHigh",
            label: "Price (Low to High)",
          }}
          style={{
            borderRadius: "0px",
            width: 240,
          }}
          onChange={handleChange}
          options={[
            {
              value: "lowToHigh",
              label: "Price (Low to High)",
            },
            {
              value: "HighToLow",
              label: "Price (High to Low)",
            },
          ]}
        />
      </div>
    </div>
  );
};
