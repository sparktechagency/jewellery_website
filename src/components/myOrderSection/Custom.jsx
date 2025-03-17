import React from "react";
import img1 from '../../../public/ring/img1.png'
import img2 from '../../../public/ring/img2.png'
import img3 from '../../../public/ring/img3.png'
import img4 from '../../../public/ring/img4.png'
import Image from "next/image";
const orders = [
 
  {
    orderNumber: "#123456",
    date: "04/03/25",
    img: img1,
    Description: "Gold ring with a shipping",
    type: "$80.00",
    status: "Shipped",
  },

  {
    orderNumber: "#123456",
    date: "04/03/25",
    img: img1,
    Description: "Gold ring with a shipping",
    type: "$80.00",
    status: "Shipped",
  },

  {
    orderNumber: "#123456",
    date: "04/03/25",
    img: img1,
    Description: "Gold ring with a shipping",
    type: "$80.00",
    status: "Shipped",
  },
  
];

const Custom = () => {
  return (
    <div className=" mt-6 overflow-x-auto">
      <table className="w-full  ">
        <thead>
          <tr className=" text-left">
            <th className="py-3 px-5 border-b">Order Number</th>
            <th className="py-3 px-5 border-b">Date</th>
            <th className="py-3 px-5 border-b">Jewelry Type</th>
            <th className="py-3 px-5 border-b">Description</th>
            <th className="py-3 px-5 border-b">Image</th>
            <th className="py-3 px-5 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-4 px-5">{order.orderNumber}</td>
              <td className="py-4 px-5">{order.date}</td>
              <td className="py-4 px-5">{order.type}</td>
              <td className="py-4 px-5 font-medium">{order.Description}</td>
              <td className="py-4 px-5 flex items-center space-x-3">
                <Image
                  src={order.img}
                  alt={order.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </td>
              
              <td
                className={`py-4 px-5 font-medium ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : order.status === "Shipped"
                    ? "text-blue-600"
                    : "text-yellow-600"
                }`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Custom;
