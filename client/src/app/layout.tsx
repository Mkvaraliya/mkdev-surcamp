import type { Metadata } from "next";
import '../sass/main.scss'
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/Components/layout/Header";
import "./globals.css";
import Head from "next/head";
import { getGlobalSettings } from "@/data/loaders";
import { Footer } from "@/Components/layout/Footer";
// import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function loader() {
  const { data } = await getGlobalSettings();
  if(!data) throw new Error("Failed to fetch global settings");
  return { header: data?.header, footer: data?.footer };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { header, footer } = await loader();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header data={header} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
