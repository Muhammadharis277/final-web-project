import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="flex flex-col gap-1 justify-center items-center text-center">
        <img src={product.image} alt={product.title} className="w-40 h-40" />
        <h3 className="text-sm font-bold mt-4">{product.title}</h3>
        <p className="text-sm text-[#024E82]">${product.price}</p>
        {product.quantity ? <p>Quantity: {product.quantity}</p> : null}
      </div>
    </Link>
  );
}
