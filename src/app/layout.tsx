import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Chilanka } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chilanka = Chilanka({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ella's bibliotek",
  description: "Ella's boksamling",
  openGraph: {
    title: "Ella's bibliotek",
    description: "Välkommen till Ella's boksamling",
    url: "https://ellas-bibliotek.vercel.app/",
    siteName: "Ella's bibliotek",
    images: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chilanka.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
