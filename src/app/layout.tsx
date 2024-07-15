import type { Metadata } from "next";
import { Inter, Chilanka} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chilanka = Chilanka({ 
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ella's bibliotek",
  description: "Ella's boksamling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chilanka.className}>{children}</body>
    </html>
  );
}
