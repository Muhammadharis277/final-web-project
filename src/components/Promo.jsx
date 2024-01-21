export default function Promo() {
  return (
    <section className="w-full h-[500px]">
      <div className="container w-full h-[100%] grid grid-cols-[1.3fr_1fr] gap-4 p-10">
        <div className="w-full h-full bg-black text-white flex items-center justify-center text-center flex-col p-8">
          <h3 className="text-2xl">Peace of Mind</h3>
          <p className="text-sm my-4">
            A one-stop platform for all your fashion needs, hassle-free. Buy
            with a peace of mind.
          </p>
          <button className="text-[#024E82] bg-white rounded-none px-4 py-2">
            Buy Now
          </button>
        </div>
        <div className="w-full h-full bg-black text-white flex items-center justify-center text-center flex-col p-4">
          <h3 className="text-2xl">Buy 2 Get 1 Free</h3>
          <p className="text-sm my-4">
            End of season sale. Buy any 2 items of your choice and get 1 free.
          </p>
          <button className="text-[#024E82] bg-white rounded-none px-4 py-2">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
