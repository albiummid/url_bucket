import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProviderWrapper from "@/components/layout/ProviderWrapper";
import dbConnect from "@/database/db";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["200", "400", "600", "800"],
});
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
                <ColorSchemeScript />
            </head>
            <body
                className={`antialiased ${poppins.variable} font-poppins min-h-screen`}
            >
                <Header />
                <ProviderWrapper>
                    <div className=" min-h-[82vh]">{children}</div>
                </ProviderWrapper>
                <Footer />
            </body>
        </html>
    );
}
