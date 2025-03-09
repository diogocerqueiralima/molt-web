import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/context/CartContext";
import ProductServiceProvider from "@/context/ProductServiceContext";

export const metadata: Metadata = {
  title: "MOLT",
  description: "The e-commerce that we all love",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className="font-roboto antialiased">

        <ProductServiceProvider url="http://localhost:9090/api/v1/products">

          <CartProvider>

            <Header />
            {children}

          </CartProvider>

        </ProductServiceProvider>

      </body>
    </html>
  );
}
