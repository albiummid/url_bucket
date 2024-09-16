import type { Metadata } from "next";
import "../../styles/globals.css";
import {Poppins} from 'next/font/google'
import dbConnect from "@/database/db";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets:['latin'],
  variable:"--font-poppins",
  weight:['200','400','600',"800"]
})
export const metadata: Metadata = {
  title: "URL Bucket",
  description: "A url/link management app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();
  return (
    <html lang="en">
      <body
        className={`antialiased ${poppins.variable} font-poppins`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
