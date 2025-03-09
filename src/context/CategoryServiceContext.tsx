"use client"

import { categoryService } from "@/services/CategoryService";
import { createContext, useContext } from "react";

export interface CategoryServiceContextType {
    getCategoryById: (id: number) => Promise<Category | undefined>;
}

const CategoryServiceContext = createContext<CategoryServiceContextType | undefined>(undefined)

export const useCategoryService = () => {

    const context = useContext(CategoryServiceContext)

    if (!context)
        throw new Error("useCategoryService must be used within a CategoryServiceProvider");
    
      return context
}

export default function CategoryServiceProvider({ url, children }: { url: string, children: React.ReactNode }) {

  const service = categoryService(url)

  return (
    <CategoryServiceContext.Provider value={service}>
      {children}
    </CategoryServiceContext.Provider>
  )

}