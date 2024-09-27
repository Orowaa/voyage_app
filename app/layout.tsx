import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
