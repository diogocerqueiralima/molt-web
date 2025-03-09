"use client"

import Product from "@/domain/Product";
import { productService } from "@/services/ProductService";
import React, { createContext, useContext } from "react";

interface ProductServiceContextType {
  getFeaturedProducts: () => Promise<Product[]>;
}

const ProductServiceContext = createContext<ProductServiceContextType | undefined>(undefined);

export const useProductService = () => {

  const context = useContext(ProductServiceContext);

  if (!context)
    throw new Error("useProductService must be used within a ProductServiceProvider");

  return context
};

export default function ProductServiceProvider({ url, children }: { url: string, children: React.ReactNode }) {

  const service = productService(url)

  return (
    <ProductServiceContext.Provider value={service}>
      {children}
    </ProductServiceContext.Provider>
  )

}