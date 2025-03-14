"use client"
import React from 'react'
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';
import { usePathname } from 'next/navigation';

const ClientLayout = ({ children }) => {
    const pathname = usePathname();
    const hideNavbarFooter = pathname === "/auth/signIn" || 
    pathname === "/auth/signUp" ||
     pathname === "/auth/signIn/forgetPassword"||
     pathname === "/auth/signIn/forgetPassword/otp" ||
     pathname === "/auth/signIn/forgetPassword/otp/resetPassword";

  return (
    <>
      {!hideNavbarFooter && (
        <div className="border-b">
          <div className="container m-auto ">
            <Navbar pathname={pathname}/>
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
