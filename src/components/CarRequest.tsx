import { useState } from "react";

export default function CarRequest() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    make: "",
    model: "",
    year: "",
    budget: "",
    condition: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const conditions = ["Brand New", "Tokunbo", "Nigerian Used", "Any"];
  const budgets = [
    "Under ₦10M",
    "₦10M – ₦30M",
    "₦30M – ₦60M",
    "₦60M – ₦100M",
    "Above ₦100M",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="request" className="py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="uppercase tracking-[0.35em] text-[11px] text-neutral-400">
              Can't Find What You're Looking For?
            </span>
            <h2 className="mt-3 text-5xl font-light leading-tight">
              Request a
              <br />
              Specific Car.
            </h2>
            <p className="mt-6 text-neutral-500 text-sm leading-relaxed max-w-sm">
              Tell us exactly what you want and we will source it for you. We
              work with a wide network of trusted suppliers locally and
              internationally.
            </p>

            <div className="mt-12 flex flex-col gap-6">
              {[
                {
                  title: "We Source It",
                  desc: "Describe your ideal car and we will find it within our network.",
                },
                {
                  title: "You Inspect It",
                  desc: "Book a physical inspection before committing to anything.",
                },
                {
                  title: "We Deliver It",
                  desc: "Once satisfied, we handle all documentation and delivery.",
                },
              ].map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#c6a972] pt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-light">Request Received</h3>
                <p className="mt-3 text-sm text-neutral-400 max-w-xs leading-relaxed">
                  We will reach out within 24 hours via WhatsApp or email with
                  available options.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[11px] uppercase tracking-[0.22em] border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                      Phone
                    </label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="08012345678"
                      className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black transition-colors"
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
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                      Car Make
                    </label>
                    <input
                      required
                      value={form.make}
                      onChange={(e) =>
                        setForm({ ...form, make: e.target.value })
                      }
                      placeholder="e.g. Toyota"
                      className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                      Model
                    </label>
                    <input
                      required
                      value={form.model}
                      onChange={(e) =>
                        setForm({ ...form, model: e.target.value })
                      }
                      placeholder="e.g. Land Cruiser"
                      className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                    Preferred Year
                  </label>
                  <input
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    placeholder="e.g. 2021 or 2019 – 2022"
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-4 py-2 text-[11px] tracking-wide border transition-all duration-200 ${
                          form.budget === b
                            ? "bg-black text-white border-black"
                            : "border-black/10 text-neutral-500 hover:border-black hover:text-black"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                    Condition
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {conditions.map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setForm({ ...form, condition: c })}
                        className={`px-4 py-2 text-[11px] tracking-wide border transition-all duration-200 ${
                          form.condition === c
                            ? "bg-black text-white border-black"
                            : "border-black/10 text-neutral-500 hover:border-black hover:text-black"
                        }`}
                      >
                        {c}
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
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    placeholder="Any specific requirements, colour preferences, features..."
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white text-[11px] uppercase tracking-[0.22em] hover:bg-[#c6a972] hover:text-black transition-all duration-500"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
