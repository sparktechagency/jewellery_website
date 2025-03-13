import {Geist} from 'next/font/google'
import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import ClientLayout from "./layout/ClientLayout";

const geist = Geist({
  subsets:['latin']
})
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
  title: "Kidsknowrights",
  description: "Kidsknowrights Website",
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
          <div className="">
            <ClientLayout>{children}</ClientLayout>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
