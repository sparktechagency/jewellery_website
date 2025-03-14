"use client";
import { MdOutlinePhone } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

import { IoBagHandleOutline } from "react-icons/io5";

import { LuHeart } from "react-icons/lu";
import Link from "next/link";

import { DownOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown, Space } from "antd";
import { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import AppoinmentModal from "./AppoinmentModal";
const Navbar = ({ pathname }) => {
  const [open, setOpen] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      label: <Link href={"/profile"}>My Account</Link>,
      key: "0",
    },
    {
      label: <Link href="/auth/signIn">Log Out</Link>,
      key: "1",
    },
  ];

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Ring", path: "/ring" },
    { title: "Necklaces", path: "/necklaces" },
    { title: "Earrings", path: "/earrings" },
    { title: "Watches", path: "/watches" },
    { title: "Bracelets", path: "/bracelets" },
    { title: "Pendants", path: "/pendants" },
    { title: "Customize", path: "/customize" },
  ];

  return (
   <div>
    <div className="lg:hidden block">
          <div className="flex justify-between px-4 py-1 bg-black text-sm text-white">
            <Link href={"/contactUs"}>
              <div className="flex gap-2 ">
                <MdOutlinePhone className="mt-1" />
                <h1>Contact Us</h1>
              </div>
            </Link>
            <div
              onClick={() => setOpenResponsive(true)}
              className="flex cursor-pointer gap-2 "
            >
              <RiCalendar2Line className="mt-1" />
              <h1>Book an appointment</h1>
            </div>
          </div>
        </div>
     <div className="lg:pt-7 pt-5 pb-5">
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 px-4 lg:px-0">
        <div className="hidden lg:block">
          <div className="flex gap-11">
            <Link href={"/contactUs"}>
              <div className="flex gap-2 ">
                <MdOutlinePhone className="mt-1" />
                <h1>Contact Us</h1>
              </div>
            </Link>
            <div
              onClick={() => setOpenResponsive(true)}
              className="flex cursor-pointer gap-2 "
            >
              <RiCalendar2Line className="mt-1" />
              <h1>Book an appointment</h1>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-center ">
          <div className="lg:text-center">
            <h1 className="md:text-5xl text-2xl font-serif ">CATHY'S</h1>
            <div className="">
              <h1 className="md:text-3xl hidden md:block text-xl font-serif ">
                JEWELRY
              </h1>
            </div>
          </div>
        </div>
        <div className="flex -mt-7 md:mt-0 gap-4 justify-end text-lg">
          <AiOutlineSearch />

          <div className="hidden md:block">
            <div className="flex gap-2">
              <AiOutlineUser className="" />
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a
                  className="-mt-1 cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Mr.Robin
                  <DownOutlined classID="ml-2" />
                </a>
              </Dropdown>
            </div>
          </div>
          <Link href={"/favorite"}>
            <LuHeart />{" "}
          </Link>

          <Link href={"/myCart"}>
            <IoBagHandleOutline />
          </Link>
          <div className="block lg:hidden">
            <div className="flex justify-end">
              <button className="text-2xl" onClick={showDrawer}>
                <HiOutlineBars3BottomRight />
              </button>
              <Drawer
                title="CATHY'S"
                placement="left"
                onClose={onClose}
                open={open}
                width={250}
                maskClosable={true}
              >
                <div className="flex flex-col  justify-center ">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.path}
                        className={`
              ${pathname === item.path ? " underline" : "hover:underline"}
            `}
                      >
                        <h1 className="text-black  hover:bg-gray-100 border-b py-3 px-1">{item.title}</h1>
                      </Link>
                    </div>
                  ))}
                  <div  className="flex gap-2 bg-gray-100 py-3 px-1 mt-3">
              <AiOutlineUser className="" />
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <button
                  className="-mt-1  cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="">Mr.Robin
                  <DownOutlined classID="ml-2" /></span>
                </button>
              </Dropdown>
            </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex gap-16 justify-center mt-9">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link
                href={item.path}
                className={`
              ${pathname === item.path ? " underline" : "hover:underline"}
            `}
              >
                {item.title}
              </Link>
            </div>
          ))}
          
        </div>
      </div>
      <AppoinmentModal
        openResponsive={openResponsive}
        setOpenResponsive={setOpenResponsive}
      ></AppoinmentModal>
    </div>
   </div>
  );
};

export default Navbar;
