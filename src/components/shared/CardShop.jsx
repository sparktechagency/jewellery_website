"use client";

import { useAddFavoriteMutation } from "@/redux/Api/webmanageApi";
import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { toast } from "react-toastify";

const CardShop = ({ item }) => {
  const [addFavorite] = useAddFavoriteMutation();
  console.log(item);

  const handleFavorite = async (record) => {
    console.log(record);
    const data = {
      product_id: record,
      type: "add",
    };
    try {
      const response = await addFavorite(data).unwrap();
      toast.success(response.message);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <div>
      <div className="relative">
        <Link href={`/productDetails/${item._id}`}>
          <Image
            width={900}
            height={400}
            className=" md:h-[360px] object-cover"
            src={item?.image_urls[0]}
            alt=""
          />
        </Link>
        <div
          onClick={() => handleFavorite(item._id)}
          className="absolute cursor-pointer top-0 right-0  flexitems-center p-1 mr-1 mt-1 rounded-full bg-white text-xl"
        >
          <FiHeart />
        </div>
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

export default CardShop;
