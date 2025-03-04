export default function Home() {
  return (
    <div className="flex flex-col">

      <div className="text-(--primary) min-h-screen flex flex-col items-center justify-center gap-8 bg-(--foreground)">

        <h1 className="text-6xl text-center w-3/4 uppercase font-bold tracking-wide">The best deals right at your fingertips!</h1>
        <p className="text-3xl text-center w-3/4">Find top-quality products at great prices with fast and secure delivery.</p>

        <div className="flex flex-row gap-8 my-8">
          <button className="bg-(--background) px-4 py-2 rounded-md text-xl cursor-pointer transition duration-500 hover:opacity-75">Browse Products</button>
          <button className="bg-(--highlight) px-4 py-2 rounded-md text-xl cursor-pointer transition duration-500 hover:opacity-75">Contact us</button>
        </div>

      </div>

      <div className="w-3/4 my-8 mx-auto">

      </div>

    </div>
  );
}
