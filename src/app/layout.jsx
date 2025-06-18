import { Geist } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import ClientLayout from "./layout/ClientLayout";
import { ToastContainer } from "react-toastify";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { mainTheme } from "@/theme/ant-theme";

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
        cz-shortcut-listen="true"
        monica-id="ofpnmcalabcbjgholdjcjblkibolbppb"
        monica-version="7.9.5"
        data-new-gr-c-s-check-loaded="14.1239.0"
        data-gr-ext-installed=""
      >
        <ConfigProvider theme={mainTheme}>
          <ReduxProvider>
            <AntdRegistry>
              <div className="">
                <ToastContainer />
                <ClientLayout>{children}</ClientLayout>
              </div>
            </AntdRegistry>
          </ReduxProvider>
        </ConfigProvider>
      </body>
    </html >
  );
}
