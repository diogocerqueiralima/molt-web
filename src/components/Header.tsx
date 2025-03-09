"use client"

import Link from "next/link";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";

export default function Header() {

    const links = [
        {
            id: 1,
            name: "Home",
            href: "/"
        },
        {
            id: 2,
            name: "Products",
            href: "/products"
        },
        {
            id: 3,
            name: "About",
            href: "/about"
        },
        {
            id: 4,
            name: "Contact",
            href: "/contact"
        }
    ]

    return (

        <header className="fixed w-full backdrop-blur-md flex flex-row justify-around text-(--primary) py-8 items-center">

            <h1 className="text-4xl tracking-widest font-bold cursor-default">MOLT</h1>

            <ul className="flex flex-flow gap-8 text-2xl items-center">
                { links.map(link => <li key={ link.id } className="transition duration-500 hover:opacity-75"><Link href={ link.href }>{ link.name }</Link></li>) }
            </ul>

            <div className="flex flex-flow gap-4 items-center">

                <CartIcon />
                <SearchBar placeholder="Search product..." />
                <button className="bg-(--highlight) px-4 py-2 rounded-md text-base cursor-pointer transition duration-500 hover:opacity-75">Sign In</button>

            </div>

        </header>

    )

}