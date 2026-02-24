import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "T\u00e4by kommun - \u00d6ppna Data (DEMO)",
  description:
    "Demo av hur T\u00e4by kommun kan dela \u00f6ppna data med medborgare och f\u00f6retag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${roboto.variable} font-sans antialiased bg-[#F5F5F5] text-gray-800 min-h-screen flex flex-col`}
      >
        <DemoBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
