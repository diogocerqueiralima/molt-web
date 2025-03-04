"use client"

import Cart from "@/domain/Cart";
import { createContext } from "react";

export const CartContext = createContext<Cart | null>(null);

export default function CartProvider({ children }: { children: React.ReactNode }) {
    return (
        <CartContext.Provider value={new Cart()}>
            {children}
        </CartContext.Provider>
    );
}