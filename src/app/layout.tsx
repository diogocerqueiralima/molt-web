import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/context/CartContext";

export const metadata: Metadata = {
  title: "MOLT",
  description: "The e-commerce that we all love",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased">

        <CartProvider>

          <Header />

          {children}
        </CartProvider>
      </body>
    </html>
  );
}
