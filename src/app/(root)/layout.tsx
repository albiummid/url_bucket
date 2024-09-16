import type { Metadata } from "next";
import "../../styles/globals.css";
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets:['latin'],
  variable:"--font-poppins",
  weight:['200','400','600']
})
export const metadata: Metadata = {
  title: "URL Bucket",
  description: "A url/link management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${poppins.variable} font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
