import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";

export default function Header() {

    return (

        <header className="sticky top-0 w-full backdrop-blur-xs flex flex-row justify-around text-(--primary) py-8 items-center">

            <h1 className="text-4xl tracking-widest font-bold">MOLT</h1>

            <ul className="flex flex-flow gap-8 text-xl items-center">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="flex flex-flow gap-4 items-center">

                <CartIcon />
                <SearchBar placeholder="Search product..." />
                <button className="bg-(--foreground) px-4 py-2 rounded-md text-base border border-gray-600 cursor-pointer transition duration-500 hover:opacity-75">Sign In</button>

            </div>

        </header>

    )

}