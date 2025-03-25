'use client'
import React, { useState } from 'react'
import Regular from './Regular';
import Custom from './Custom';
import { useGetMyCustomOrderQuery, useGetMyOrderQuery } from '../../redux/Api/webmanageApi'
const MainTab = () => {
    const [selectedTab, setSelectedTab] = useState("all");

    const {data:myOrder} = useGetMyOrderQuery()
    const {data:myCustomOrder} = useGetMyCustomOrderQuery()


    
  return (
    <div className='mt-11'>
        <div className='flex border-b justify-center'>
        <div
          onClick={() => setSelectedTab("all")}
          className={` py-2.5  mx-2  cursor-pointer ${
            selectedTab === "all" ? "border-b text-black  " : " "
          }`}
        >
          <div className="flex justify-between px-5">
            <span className="flex gap-2">
              
              Regular
            </span>
          </div>
        </div>
        <div
          onClick={() => setSelectedTab("submitted")}
          className={` py-2.5  mx-2 cursor-pointer ${
            selectedTab === "submitted"
              ? "border-b text-black"
              : " "
          }`}
        >
          <div className="flex justify-between px-5 ">
            <span className="flex gap-2">
       
              Customs & Repairs
            </span>
          </div>
        </div>
        </div>

        <div className=" ">
        {selectedTab === "all" && (
          <div>
           <Regular myOrder={myOrder}></Regular>
          </div>
        )}
        {selectedTab === "submitted" && (
          <div>
            <Custom myCustomOrder={myCustomOrder}></Custom>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainTab