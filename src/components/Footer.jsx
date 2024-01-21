const links = {
  "Company Info": ["About Us", "Latest Props", "Contact Us", "Shop"],
  "Help Links": [
    "Tracking",
    "Order Status",
    "Delivery",
    "Shipping Info",
    "FAQ",
  ],
  "Useful Links": [
    "Special Offers",
    "Gift Cards",
    "Advertising",
    "Terms of Use",
  ],
};

export default function Footer() {
  return (
    <section className="w-full bg-gray-50" id="#contact">
      <div className="container px-10 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {Object.keys(links).map((link) => (
            <div className="flex flex-col gap-2 p-4">
              <h3 className="font-bold">{link}</h3>
              {links[link].map((item) => (
                <p className="text-sm">{item}</p>
              ))}
            </div>
          ))}
          <div className="p-4">
            <h3 className="font-bold">Get in the Know</h3>
            <input
              placeholder="Enter Email"
              className="border-b-2 border-black bg-transparent p-2"
            />
          </div>
        </div>
        {/* TODO */}
      </div>
    </section>
  );
}
