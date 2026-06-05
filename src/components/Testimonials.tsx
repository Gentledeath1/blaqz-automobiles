const testimonials = [
  {
    name: "Adebayo Okonkwo",
    role: "Business Executive, Lagos",
    text: "Blaqz made the entire process seamless. I found my Range Rover, booked an inspection, and drove it home within a week. The team is professional and the cars are exactly as described.",
    car: "2021 Range Rover Autobiography",
  },
  {
    name: "Chidinma Eze",
    role: "Entrepreneur, Abuja",
    text: "I was skeptical at first but the inspection process gave me full confidence. No hidden surprises, no pressure. Just a clean transaction. I have already referred three people.",
    car: "2022 Mercedes-Benz GLE 350",
  },
  {
    name: "Emeka Nwosu",
    role: "Corporate Buyer, Port Harcourt",
    text: "We purchased four vehicles for our company fleet through Blaqz. Their inventory is well curated and the after-sale support has been excellent. They are our go-to dealer.",
    car: "Fleet Purchase · 4 Vehicles",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-8xl mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <span className="uppercase tracking-[0.35em] text-[11px] text-neutral-400">
            Client Experiences
          </span>
          <h2 className="mt-3 text-5xl font-light leading-tight max-w-md">
            What Our Buyers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-100">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-10 flex flex-col justify-between gap-10"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 fill-[#c6a972]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100">
                <p className="font-medium text-sm">{t.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                  {t.role}
                </p>
                <p className="mt-2 text-[11px] text-[#c6a972] tracking-wide">
                  {t.car}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
