import { useContext } from "react";
import Navbar from "./Navbar";
import { cartContext } from "../context/CartContext";
import ProductsList from "./ProductsList";

export default function Cart() {
  const { cart } = useContext(cartContext);

  return (
    <section className="w-screen font-primary">
      <Navbar />
      <div className="w-container px-10">
        {cart?.length > 0 ? <ProductsList prods={cart} /> : <h1 className="text-center font-bold">Cart is empty</h1>}
      </div>
    </section>
  );
}
