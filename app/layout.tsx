import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Voyage",
  description: "Application de voyage pour camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
      >
        <Navbar />
        <main className="relative overflow-hidden">{children}</main> 
        <Footer />
        
      </body>
    </html>
  );
}
