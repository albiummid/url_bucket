import type { Metadata } from "next";
import "../styles/globals.css";
import '@mantine/core/styles.css';
import {Poppins} from 'next/font/google'
import dbConnect from "@/database/db";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProviderWrapper from "@/components/layout/ProviderWrapper";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
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
      <head>
        <ColorSchemeScript/>
      </head>
      <body
        className={`antialiased ${poppins.variable} font-poppins min-h-screen`}
      >
        <Header/>
       <ProviderWrapper>
       <div className=" min-h-[82vh]">
       {children}
       </div>
       </ProviderWrapper>
        <Footer/>
      </body>
    </html>
  );
}
