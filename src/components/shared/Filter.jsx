"use client"
import { Select } from 'antd';
import React from 'react'

export const Filter = () => {
    const handleChange = (value) => {
        console.log(value); 
      };
  return (
    <div>
        <div>
          <h1 className='pb-4'>Short By</h1>
          <Select
            labelInValue
            defaultValue={{
              value: "lowToHigh",
              label: "Price (Low to High)",
            }}
            style={{
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
  )
}
