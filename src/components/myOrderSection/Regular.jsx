
import React from "react";
import img1 from '../../../public/ring/img1.png'
import img2 from '../../../public/ring/img2.png'
import img3 from '../../../public/ring/img3.png'
import img4 from '../../../public/ring/img4.png'
import Image from "next/image";

const orders = [
  {
    orderNumber: "#123456",
    date: "12/03/25",
    product: {
      img: img1,
      name: "Willow Diamond Engagement Ring",
      quantity: 1,
    },
    total: "$80.00",
    status: "In Progress",
  },
  {
    orderNumber: "#123456",
    date: "07/03/25",
    product: {
      img: img2,
      name: "Solitaire Lab Diamond Pendant",
      quantity: 1,
    },
    total: "$40.00",
    status: "In Progress",
  },
  {
    orderNumber: "#123456",
    date: "04/03/25",
    product: {
      img: img3,
      name: "Paperclip Chain Bracelet",
      quantity: 3,
    },
    total: "$80.00",
    status: "Shipped",
  },
  {
    orderNumber: "#123456",
    date: "24/02/25",
    product: {
      img: img4,
      name: "Willow Diamond Engagement Ring",
      quantity: 1,
    },
    total: "$80.00",
    status: "Delivered",
  },
  {
    orderNumber: "#123456",
    date: "18/02/25",
    product: {
      img: img1,
      name: "Willow Diamond Engagement Ring",
      quantity: 4,
    },
    total: "$80.00",
    status: "Delivered",
  },
];

const OrderTable = () => {


  return (
    <div className=" mt-6 overflow-x-auto">
      <table className="w-full  ">
        <thead>
          <tr className=" text-left">
            <th className="py-3 px-5 border-b">Order Number</th>
            <th className="py-3 px-5 border-b">Date</th>
            <th className="py-3 px-5 border-b">Product</th>
            <th className="py-3 px-5 border-b">Total</th>
            <th className="py-3 px-5 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-4 px-5">{order.orderNumber}</td>
              <td className="py-4 px-5">{order.date}</td>
              <td className="py-4 px-5 flex items-center space-x-3">
                <Image
                  src={order.product.img}
                  alt={order.product.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium">{order.product.name}</p>
                  <p className="text-gray-500 text-sm">x {order.product.quantity}</p>
                </div>
              </td>
              <td className="py-4 px-5 font-medium">{order.total}</td>
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

export default OrderTable;
