"use client";


import Image from "next/image";
import Link from "next/link";
import missingImage from '../../../public/missing-img.avif'

const GlobalSingleProduct = ({ item, handleCancel }) => {


    return (
        <div>
            <div onClick={handleCancel} className="relative">
                <Link href={`/productDetails/${item?._id}`}>
                    <Image
                        // onClick={increaseQuantity}
                        width={900}
                        height={400}
                        className=" md:h-[200px] object-cover"
                        src={item?.image_urls[0] ? item?.image_urls[0] : missingImage}
                        alt=""
                    />
                </Link>

            </div>
            <h1 className=" pt-2">{item?.name}</h1>
            <p className="text-sm">
                {Number(item?.discount_price || item?.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
            </p>
        </div>
    );
};

export default GlobalSingleProduct;
