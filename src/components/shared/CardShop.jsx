import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

const CardShop = ({ item }) => {
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
        <div className="absolute cursor-pointer top-0 right-0 pr-2 pt-2 text-xl">
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
