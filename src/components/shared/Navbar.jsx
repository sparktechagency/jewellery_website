"use client";

import { MdOutlinePhone } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import Link from "next/link";
import { useGetCategoryQuery } from "@/redux/Api/webmanageApi";
import { DownOutlined } from "@ant-design/icons";
import { Drawer, Dropdown } from "antd";
import { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import AppoinmentModal from "./AppoinmentModal";
import { useRouter } from "next/navigation";
import { useGetProfileQuery } from "@/redux/Api/userAPi";
import Cookies from "js-cookie";
import GlobalSearchModal from "./GlobalSearchModal";

const Navbar = ({ pathname }) => {
  const { data: category } = useGetCategoryQuery();
  const { data: profile } = useGetProfileQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [openResponsive, setOpenResponsive] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const loggin = Cookies.get('jewellery-web-token')
  console.log('loggin', loggin);

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    Cookies.remove('jewellery-web-token');
    router.push("/auth/signIn");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const items = [
    {
      label: <Link href={"/profile"}>My Account</Link>,
      key: "0",
    },
    {
      label: <Link href={"/myOrder"}>My Orders</Link>,
      key: "1",
    },
    {
      label: (
        <button
          className=" cursor-pointer"
          onClick={() => {
            handleLogOut();
          }}
        >
          Log Out
        </button>
      ),
      key: "2",
    },
  ];

  const categoryItems =
    category?.map((cat) => ({
      title: cat.name,
      path: `/${cat._id}`,
    })) || [];

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
      <div className="lg:pt-7 pt-3 pb-3">
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
          <Link href="/" className="lg:flex lg:justify-center">
            <div className="lg:text-center">
              <h1 className="md:text-5xl text-xl font-serif">CATHY'S</h1>
              <div className="">
                <h1 className="md:text-3xl  text-sm font-serif ">JEWELRY</h1>
              </div>
            </div>
          </Link>
          <div className="flex -mt-8 md:mt-0 gap-4 justify-end text-lg">
            <AiOutlineSearch size={loggin ? 20 : 26} onClick={showModal} className=" cursor-pointer" />
            <GlobalSearchModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}></GlobalSearchModal>

            {
              loggin ?
                <>
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
                          {profile?.name}
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
                </>
                :
                <>
                  <Link href={"/auth/signIn"}>LogIn</Link>
                </>
            }

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
                    <div className="text-black  hover:bg-gray-100 border-b py-3 px-1">
                      <Link href={'/'}><h1 className="text-black">Home</h1></Link>
                    </div>
                    {categoryItems?.map((item, index) => (
                      <div key={index}>
                        <Link
                          href={item?.path}
                          className={`
                            ${pathname === item?.path ? " underline " : "hover:underline "}
                            `} >
                          <h1 className="text-black  hover:bg-gray-100 border-b py-3 px-1">
                            {item?.title}
                          </h1>
                        </Link>
                      </div>
                    ))}
                    <div className="text-black  hover:bg-gray-100 border-b py-3 px-1">
                      <Link href={'/customize'}><h1 className="text-black">Customize</h1></Link>
                    </div>

                    {
                      loggin &&
                      <>
                        <div className="flex gap-2 bg-gray-100 py-3 px-1 mt-3">
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
                              <span className="">
                                {profile?.name}
                                <DownOutlined classID="ml-2" />
                              </span>
                            </button>
                          </Dropdown>
                        </div>
                      </>
                    }

                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex gap-16 justify-center mt-9">
            <div className="flex gap-4">
              <Link href={'/'} className={`
                  ${pathname === '/' ? " font-bold" : ""}
                  `}>Home</Link>
            </div>
            {categoryItems.map((item, index) => (
              <div key={index}>

                <Link
                  href={item.path}
                  className={`
                  ${pathname === item.path ? " font-bold" : ""}
                  `}
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <div className="flex gap-4">
              <Link href={'/customize'} className={`
                  ${pathname === '/customize' ? " font-bold" : ""}
                  `}>Customize</Link>
            </div>
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
