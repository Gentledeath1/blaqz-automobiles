import { useState } from "react";
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import CarDetail from "./components/CarDetail";
import { type Car } from "./data/cars";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CarRequest from "./components/CarRequest";

export default function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");

  if (selectedCar) {
    return (
      <CarDetail
        car={selectedCar}
        currency={currency}
        onClose={() => setSelectedCar(null)}
      />
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
              alt="Hero"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full top-24 lg:top-26">
            <div className="max-w-3xl">
              <span className="uppercase tracking-[0.35em] text-[11px] text-white/50">
                Luxury Automobile Dealership · Lagos, Nigeria
              </span>
              <h1 className="mt-6 text-[64px] md:text-[100px] leading-none font-light text-white">
                Blaqz
                <br />
                <span className="italic text-[#c6a972]">Automobiles.</span>
              </h1>
              <p className="mt-8 text-white/60 text-lg max-w-xl leading-relaxed">
                Premium vehicles carefully selected for drivers who value
                excellence, prestige and performance.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#inventory"
                  className="px-8 py-4 bg-white text-black text-[11px] tracking-[0.22em] uppercase hover:bg-[#c6a972] hover:text-black transition-all duration-500"
                >
                  View Inventory
                </a>
                <a
                  href="https://wa.me/2349131390328"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 border border-white/30 text-white text-[11px] tracking-[0.22em] uppercase hover:border-white hover:bg-white/10 transition-all duration-500"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-12 mt-20 pt-10 border-t border-white/10">
              {[
                { value: "500+", label: "Cars Sold" },
                { value: "8+", label: "Years in Business" },
                { value: "100%", label: "Verified Inventory" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-light text-white">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Inventory
          onSelectCar={setSelectedCar}
          currency={currency}
          onCurrencyChange={setCurrency}
        />
        <Testimonials />
        <CarRequest />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
