"use client";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import hero from "../../../public/ring/hero.jpg";
import Image from "next/image";
import RingCategory from "../../components/ringSection/RingCategory";
import CardShop from "../../components/shared/CardShop";
import { Pagination } from "antd";
import { Filter } from "../../components/shared/Filter";
import mainUrl from "../../components/shared/mainUrl";
import ProductSkeleton from "../../components/Skeleton/ProductSkeleton";

const Page = () => {
  const limit = 10;
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    query: "",
    price_min: null,
    price_max: null,
    availability: null,
    rating: null,
    sort: "low_to_high",
    page: 1,
    limit,
  });
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      if (filters.query) params.append("query", filters.query);
      if (filters.price_min) params.append("price_min", filters.price_min);
      if (filters.price_max) params.append("price_max", filters.price_max);
      if (filters.availability)
        params.append("availability", filters.availability);
      if (filters.rating) params.append("rating", filters.rating);
      if (filters.sort) params.append("sort", filters.sort);
      if (filters.page) params.append("page", filters.page);
      if (filters.limit) params.append("limit", filters.limit);
      const fetched = await mainUrl(`/products?${params.toString()}`).finally(
        () => {
          setLoading(false);
        }
      );

      setProducts(fetched);

      if (min === 0 && max === 0 && fetched?.products?.length > 0) {
        let tempMin = Infinity;
        let tempMax = -Infinity;

        fetched.products.forEach((product) => {
          const currentMax = Math.max(product.price, product.discount_price);
          const currentMin = Math.min(product.price, product.discount_price);

          if (currentMax > tempMax) tempMax = currentMax;
          if (currentMin < tempMin) tempMin = currentMin;
        });

        setMin(tempMin);
        setMax(tempMax);
      }
    };

    fetchProducts();
  }, [filters]);
  return (
    <div className="container mx-auto mt-9 px-4 lg:px-0">
      <div>
        <h1 className="pb-4">Home/Search</h1>
        <div
          className="relative bg-cover bg-center md:h-[50vh] h-[200px] -mt-[1px] "
          style={{
            width: "100%",
          }}
        >
          <Image
            className="rounded-2xl"
            src={hero}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white md:px-32">
            <div className="">
              <div className="absolute ">
                <SearchOutlined
                  className="mt-3 ml-3"
                  style={{ color: "black", fontSize: "22px" }}
                />
              </div>
              <input
                value={filters.query}
                placeholder="Search for products..."
                onChange={(e) =>
                  setFilters((p) => ({ ...p, query: e.target.value }))
                }
                className="bg-white p-3 md:min-w-2xl pl-11 text-black"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <RingCategory></RingCategory>

      <div className="">
        <Filter
          showing={products?.products?.length || 0}
          filters={filters}
          setFilters={setFilters}
          min={min}
          max={max}
        />
      </div>
      {
        loading ?
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container m-auto mt-6 ">
            <ProductSkeleton></ProductSkeleton>
            <ProductSkeleton></ProductSkeleton>
            <ProductSkeleton></ProductSkeleton>
            <ProductSkeleton></ProductSkeleton>
          </div>
          :
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container m-auto mt-6 ">
            {products?.products?.length > 0 ? (
              products.products.map((product) => (
                <CardShop key={product._id} item={product} />
              ))
            ) : (
              <div className="w-full h-16 grid place-items-center col-span-4">
                <h3>{loading ? "Loading..." : "No Data"}</h3>
              </div>
            )}
          </div>
      }

      <div className="mt-4 flex justify-end">
        <Pagination
          current={filters.page}
          pageSize={limit}
          total={products?.pagination?.totalProducts || 0}
          onChange={(e) => setFilters((p) => ({ ...p, page: e }))}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Page;
