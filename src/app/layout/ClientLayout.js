"use client"
import React from 'react'
import Navbar from '../../components/shared/Navbar';
import LogOutNavbar from '../../components/shared/LogOutNavbar';
import Footer from '../../components/shared/Footer';
import { usePathname } from 'next/navigation';
import Cookies from "js-cookie";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const hideNavbarFooter = pathname === "/auth/signIn" ||
    pathname === "/auth/signUp" ||
    pathname === "/auth/signIn/forgetPassword" ||
    pathname === "/auth/signIn/forgetPassword/otp" ||
    pathname === "/auth/signIn/forgetPassword/otp/resetPassword" ||
    pathname === "/auth/signUp/verifyRegisterOtp";

  const loggin = Cookies.get('jewellery-web-token');
  return (
    <>
      {!hideNavbarFooter && (
        <div className="border-b">
          <div className="container m-auto ">
            {
              loggin ?
                <Navbar pathname={pathname} />
                :
                <LogOutNavbar pathname={pathname} />
            }
            {/* <Navbar pathname={pathname} /> */}
          </div>
        </div>
      )}

      <div className=''>{children}</div>
      {!hideNavbarFooter && (
        <div className="bg-black pb-2 text-white">
          <Footer />
        </div>
      )}
    </>
  )
}

export default ClientLayout;
