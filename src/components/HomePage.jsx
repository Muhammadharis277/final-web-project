import Navbar from "./Navbar";
import ProductsList from "./ProductsList";
import Services from "./Services";
import Promo from "./Promo";
import Footer from "./Footer";
import TopSellers from "./TopSellers";

export default function HomePage() {
  return (
    <section className="w-screen font-primary">
      <Navbar />
      <section className="w-full min-h-[300px] flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Discover New Arrivals</h1>
          <p className="text-lg pt-3">Recently Added Shirts</p>
        </div>
      </section>
      <div className="container p-4 px-10">
        <ProductsList />
      </div>
      <Services />
      <Promo />
      <TopSellers />
      <Footer />
    </section>
  );
}
