import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProviderWrapper from "@/components/layout/ProviderWrapper";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import { userAgent } from "next/server";
import "../styles/globals.css";
const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["200", "300", "400", "500", "600"],
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
    const browserInfo = userAgent({ headers: headers() });
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body
                className={`antialiased ${poppins.variable} font-poppins min-h-screen`}
            >
                <ProviderWrapper data={{ browserInfo }}>
                    <Header />
                    {children}
                    <Footer />
                </ProviderWrapper>
            </body>
        </html>
    );
}
