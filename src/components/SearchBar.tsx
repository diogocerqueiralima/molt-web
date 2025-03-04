export default function SearchBar( { placeholder }: { placeholder: string } ) {

    return (

        <div className="flex flex-row items-center gap-2 bg-gray-700 px-4 py-2 rounded-md transition duration-500 border border-gray-600 focus-within:border-blue-500">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input className="outline-0 text-base" type="text" placeholder={placeholder}></input>

        </div>

    )

}