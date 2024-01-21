import { Fingerprint, RotateCcw, ShipWheel, Truck } from "lucide-react";

export default function Services() {
  return (
    <section className="w-full h-[300px]">
      <div className="container h-full p-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-start sm:justify-items-center items-center gap-8">
        <div className="flex gap-3">
          <div>
            <Truck className="w-8 h-8 text-[#024E82]" />
          </div>
          <div>
            <p className="font-bold">Free Shipping</p>
            <p className="text-sm text-gray-500">
              Enjoy Free Shipping on all orders above $100
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <ShipWheel className="w-8 h-8 text-[#024E82]" />
          </div>
          <div>
            <p className="font-bold">Support 24/7</p>
            <p className="text-sm text-gray-500">
              Our support team is there to help you for queries
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <RotateCcw className="w-8 h-8 text-[#024E82]" />
          </div>
          <div>
            <p className="font-bold">30 Days Return</p>
            <p className="text-sm text-gray-500">
              Simply return it within 30 days for an exchange.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <Fingerprint className="w-8 h-8 text-[#024E82]" />
          </div>
          <div>
            <p className="font-bold">100% Payment Secure</p>
            <p className="text-sm text-gray-500">
              Our payment are secured with 256 bit encryption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
