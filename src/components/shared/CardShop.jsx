import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiHeart } from 'react-icons/fi'

const CardShop = ({item}) => {
  return (
    <div>
        <div>
             <div className='relative'>
             <Link href={'/productDetails'}><Image
                width={900}
                height={400}
                className=" md:h-[360px] object-cover"
                src={item.img}
                alt=""
              /></Link>
              <div className='absolute cursor-pointer top-0 right-0 pr-2 pt-2 text-xl'>
              <FiHeart />
              </div>
             </div>
              <h1 className=" pt-2">{item.title}</h1>
              <p className='text-sm'>{item.price}</p>
            </div>
    </div>
  )
}

export default CardShop