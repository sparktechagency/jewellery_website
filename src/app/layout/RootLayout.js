/* eslint-disable react/prop-types */
import React from "react";
import localFont from "next/font/local";
import "./globals.css";
// import ReduxProvider from "../../provider/ReduxProvider";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "JusBuy Website",
  description: "E-commerce",
};

export default async function RootLayout({ children}) {
  
  
 
  return (
    <html data-theme="product">
      <body
        className={`${geistSans.variable}  ${geistMono.variable} antialiased`}
      >
        {/* <ReduxProvider> */}
       
      
          <div className="  text-black">{children}</div>{" "}
          

        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
