import { useState } from "react";
import { cars, formatNGN, formatUSD, type Car } from "../data/cars";

const filters = ["All", "Brand New", "Tokunbo", "Nigerian Used"];

interface Props {
  onSelectCar: (car: Car) => void;
  currency: "NGN" | "USD";
  onCurrencyChange: (c: "NGN" | "USD") => void;
}

export default function Inventory({
  onSelectCar,
  currency,
  onCurrencyChange,
}: Props) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? cars : cars.filter((c) => c.condition === active);

  return (
    <section id="inventory" className="py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="uppercase tracking-[0.35em] text-[11px] text-neutral-400">
              Our Collection
            </span>
            <h2 className="mt-3 text-5xl font-light leading-tight">
              Available Inventory
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => onCurrencyChange("NGN")}
              className={`px-4 py-2 text-[11px] tracking-[0.2em] uppercase border transition-all duration-300 ${
                currency === "NGN"
                  ? "bg-black text-white border-black"
                  : "border-black/20 text-neutral-400 hover:border-black hover:text-black"
              }`}
            >
              ₦ NGN
            </button>
            <button
              onClick={() => onCurrencyChange("USD")}
              className={`px-4 py-2 text-[11px] tracking-[0.2em] uppercase border transition-all duration-300 ${
                currency === "USD"
                  ? "bg-black text-white border-black"
                  : "border-black/20 text-neutral-400 hover:border-black hover:text-black"
              }`}
            >
              $ USD
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-[11px] tracking-[0.22em] uppercase border transition-all duration-300 ${
                active === f
                  ? "bg-black text-white border-black"
                  : "border-black/20 text-neutral-500 hover:border-black hover:text-black"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              currency={currency}
              onSelect={() => onSelectCar(car)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CarCard({
  car,
  currency,
  onSelect,
}: {
  car: Car;
  currency: "NGN" | "USD";
  onSelect: () => void;
}) {
  return (
    <div className="group cursor-pointer bg-white overflow-hidden">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

        {car.badge && (
          <span className="absolute top-4 left-4 bg-black text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1">
            {car.badge}
          </span>
        )}

        <span
          className={`absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase px-3 py-1 ${
            car.condition === "Brand New"
              ? "bg-emerald-600 text-white"
              : car.condition === "Tokunbo"
                ? "bg-amber-500 text-black"
                : "bg-white text-black"
          }`}
        >
          {car.condition}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
              {car.year}
            </p>
            <h3 className="mt-1 text-lg font-light leading-snug">{car.name}</h3>
          </div>
          <div className="text-right shrink-0">
            <p className="text-lg font-medium">
              {currency === "NGN"
                ? formatNGN(car.priceNGN)
                : formatUSD(car.priceUSD)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-100">
          <span className="text-[11px] text-neutral-400 tracking-wide">
            {car.mileage}
          </span>
          <span className="w-px h-3 bg-neutral-200" />
          <span className="text-[11px] text-neutral-400 tracking-wide">
            {car.transmission}
          </span>
          <span className="w-px h-3 bg-neutral-200" />
          <span className="text-[11px] text-neutral-400 tracking-wide">
            {car.fuel}
          </span>
        </div>

        <button
          onClick={onSelect}
          className="mt-5 w-full py-3 border border-black text-[11px] tracking-[0.22em] uppercase hover:bg-black hover:text-white transition-all duration-500"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
