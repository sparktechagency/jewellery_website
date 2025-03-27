"use client";
import { Checkbox, Rate, Select, Slider } from "antd";
import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export const Filter = ({ showing, filters, setFilters, min, max }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="md:flex justify-between items-center md:pt-20 pt-5">
      <div className="flex justify-between md:flex-col">
        <h1 className="pb-4">Showing {showing} results</h1>
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
            <div className="absolute z-50 top-12 right-0 md:left-0 bg-white shadow-lg border p-4 w-72 md:w-96">
              <div className="flex justify-between mb-5">
                <h3 className="text-lg font-semibold ">Filter </h3>
                <button onClick={() => setShowFilter(!showFilter)}>
                  <RxCross2 className="text-2xl cursor-pointer" />
                </button>
              </div>



              <div className="mb-3">
                <label className="block text-lg ">Price Range</label>
                <Slider
                  range
                  draggableTrack
                  min={min}
                  max={max}
                  value={[filters?.price_min || min, filters?.price_max || max]}
                  onChange={([min, max]) =>
                    setFilters((p) => ({
                      ...p,
                      price_min: min,
                      price_max: max,
                    }))
                  }
                />

                <div className="flex gap-4 mt-2">
                  <input
                    type="number"
                    className="w-full border p-1 "
                    value={filters?.price_min || min}
                    onChange={(e) =>
                      setFilters((p) => ({ ...p, price_min: e }))
                    }
                    min={min}
                    max={max}
                  />
                  <input
                    type="number"
                    className="w-full border p-1 "
                    value={filters?.price_max || max}
                    onChange={(e) =>
                      setFilters((p) => ({ ...p, price_max: e }))
                    }
                    min={min}
                    max={max}
                  />
                </div>
                <div>
                  <h1 className="py-2 pt-4 text-lg">Availability</h1>
                  <div className="flex flex-col gap-2">
                    <Checkbox
                      value="in_stock"
                      checked={filters?.availability === "in_stock"}
                      onChange={(e) =>
                        setFilters((p) => ({
                          ...p,
                          availability: p.availability ? null : e.target.value,
                        }))
                      }
                    >
                      In Stock
                    </Checkbox>
                    <Checkbox
                      value="stock_out"
                      checked={filters?.availability === "stock_out"}
                      onChange={(e) =>
                        setFilters((p) => ({
                          ...p,
                          availability: p.availability ? null : e.target.value,
                        }))
                      }
                    >
                      Stock Out
                    </Checkbox>
                    <Checkbox
                      value="upcoming"
                      checked={filters?.availability === "upcoming"}
                      onChange={(e) =>
                        setFilters((p) => ({
                          ...p,
                          availability: p.availability ? null : e.target.value,
                        }))
                      }
                    >
                      Upcoming
                    </Checkbox>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 pb-2">
                  <h1 className=" text-lg">Rating</h1>
                  <Rate
                    allowHalf
                    value={filters?.rating}
                    onChange={(val) =>
                      setFilters((p) => ({ ...p, rating: val }))
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between md:flex-col mt-5 md:mt-0">
        <h1 className="pb-4">Sort By</h1>
        <Select
          labelInValue
          style={{
            borderRadius: "0px",
            width: 240,
          }}
          value={{ value: filters?.sort }}
          onChange={({ value }) => setFilters((p) => ({ ...p, sort: value }))}
          options={[
            {
              value: "low_to_high",
              label: "Price (Low to High)",
            },
            {
              value: "high_to_low",
              label: "Price (High to Low)",
            },
          ]}
        />
      </div>
    </div>
  );
};
