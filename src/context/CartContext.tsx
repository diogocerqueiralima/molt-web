"use client"

import Cart from "@/domain/Cart";
import React, { createContext, useContext } from "react";

const CartContext = createContext<Cart | undefined>(undefined);

export const useCart = () => {

  const context = useContext(CartContext)

  if (!context)
    throw new Error("useCart must be used within a CartProvider");

  return context
};

export default function CartProvider({ children }: { children: React.ReactNode }) {

    return (
        <CartContext.Provider value={new Cart()}>
            {children}
        </CartContext.Provider>
    )
    
}