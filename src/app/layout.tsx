import type {Metadata} from "next";
import "./globals.css";
import Providers from "@/providers";
import {Toaster} from "@/components/ui/sonner";
import Header from "@/components/globals/header/Header";
import Footer from "@/components/globals/footer/Footer";

export const metadata: Metadata = {
    title: "Pixelbloom Studio", description: "Share Your Art With The World",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <Header/>
            {children}
            <Footer/>
        </Providers>
        <Toaster theme="light"/>
        </body>
        </html>
    );
}