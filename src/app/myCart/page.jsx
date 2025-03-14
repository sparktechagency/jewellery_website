import React from 'react'
import hero from '../../../public/shared/sss.jpg'
import Image from 'next/image'
import AddCart from '../../components/cart/AddCart'
const page = () => {
  return (
    <div className='container m-auto mt-9 px-4 lg:px-0'>
        <div>
        <h1 className="pb-4">Home/Cart</h1>
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
                  <h1 className="">Cart</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddCart></AddCart>
    </div>
  )
}

export default page