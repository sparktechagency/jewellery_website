import { Geist } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import ClientLayout from "./layout/ClientLayout";
import { ToastContainer } from "react-toastify";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const geist = Geist({
  subsets: ["latin"],
});
const geistSans = {
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
};
const geistMono = {
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
};

export const metadata = {
  title: "Jeweller Website",
  description: "Jeweller Website",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <AntdRegistry>
            <div className="">
              <ToastContainer />
              <ClientLayout>{children}</ClientLayout>
            </div>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
