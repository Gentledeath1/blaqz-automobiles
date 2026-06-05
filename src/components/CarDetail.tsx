import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { type Car, formatNGN, formatUSD } from "../data/cars";

interface Props {
  car: Car;
  currency: "NGN" | "USD";
  onClose: () => void;
}

export default function CarDetail({ car, currency, onClose }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [showBooking, setShowBooking] = useState(false);

  const prev = () =>
    setActiveImage((i) => (i === 0 ? car.images.length - 1 : i - 1));
  const next = () =>
    setActiveImage((i) => (i === car.images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 z-50 bg-[#faf8f5] overflow-y-auto">
      {/* topbar */}
      <div className="sticky top-0 z-10 bg-[#faf8f5]/95 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 h-[70px] flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-neutral-500 hover:text-black transition-colors"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
            Back to Inventory
          </button>
          <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
            {car.condition}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-16 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* image carousel */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <img
                src={car.images[activeImage]}
                alt={car.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
              <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] tracking-widest px-3 py-1">
                {activeImage + 1} / {car.images.length}
              </div>
            </div>

            {/* thumbnails */}
            <div className="flex gap-3">
              {car.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-1 aspect-[4/3] overflow-hidden transition-all duration-200 ${
                    activeImage === i
                      ? "ring-2 ring-black"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* details */}
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">
              {car.year} · {car.condition}
            </span>

            <h1 className="mt-3 text-4xl lg:text-5xl font-light leading-tight">
              {car.name}
            </h1>

            <p className="mt-6 text-3xl font-light">
              {currency === "NGN"
                ? formatNGN(car.priceNGN)
                : formatUSD(car.priceUSD)}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-px bg-black/10">
              {car.specs.map((spec) => (
                <div key={spec.label} className="bg-[#faf8f5] px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    {spec.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400 mb-4">
                Features
              </p>
              <div className="flex flex-wrap gap-2">
                {car.features.map((f) => (
                  <span
                    key={f}
                    className="px-4 py-2 border border-black/10 text-[11px] tracking-wide text-neutral-600"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* actions */}
            <div className="mt-10 flex flex-col gap-3">
              <button
                onClick={() => setShowBooking(true)}
                className="w-full py-4 bg-black text-white text-[11px] uppercase tracking-[0.22em] hover:bg-[#c6a972] hover:text-black transition-all duration-500"
              >
                Book an Inspection
              </button>
              <a
                href="https://wa.me/2349131390328"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 border border-black text-center text-[11px] uppercase tracking-[0.22em] hover:bg-black hover:text-white transition-all duration-500"
              >
                Send Inquiry on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* booking modal */}
      {showBooking && (
        <BookingModal car={car} onClose={() => setShowBooking(false)} />
      )}
    </div>
  );
}

function BookingModal({ car, onClose }: { car: Car; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const slots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Inspection booked for ${car.name} on ${form.date} at ${form.time}. We will contact you shortly.`,
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center px-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-8 py-6 border-b border-black/10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Book Inspection
            </p>
            <p className="mt-1 font-light text-lg">{car.name}</p>
          </div>
          <button
            onClick={onClose}
            className="hover:opacity-60 transition-opacity"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                Full Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-black/10 bg-[#faf8f5] px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                Phone
              </label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-black/10 bg-[#faf8f5] px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                placeholder="08012345678"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Email Address
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-black/10 bg-[#faf8f5] px-4 py-3 text-sm outline-none focus:border-black transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Preferred Date
            </label>
            <input
              required
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border border-black/10 bg-[#faf8f5] px-4 py-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Preferred Time
            </label>
            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setForm({ ...form, time: slot })}
                  className={`py-2.5 text-[11px] tracking-wide border transition-all duration-200 ${
                    form.time === slot
                      ? "bg-black text-white border-black"
                      : "border-black/10 text-neutral-500 hover:border-black hover:text-black"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Additional Notes
            </label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-black/10 bg-[#faf8f5] px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none"
              placeholder="Any specific questions or requests..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-black text-white text-[11px] uppercase tracking-[0.22em] hover:bg-[#c6a972] hover:text-black transition-all duration-500"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
