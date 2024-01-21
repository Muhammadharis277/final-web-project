import ProductsList from "./ProductsList";

// TODO add topseller
export default function TopSellers() {
    return <div className="w-full my-20 p-4">
        <h1 className="text-xl font-bold text-center my-20">Top Sellers</h1>
        <ProductsList rows={1} />
    </div>
}