import { Menu, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="w-full sticky top-0 bg-white">
      <div className="container flex justify-between items-center p-4 px-10">
        <div className="flex gap-6 items-center">
          <Link to="/">
            <h3 className="font-bold text-2xl">Grace</h3>
          </Link>
          <Link to="/">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#contact">Contact Us</Link>
        </div>
        <div className="flex gap-6 items-center">
          <User className="w-6 h-6" />
          <Link to="/cart">
            <ShoppingBag className="w-6 h-6" />
          </Link>
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
