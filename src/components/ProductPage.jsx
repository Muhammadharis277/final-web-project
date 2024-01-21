import { useState, useEffect, useContext } from "react";
import { getProductById } from "../utils/utils";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopSellers from "./TopSellers";
import { cartContext } from "../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [error, setError] = useState();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    (async () => {
      const data = await getProductById(id);
      if (data.error) {
        setError(data.error);
        console.log("Error@Product: ", error);
      } else {
        setProduct(data);
        console.log("[Product] Data: ", data);
      }
    })();
  }, []);

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <section className="w-screen font-primary">
      <Navbar />
      <div className="w-container  px-10">
        <div className="py-10 gap-12 flex flex-wrap items-center justify-center">
          <div className="w-[300px] h-auto">
            <img src={product.image} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-xl">{product.title}</h3>
            <h3 className="text-xl text-[#AD4242]">PKR {product.price}</h3>
            <h3 className="text-xl">{product.category}</h3>
            <p className="font-bold text-xl">Quantity</p>
            <div className="flex gap-4">
              <div className="w-[150px] flex justify-between border border-black">
                <button
                  className="px-2 border-r border-black"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="px-2 border-l border-black"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <button className="bg-black text-white px-3 py-1 text-sm" onClick={() => {
                addToCart(product, quantity);
              }}>
                Add to Cart
              </button>
            </div>
            <p className="text-xl">Subtotal: PKR {product.price * quantity}</p>
          </div>
        </div>
        <div className="px-4 py-4">
          <h3 className="text-xl font-bold">Description:</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <TopSellers />
      <Footer />
    </section>
  );
}
