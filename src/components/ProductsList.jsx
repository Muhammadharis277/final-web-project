import { useState, useEffect } from "react";
import { getProducts } from "../utils/utils";
import ProductCard from "./ProductCard";


export default function ProductsList({ prods, rows = 2 }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      if(prods) {
        return setProducts(prods);
      }
      const data = await getProducts();
      if (data.error) {
        setError(data.error);
        console.log("Error@ProductsList: ", error);
      } else {
        setProducts(data);
        console.log("[ProductsList] Data: ", data);
      }
    })();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-content-center">
      {products.slice(0, rows * 4).map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
