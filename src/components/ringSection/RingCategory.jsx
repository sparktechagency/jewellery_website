import React from 'react'
import img1 from '../../../public/ring/img1.png'
import img2 from '../../../public/ring/img2.png'
import img3 from '../../../public/ring/img3.png'
import img4 from '../../../public/ring/img4.png'
import img5 from '../../../public/ring/img5.png'
import img6 from '../../../public/ring/img6.png'
import Image from 'next/image'
const RingCategory = () => {
    const category = [
        {
          img: img1,
          title: "Earings",
        },
        {
          img: img2,
          title: "Necklaces",
        },
        {
          img: img3,
          title: "Rings",
        },
        {
          img: img4,
          title: "Bracelets",
        },
        {
            img: img5,
            title: "Bracelets",
          },
          {
            img: img6,
            title: "Bracelets",
          },
      ];
  return (
    <div>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 container m-auto mt-11 text-center">
        {category.map((item,index) => (
          <div key={index}>
            <div>
                <Image width={900} height={400} className=" h-auto md:h-[240px] object-cover" src={item.img} alt="" />
                <h1 className="text-lg  pt-2">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RingCategory