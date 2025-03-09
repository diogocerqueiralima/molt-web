"use client"

import { useProductService } from "@/context/ProductServiceContext";
import Product from "@/domain/Product";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Showcase( { title, href }: { title: string, href: string } ) {

    const productService = useProductService()
    const [products, setProducts] = useState<Product[]>([])
    
    useEffect(() => {

        productService.getFeaturedProducts()
            .then(featuredProducts => setProducts(featuredProducts))

    }, [])
    
    return (

        <div className="flex flex-row justify-between">

            <h1 className="text-(--primary) text-4xl">{title}</h1>
            <Link href={href} className="text-(--primary) text-xl py-2 px-4 rounded-md bg-(--foreground) cursor-pointer transition duration-500 hover:opacity-75">View all</Link>

            {
                products.map(product => <div key={product.id}>{product.name}</div>)
            }

        </div>

    )

}